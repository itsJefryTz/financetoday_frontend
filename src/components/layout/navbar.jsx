import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Finanzas al Día</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/page?section=dashboard&type=all">Dashboard</Link></li>
        Ingresos
        <ul>
          <li><Link to="/page?section=categories&type=incomes">Categorías</Link></li>
          <li><Link to="/page?section=incomes&type=all">Ver todos</Link></li>
        </ul>
        Gastos
        <ul>
          <li><Link to="/page?section=categories&type=expenses">Categorías</Link></li>
          <li><Link to="/page?section=expenses&type=all">Ver todos</Link></li>
        </ul>
        Reportes
        <ul>
          <li><Link to="/page?section=reports&type=daily">Diarios</Link></li>
          <li><Link to="/page?section=reports&type=weekly">Semanales</Link></li>
          <li><Link to="/page?section=reports&type=monthly">Mensuales</Link></li>
          <li><Link to="/page?section=reports&type=yearly">Anuales</Link></li>
          <li><Link to="/page?section=reports&type=all">Ver todos</Link></li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;