import Contas from "@/components/Contas";
import Salario from "@/components/Salario";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div>
      <h1>Gestão Financeira</h1>
      <Salario />
      <Contas />
      <Dashboard />
    </div>
  );
}
