import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { useState } from "react";

export default function Home() {
  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela");

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
    console.log(typeof cliente.idade);
  }
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 35, "2"),
    new Cliente("Carla", 36, "3"),
    new Cliente("Pedro", 37, "4"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
    console.log(cliente.idade);
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);
    console.log(cliente.idade);
  }
  return (
    <>
      <div className={`flex h-screen items-center  justify-center text-white`}>
        <Layout titulo="Cadastro Simples">
          {visivel === "tabela" ? (
            <>
              <div className="flex justify-end">
                <Botao
                  onClick={() => {
                    setVisivel("formulario");
                  }}
                  className="mb-4"
                  cor="green"
                >
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
              cliente={clientes[2]}
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
