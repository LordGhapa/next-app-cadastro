import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Cliente from "@/core/Cliente";
import type ClienteRepositorio from "@/core/ClienteRepositorio";
import { useEffect, useState } from "react";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente();
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const { tabelaVisivel, exibirFormulario, exibirTabela } = useTabelaOuForm();
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
      exibirTabela();
    });
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    await obterTodos();
  }
  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario();
  }
  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    await obterTodos();
  }
  function novoCliente() {
    setCliente(Cliente.vazio());
    exibirFormulario();
  }

  return {
    salvarCliente,
    novoCliente,
    selecionarCliente,
    excluirCliente,
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela,
  };
}
