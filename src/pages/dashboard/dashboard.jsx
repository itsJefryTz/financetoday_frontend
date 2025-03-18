import { useEffect, useState } from 'react';

import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net";

import MonthlyChart from '../../components/chartjs/MonthlyChart';
import { obtenerDatosDashboardUsuario } from '../../js/api';

const DashboardPage = () => {
    const [loading, setLoading] = useState(true);
    const tokenAcceso = localStorage.getItem('user_token_access');
    const tokenRefresh = localStorage.getItem('user_token_refresh');
    const [userDashboardData, setUserDashboardData] = useState([]);
    const [monthlyBalances, setMonthlyBalances] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const datosDashboard = await obtenerDatosDashboardUsuario(tokenAcceso, tokenRefresh);
            setUserDashboardData(datosDashboard);
            const { chart_and_tables } = datosDashboard;
            const balances = chart_and_tables.monthly_reports_table.monthly_reports.map((report) => report.balance);
            setMonthlyBalances(balances);

            if ($.fn.DataTable.isDataTable("#tableMonthlyBalance")) {
                $("#tableMonthlyBalance").DataTable().destroy();
            }
        
            $("#tableMonthlyBalance").DataTable({
                order: [[1, "asc"]],
                pageLength: 12,
                lengthMenu: [12, 15, 20, 50, 100],
                pagingType: "full_numbers",
                language: {
                    paginate: {
                        first: "<<",
                        last: ">>",
                        next: ">",
                        previous: "<",
                    },
                    search: "Buscar: ",
                    lengthMenu: "Mostrar _MENU_ registros por página.",
                    zeroRecords: "No se encontraron registros.",
                    info: "Mostrando página _PAGE_ de _PAGES_.",
                    infoEmpty: "No hay registros disponibles.",
                    infoFiltered: "(filtrado de _MAX_ registros totales).",
                },
            });
            
            if ($.fn.DataTable.isDataTable("#tableMainIncome")) {
                $("#tableMainIncome").DataTable().destroy();
            }
        
            $("#tableMainIncome").DataTable({
                order: [[3, "desc"]],
                pageLength: 7,
                lengthMenu: [7, 10, 15, 20, 50, 100],
                pagingType: "full_numbers",
                language: {
                    paginate: {
                        first: "<<",
                        last: ">>",
                        next: ">",
                        previous: "<",
                    },
                    search: "Buscar: ",
                    lengthMenu: "Mostrar  _MENU_",
                    zeroRecords: "No se encontraron registros.",
                    info: "Pág. _PAGE_ de _PAGES_.",
                    infoEmpty: "No hay registros disponibles.",
                    infoFiltered: "(filtrado de _MAX_ registros totales).",
                },
            });
            
            if ($.fn.DataTable.isDataTable("#tableMainExpenses")) {
                $("#tableMainExpenses").DataTable().destroy();
            }
        
            $("#tableMainExpenses").DataTable({
                order: [[3, "desc"]],
                pageLength: 7,
                lengthMenu: [7, 10, 15, 20, 50, 100],
                pagingType: "full_numbers",
                language: {
                    paginate: {
                        first: "<<",
                        last: ">>",
                        next: ">",
                        previous: "<",
                    },
                    search: "Buscar: ",
                    lengthMenu: "Mostrar  _MENU_",
                    zeroRecords: "No se encontraron registros.",
                    info: "Pág. _PAGE_ de _PAGES_.",
                    infoEmpty: "No hay registros disponibles.",
                    infoFiltered: "(filtrado de _MAX_ registros totales).",
                },
            });
            
            if ($.fn.DataTable.isDataTable("#tableAllIncome")) {
                $("#tableAllIncome").DataTable().destroy();
            }
        
            $("#tableAllIncome").DataTable({
                order: [[1, "desc"]],
                pageLength: 10,
                lengthMenu: [10, 15, 20, 50, 100],
                pagingType: "full_numbers",
                language: {
                    paginate: {
                        first: "<<",
                        last: ">>",
                        next: ">",
                        previous: "<",
                    },
                    search: "Buscar: ",
                    lengthMenu: "Mostrar _MENU_ registros por página.",
                    zeroRecords: "No se encontraron registros.",
                    info: "Mostrando página _PAGE_ de _PAGES_.",
                    infoEmpty: "No hay registros disponibles.",
                    infoFiltered: "(filtrado de _MAX_ registros totales).",
                },
            });

            setLoading(false);
        };
    
        fetchData();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <>
        <div className="d-sm-flex align-items-center justify-content-between mb-2">
            <div>
                <h1 className="h3 mb-0 text-gray-800">Resumen</h1>
                <p>Todo</p>
            </div>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm">
                <i className="fas fa-download fa-sm text-white-50"></i> Generar Reporte
            </a>
        </div>

        <div className="row">
            {/*  Example */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-uppercase mb-1" style={{
                                    background: 'linear-gradient(90deg, rgba(101,216,157,1) 0%, rgba(101,216,157,1) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Total Ingresos (este mes)
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {userDashboardData && 
                                    userDashboardData.card_data && 
                                    userDashboardData.card_data.total_income_this_month !== undefined ? 
                                    userDashboardData.card_data.total_income_this_month : 
                                    'No disponible'}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="bi bi-chevron-double-up text-gray-300 fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Example */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-uppercase mb-1" style={{
                                    background: 'linear-gradient(90deg, rgba(101,216,157,1) 0%, rgba(35,174,149,1) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Total Gastos (este mes)
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {userDashboardData && 
                                    userDashboardData.card_data && 
                                    userDashboardData.card_data.total_expenses_this_month !== undefined ? 
                                    userDashboardData.card_data.total_expenses_this_month : 
                                    'No disponible'}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="bi bi-chevron-double-down text-gray-300 fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Example */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-uppercase mb-1" style={{
                                    background: 'linear-gradient(90deg, rgba(35,174,149,1) 0%, rgba(23,153,132,1) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Balance Total (este mes)
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {userDashboardData && 
                                    userDashboardData.card_data && 
                                    userDashboardData.card_data.total_balance_this_month !== undefined ? 
                                    userDashboardData.card_data.total_balance_this_month : 
                                    'No disponible'}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="bi bi-list text-gray-300 fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Example */}
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-uppercase mb-1" style={{
                                    background: 'linear-gradient(90deg, rgba(23,153,132,1) 0%, rgba(14,117,101,1) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    Movimientos (este mes)
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                    {userDashboardData && 
                                    userDashboardData.card_data && 
                                    userDashboardData.card_data.total_movements_this_month !== undefined ? 
                                    userDashboardData.card_data.total_movements_this_month : 
                                    'No disponible'}
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="bi bi-chevron-contract fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">

            <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                    {/* Card Header - Dropdown */}
                    <div className="card-header bg-white py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold" style={{
                            background: 'linear-gradient(90deg, rgba(101,216,157,1) 0%, rgba(35,174,149,1) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}><i class="bi bi-bar-chart-line-fill"></i> Total Balance por Mes</h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Opciones:</div>
                                <a className="dropdown-item" href="#">Actualizar gráfico</a>
                                {/* <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a> */}
                            </div>
                        </div>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                        <MonthlyChart values={monthlyBalances} />
                        <hr />
                        <div className="table-responsive">
                            <table className="table table-striped table-hover table-bordered" id="tableMonthlyBalance" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Fecha</th>
                                        <th>Total Ingresos</th>
                                        <th>Total Gastos</th>
                                        <th>Total Balance</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Total</th>
                                        <th></th>
                                        <th>
                                            {userDashboardData && 
                                            userDashboardData.chart_and_tables && 
                                            userDashboardData.chart_and_tables.monthly_reports_table.total_income_year &&
                                            userDashboardData.chart_and_tables.monthly_reports_table.total_income_year !== undefined ? 
                                            userDashboardData.chart_and_tables.monthly_reports_table.total_income_year : 
                                            'No disponible'}
                                        </th>
                                        <th>
                                            {userDashboardData && 
                                            userDashboardData.chart_and_tables && 
                                            userDashboardData.chart_and_tables.monthly_reports_table.total_expenses_year &&
                                            userDashboardData.chart_and_tables.monthly_reports_table.total_expenses_year !== undefined ? 
                                            userDashboardData.chart_and_tables.monthly_reports_table.total_expenses_year : 
                                            'No disponible'}
                                        </th>
                                        <th>
                                            {userDashboardData && 
                                            userDashboardData.chart_and_tables && 
                                            userDashboardData.chart_and_tables.monthly_reports_table.total_balance_year &&
                                            userDashboardData.chart_and_tables.monthly_reports_table.total_balance_year !== undefined ? 
                                            userDashboardData.chart_and_tables.monthly_reports_table.total_balance_year : 
                                            'No disponible'}
                                        </th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {userDashboardData && 
                                    userDashboardData.chart_and_tables && 
                                    userDashboardData.chart_and_tables.monthly_reports_table && 
                                    userDashboardData.chart_and_tables.monthly_reports_table.monthly_reports ? (
                                        userDashboardData.chart_and_tables.monthly_reports_table.monthly_reports.map((report) => (
                                            <tr key={report.id}>
                                                <td>{report.id}</td>
                                                <td className='text-start'><b>{report.start_date}</b></td>
                                                <td><i className="bi bi-chevron-double-up text-success"></i> {report.income}</td>
                                                <td><i className="bi bi-chevron-double-down text-danger"></i> {report.expense}</td>
                                                <td><b><i className='bi bi-list'></i> {report.balance}</b></td>
                                            </tr>
                                        ))
                                    ) : (
                                        null
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col'>
                <div className='row'>
                    <div className="col">
                        <div className="card shadow mb-4">
                            {/* Card Header - Dropdown */}
                            <div className="card-header bg-white py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold" style={{
                                    background: 'linear-gradient(90deg, rgba(23,153,132,1) 0%, rgba(14,117,101,1) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}><i class="bi bi-chevron-double-up"></i> Total Ingresos este Mes</h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* Card Body */}
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover table-bordered" id="tableMainIncome" width="100%" cellSpacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Fecha</th>
                                                <th>Categoría</th>
                                                <th>Monto</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userDashboardData && 
                                            userDashboardData.chart_and_tables && 
                                            userDashboardData.chart_and_tables.income_this_month && 
                                            userDashboardData.chart_and_tables.income_this_month ? (
                                                userDashboardData.chart_and_tables.income_this_month.map((income) => (
                                                    <tr key={income.id}>
                                                        <td>{income.id}</td>
                                                        <td className='text-start'><b>{income.date}</b></td>
                                                        <td className='text-start'> {income.category.name}</td>
                                                        <td><b><i className="bi bi-chevron-double-up text-success"></i> {income.amount}</b></td>
                                                    </tr>
                                                ))
                                            ) : (
                                                null
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                {/* <div className="mt-4 text-center small">
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-primary"></i> Direct
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-success"></i> Social
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-info"></i> Referral
                                    </span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col">
                        <div className="card shadow mb-4">
                            {/* Card Header - Dropdown */}
                            <div className="card-header bg-white py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold" style={{
                                    background: 'linear-gradient(90deg, rgba(23,153,132,1) 0%, rgba(14,117,101,1) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}>
                                    <i className="bi bi-chevron-double-down"></i> Total Gastos este Mes
                                </h6>
                                <div className="dropdown no-arrow">
                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                        <div className="dropdown-header">Dropdown Header:</div>
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* Card Body */}
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover table-bordered" id="tableMainExpenses" width="100%" cellSpacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Fecha</th>
                                                <th>Categoría</th>
                                                <th>Monto</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userDashboardData && 
                                            userDashboardData.chart_and_tables && 
                                            userDashboardData.chart_and_tables.expenses_this_month && 
                                            userDashboardData.chart_and_tables.expenses_this_month ? (
                                                userDashboardData.chart_and_tables.expenses_this_month.map((expense) => (
                                                    <tr key={expense.id}>
                                                        <td>{expense.id}</td>
                                                        <td className='text-start'><b>{expense.date}</b></td>
                                                        <td className='text-start'> {expense.category.name}</td>
                                                        <td><b><i className="bi bi-chevron-double-down text-danger"></i> {expense.amount}</b></td>
                                                    </tr>
                                                ))
                                            ) : (
                                                null
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                {/* <div className="mt-4 text-center small">
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-primary"></i> Direct
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-success"></i> Social
                                    </span>
                                    <span className="mr-2">
                                        <i className="fas fa-circle text-info"></i> Referral
                                    </span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default DashboardPage;