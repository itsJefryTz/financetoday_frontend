import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const section = queryParams.get('section');
  const type = queryParams.get('type');

    return (
        <ul className="navbar-nav sidebar sidebar-dark accordion" style={{ backgroundColor: 'rgb(85,205,142)', backgroundImage: 'linear-gradient(180deg, rgba(85,205,142,1) 0%, rgba(27,170,147,1) 100%)'}} id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                {/* <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div> */}
                <div className="sidebar-brand-text mx-1">Finanzas al Día <sup>v1</sup></div>
            </Link>

            {/* Divider */}
            <hr className="sidebar-divider my-0" />

            {/* Nav Item - Dashboard */}
            <li className={`nav-item ${section === 'dashboard' ? 'active' : ''}`}>
                <Link className="nav-link" to="/page?section=dashboard&type=all">
                    <i class="bi bi-bar-chart-line-fill"></i>
                    <span>Resumen</span>
                </Link>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />

            {/* Heading */}
            <div className="sidebar-heading">Menú</div>

            {/* Nav Item - Income Collapse Menu */}
            <li className={`nav-item ${section === 'incomes' || type === 'incomes' ? 'active' : ''}`}>
              <span className="nav-link collapsed" data-toggle="collapse" data-target="#collapseIncomes" aria-expanded="true" aria-controls="collapseIncomes" style={{ cursor: 'pointer' }}>
                <i class="bi bi-chevron-double-up"></i>
                <span>Ingresos</span>
              </span>
                <div id="collapseIncomes" className="collapse" aria-labelledby="headingIncomes" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Opciones:</h6>
                        <Link className="collapse-item" to="/page?section=categories&type=incomes">Categorías</Link>
                        <Link className="collapse-item" to="/page?section=incomes&type=all">Ver todos</Link>
                    </div>
                </div>
            </li>

            {/* Nav Item - Expense Collapse Menu */}
            <li className={`nav-item ${section === 'expenses' || type === 'expenses' ? 'active' : ''}`}>
              <span className="nav-link collapsed" data-toggle="collapse" data-target="#collapseExpenses" aria-expanded="true" aria-controls="collapseExpenses" style={{ cursor: 'pointer' }}>
                <i class="bi bi-chevron-double-down"></i>
                <span>Gastos</span>
              </span>
                <div id="collapseExpenses" className="collapse" aria-labelledby="headingExpenses" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Opciones:</h6>
                        <Link className="collapse-item" to="/page?section=categories&type=expenses">Categorías</Link>
                        <Link className="collapse-item" to="/page?section=expenses&type=all">Ver todos</Link>
                    </div>
                </div>
            </li>

            {/* Nav Item - Reports Collapse Menu */}
            <li className={`nav-item ${section === 'reports' || type === 'reports' ? 'active' : ''}`}>
              <span className="nav-link collapsed" data-toggle="collapse" data-target="#collapseReports" aria-expanded="true" aria-controls="collapseReports" style={{ cursor: 'pointer' }}>
                <i class="bi bi-list-columns-reverse"></i>
                <span>Reportes</span>
              </span>
                <div id="collapseReports" className="collapse" aria-labelledby="headingReports" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Opciones:</h6>
                        <Link className="collapse-item" to="/page?section=reports&type=daily">Diarios</Link>
                        <Link className="collapse-item" to="/page?section=reports&type=weekly">Semanales</Link>
                        <Link className="collapse-item" to="/page?section=reports&type=monthly">Mensuales</Link>
                        <Link className="collapse-item" to="/page?section=reports&type=yearly">Anuales</Link>
                        <Link className="collapse-item" to="/page?section=reports&type=all">Ver todos</Link>
                    </div>
                </div>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/* Heading */}
            <div className="sidebar-heading">Otros</div>

            {/* Nav Item - API */}
            <li className={`nav-item ${section === 'api' ? 'active' : ''}`}>
                <Link className="nav-link" to="/page?section=dashboard&type=all">
                    <i class="bi bi-filetype-json"></i>
                    <span>API</span>
                </Link>
            </li>

            {/* Divider */}
            <hr className="sidebar-divider" />

            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            {/* Sidebar Message */}
            <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="/assets/img/undraw_rocket.svg" alt="..." />
                <p className="text-center mb-2"><strong>Finanzas al Día</strong> está actualmente en desarrollo continuo.</p>
                {/* <Link className="btn btn-success btn-sm" to="/">GitHub</Link> */}
            </div>
        </ul>
    );
};

export default Sidebar;