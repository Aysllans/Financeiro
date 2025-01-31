import { create } from "zustand";

type Conta = {
  id: number;
  descricao: string;
  valor: number;
  tipo: "fixa" | "variavel";
};

type FinanceiroStore = {
  salario: number;
  contas: Conta[];
  setSalario: (valor: number) => void;
  adicionarConta: (conta: Conta) => void;
  removerConta: (id: number) => void;
  totalDespesas: () => number;
};

export const useFinanceiroStore = create<FinanceiroStore>((set, get) => ({
  salario: 0,
  contas: [],
  setSalario: (valor) => set({ salario: valor }),
  adicionarConta: (conta) => set((state) => ({ contas: [...state.contas, conta] })),
  removerConta: (id) => set((state) => ({ contas: state.contas.filter(c => c.id !== id) })),
  totalDespesas: () => get().contas.reduce((acc, conta) => acc + conta.valor, 0),
}));
