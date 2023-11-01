/* eslint-disable @typescript-eslint/no-misused-promises */
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";

import useClientes from "@/hooks/useClientes";

export default function Home() {
  const {
    excluirCliente,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela,
  } = useClientes();
  return (
    <>
      <div className={`flex h-screen items-center justify-center text-white`}>
        <Layout titulo="Cadastro Simples">
          {tabelaVisivel ? (
            <>
              <div className="flex justify-end">
                <Botao onClick={novoCliente} className="mb-4" cor="green">
                  Novo Cliente
                </Botao>
              </div>
              <Tabela
                clientes={clientes}
                clienteSelecionado={selecionarCliente}
                clienteExcluido={excluirCliente}
              ></Tabela>
            </>
          ) : (
            <Formulario
              cliente={cliente}
              clienteMudou={salvarCliente}
              cancelado={exibirTabela}
            />
          )}
        </Layout>
      </div>
    </>
  );
}
