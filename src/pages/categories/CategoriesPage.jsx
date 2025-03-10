import { useLocation } from 'react-router-dom';

const CategoriesPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');

    return (
        <>
            <h1>Página de Categorías</h1>
            {type && <p>Lista seleccionada: {type === 'incomes' ? 'Ingresos' : 'Gastos'}</p>}
        </>
    );
};

export default CategoriesPage;