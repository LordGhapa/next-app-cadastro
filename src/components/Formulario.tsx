import type Cliente from "@/core/Cliente";
import Entrada from "./Entrada";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
}
export default function Formulario(props: FormularioProps) {
  const id = props?.cliente?.id ?? null;
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
        <Botao cor="blue">{id != null ? "Alterar" : "Salvar"}</Botao>
        <Botao>Cancelar</Botao>
      </div>
    </div>
  );
}
