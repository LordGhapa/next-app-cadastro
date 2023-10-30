import Titulo from "./Titulo";

interface LayoutProps {
  titulo: string;
  children: React.ReactNode;
}

export default function Layout({ children, titulo }: LayoutProps) {
  return (
    <div className="flex w-2/3 flex-col rounded-md bg-white text-gray-800 ">
      <Titulo>{titulo}</Titulo>
      <div className="p-6">{children}</div>
    </div>
  );
}
