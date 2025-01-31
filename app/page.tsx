// app/page.tsx
import Contas from '../components/contas';
import Salario from '../components/salario';
import Dashboard from '../components/dashboard';

const Page = () => {
  return (
    <div>
      <Salario />
      <Contas />
      <Dashboard />
    </div>
  );
};

export default Page;
