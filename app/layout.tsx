// app/layout.tsx
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Adicione aqui metadados ou links */}
      </head>
      <body>
        <header>
          {/* Cabeçalho ou outros elementos comuns */}
          <h1>Financeiro</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          {/* Rodapé ou outros elementos comuns */}
        </footer>
      </body>
    </html>
  );
}



