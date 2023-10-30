interface BotaoProps {
  children: React.ReactNode;
  cor?: "green" | "blue" | "gray";
  className?: string;
}

export default function Botao(props: BotaoProps) {
  const colorVariants = {
    blue: "from-blue-400 to-blue-700",
    green: "from-green-400 to-green-700",
    gray: "from-gray-400 to-gray-700",
  };
  const cor = colorVariants[props.cor ?? "gray"] ?? colorVariants.gray;

  return (
    <button
      className={`
        ${cor}
       rounded-md bg-gradient-to-r  px-4 py-2 text-white ${props.className}`}
    >
      {props.children}
    </button>
  );
}
