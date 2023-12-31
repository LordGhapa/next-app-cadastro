import Cliente from "@/core/Cliente";
import Entrada from "./Entrada";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
}
export default function Formulario(props: FormularioProps) {
  const id = props?.cliente?.id ?? undefined;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
  return (
    <div className="flex flex-col gap-2">
      {id != null ? (
        <Entrada texto="Codigo" valor={id} somenteLeitura />
      ) : (
        false
      )}
      <Entrada texto="Nome" valor={nome} valorMudou={setNome} />
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      />
      <div className="mt-7 flex justify-end gap-2">
        <Botao
          cor="blue"
          onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))}
        >
          {id != null ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
}
