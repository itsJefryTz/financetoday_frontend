import { useLocation } from 'react-router-dom';

const Page = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get('section');
    const type = queryParams.get('type');

    let content;
    if (section === 'dashboard') {
        content = (
            <div>
                {/* Aquí va el código HTML que deseas renderizar */}
                <h1>Dashboard</h1>
                <p>Bienvenido al panel de control.</p>
            </div>
        );
    }

    return (
        <>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <div>
            <h1 className="h3 mb-0 text-gray-800">{section === 'categories' ? 'Categorías' : section === 'incomes' ? 'Ingresos' : section === 'expenses' ? 'Gastos' : section === 'reports' ? 'Reportes' : 'Dashboard'}</h1>
            {type && <p>{
                section === 'categories' & type === 'incomes' ? 'Ingresos' : section === 'incomes' & type === 'all' ? 'Todos' :
                section === 'categories' & type === 'expenses' ? 'Gastos' : section === 'expenses' & type === 'all' ? 'Todos' :
                section === 'reports' & type === 'daily' ? 'Diarios' : section === 'reports' & type === 'weekly' ? 'Semanales' :
                section === 'reports' & type === 'monthly' ? 'Mensuales' : section === 'reports' & type === 'yearly' ? 'Anuales' : 'Todos'}</p>}
            </div>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <i className="fas fa-download fa-sm text-white-50"></i> Generar Reporte
            </a>
        </div>

        {content}
        </>
    );
};

export default Page;