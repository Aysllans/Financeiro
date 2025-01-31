"use client";
import { useFinanceiroStore } from "@/store/financeiroStore";
import { useState } from "react";

const Contas = () => {
  const { contas, adicionarConta, removerConta } = useFinanceiroStore();
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState<"fixa" | "variavel">("fixa");

  const handleAdicionarConta = () => {
    if (!descricao || !valor) return;
    adicionarConta({ id: Date.now(), descricao, valor: parseFloat(valor), tipo });
    setDescricao("");
    setValor("");
  };

  return (
    <div>
      <h2>Contas</h2>
      <input placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      <input placeholder="Valor" type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
      <select value={tipo} onChange={(e) => setTipo(e.target.value as "fixa" | "variavel")}>
        <option value="fixa">Fixa</option>
        <option value="variavel">Variável</option>
      </select>
      <button onClick={handleAdicionarConta}>Adicionar</button>

      <ul>
        {contas.map((c) => (
          <li key={c.id}>
            {c.descricao} - R$ {c.valor} ({c.tipo})
            <button onClick={() => removerConta(c.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contas;
