/* eslint-disable @typescript-eslint/no-misused-promises */
import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import type ClienteRepositorio from "@/core/ClienteRepositorio";
import { useState, useEffect } from "react";

export default function Home() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela");

  // const clientes = [
  //   new Cliente("Ana", 34, "1"),
  //   new Cliente("Bia", 35, "2"),
  //   new Cliente("Carla", 36, "3"),
  //   new Cliente("Pedro", 37, "4"),
  // ];

  useEffect(() => {
    void obterTodos();
  }, []);

  async function obterTodos() {
    await repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      setVisivel("tabela");
    });
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    await obterTodos();
  }
  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("formulario");
  }
  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente);
    await obterTodos();
  }
  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("formulario");
  }
  return (
    <>
      <div className={`flex h-screen items-center  justify-center text-white`}>
        <Layout titulo="Cadastro Simples">
          {visivel === "tabela" ? (
            <>
              <div className="flex justify-end">
                <Botao onClick={novoCliente} className="mb-4" cor="green">
                  Novo Cliente
                </Botao>
              </div>
              <Tabela
                clientes={clientes}
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}
              ></Tabela>
            </>
          ) : (
            <Formulario
              cliente={cliente}
              clienteMudou={salvarCliente}
              cancelado={() => {
                setVisivel("tabela");
              }}
            />
          )}
        </Layout>
      </div>
    </>
  );
}
