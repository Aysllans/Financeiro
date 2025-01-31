"use client";
import { useFinanceiroStore } from "../store/financerioStore";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Dashboard = () => {
  const { contas, salario, totalDespesas } = useFinanceiroStore();

  const data = [
    { name: "Despesa", value: totalDespesas() },
    { name: "Total", value: salario - totalDespesas() },
  ];

  const COLORS = ["#FF5733", "#33FF57"];

  return (
    <div>
      <h2>Dashboard</h2>
      <PieChart width={300} height={300}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <p>Total de Despesas: R$ {totalDespesas()}</p>
    </div>
  );
};

export default Dashboard;
