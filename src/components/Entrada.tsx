interface EntradaProps {
  tipo?: "text" | "number";
  texto: string;
  somenteLeitura?: boolean;
  valor: string | number;
  valorMudou?: (value: any) => void;
}
export default function Entrada(props: EntradaProps) {
  return (
    <div className="flex flex-col ">
      <label className="mb-4" htmlFor={props.texto}>
        {props.texto}
      </label>
      <input
        onChange={(e) => props?.valorMudou?.(e.target.value)}
        type={props.tipo ?? "text"}
        id={props.texto}
        value={props.valor}
        readOnly={props.somenteLeitura}
        className={`rounded-lg border border-purple-500 bg-gray-100 
        ${
          props.somenteLeitura ?? false ? "" : "focus:bg-white"
        } px-4 py-2 focus:outline-none `}
      />
    </div>
  );
}
