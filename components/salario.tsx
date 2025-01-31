"use client";
import { useFinanceiroStore } from "../store/financerioStore";
import { useState } from "react";

const Salario = () => {
  const { salario, setSalario, totalDespesas } = useFinanceiroStore();
  const [valor, setValor] = useState("");

  return (
    <div>
      <h2>Salário</h2>
      <input
        placeholder="Definir Salário"
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button onClick={() => setSalario(parseFloat(valor))}>Atualizar</button>
      <p>Salário Atual: R$ {salario}</p>
      <p>Saldo Disponível: R$ {salario - totalDespesas()}</p>
    </div>
  );
};

export default Salario;
