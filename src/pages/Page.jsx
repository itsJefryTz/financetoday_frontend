import { useLocation } from 'react-router-dom';

const Page = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get('section');
    const type = queryParams.get('type');

    return (
        <>
            <h1>Página de {section === 'categories' ? 'Categorías' : section === 'incomes' ? 'Ingresos' : section === 'expenses' ? 'Gastos' : section === 'reports' ? 'Reportes' : 'Dashboard'}</h1>
            {type && <p>Lista seleccionada: {
                section === 'categories' & type === 'incomes' ? 'Ingresos' : section === 'incomes' & type === 'all' ? 'Todos' :
                section === 'categories' & type === 'expenses' ? 'Gastos' : section === 'expenses' & type === 'all' ? 'Todos' :
                section === 'reports' & type === 'daily' ? 'Diarios' : section === 'reports' & type === 'weekly' ? 'Semanales' :
                section === 'reports' & type === 'monthly' ? 'Mensuales' : section === 'reports' & type === 'yearly' ? 'Anuales' : 'Todos'}</p>}
        </>
    );
};

export default Page;