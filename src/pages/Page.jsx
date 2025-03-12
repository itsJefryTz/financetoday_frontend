import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net";

import MonthlyChart from '../components/chartjs/MonthlyChart';

const Page = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get('section');
    const type = queryParams.get('type');

    const monthlyBalances = [1200, 1900, -3000, 500, 2000, 2500, 3000, 4000, 3500, 4500, 5000, 6000];

    useEffect(() => {
          // Destruir la instancia existente de DataTable si ya está inicializada.
          if ($.fn.DataTable.isDataTable("#tableMonthlyBalance")) {
            $("#tableMonthlyBalance").DataTable().destroy();
          }
    
          // Inicializar DataTables con configuración de ordenamiento y paginación.
          $("#tableMonthlyBalance").DataTable({
            order: [[6, "desc"]], // Ordena por la columna "Fecha de vencimiento".
            pageLength: 10, // Número de filas por página.
            lengthMenu: [5, 10, 15, 20, 50, 100], // Opciones de filas por página.
            pagingType: "full_numbers", // Tipo de controles de paginación.
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

          // Destruir la instancia existente de DataTable si ya está inicializada.
          if ($.fn.DataTable.isDataTable("#tableMainIncome")) {
            $("#tableMainIncome").DataTable().destroy();
          }
    
          // Inicializar DataTables con configuración de ordenamiento y paginación.
          $("#tableMainIncome").DataTable({
            order: [[6, "desc"]], // Ordena por la columna "Fecha de vencimiento".
            pageLength: 7, // Número de filas por página.
            lengthMenu: [7, 10, 15, 20, 50, 100], // Opciones de filas por página.
            pagingType: "full_numbers", // Tipo de controles de paginación.
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
              info: "_PAGE_ de _PAGES_.",
              infoEmpty: "No hay registros disponibles.",
              infoFiltered: "(filtrado de _MAX_ registros totales).",
            },
          });

          // Destruir la instancia existente de DataTable si ya está inicializada.
          if ($.fn.DataTable.isDataTable("#tableMainExpenses")) {
            $("#tableMainExpenses").DataTable().destroy();
          }
    
          // Inicializar DataTables con configuración de ordenamiento y paginación.
          $("#tableMainExpenses").DataTable({
            order: [[6, "desc"]], // Ordena por la columna "Fecha de vencimiento".
            pageLength: 7, // Número de filas por página.
            lengthMenu: [7, 10, 15, 20, 50, 100], // Opciones de filas por página.
            pagingType: "full_numbers", // Tipo de controles de paginación.
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
              info: "_PAGE_ de _PAGES_.",
              infoEmpty: "No hay registros disponibles.",
              infoFiltered: "(filtrado de _MAX_ registros totales).",
            },
          });
      }, []);

    let content;
    if (section === 'dashboard') {
        content = (
            <>
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
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
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
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
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
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
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
                                            % Margen (este mes)
                                        </div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="bi bi-percent fa-2x text-gray-300"></i>
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
                                    <table className="table table-bordered" id="tableMonthlyBalance" width="100%" cellSpacing="0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Fecha</th>
                                                <th>Total Ingresos</th>
                                                <th>Total Gastos</th>
                                                <th>Total Balance</th>
                                                <th>% Margen</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Total</th>
                                                <th></th>
                                                <th>2000</th>
                                                <th>1200</th>
                                                <th>800</th>
                                                <th>40 %</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            <tr>
                                                <td>01</td>
                                                <td>11/03/2025</td>
                                                <td>1000</td>
                                                <td>600</td>
                                                <td>400</td>
                                                <td>40 %</td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td>11/03/2025</td>
                                                <td>1000</td>
                                                <td>600</td>
                                                <td>400</td>
                                                <td>40 %</td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td>11/03/2025</td>
                                                <td>1000</td>
                                                <td>600</td>
                                                <td>400</td>
                                                <td>40 %</td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td>11/03/2025</td>
                                                <td>1000</td>
                                                <td>600</td>
                                                <td>400</td>
                                                <td>40 %</td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td>11/03/2025</td>
                                                <td>1000</td>
                                                <td>600</td>
                                                <td>400</td>
                                                <td>40 %</td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td>11/03/2025</td>
                                                <td>1000</td>
                                                <td>600</td>
                                                <td>400</td>
                                                <td>40 %</td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td>11/03/2025</td>
                                                <td>1000</td>
                                                <td>600</td>
                                                <td>400</td>
                                                <td>40 %</td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td>11/03/2025</td>
                                                <td>1000</td>
                                                <td>600</td>
                                                <td>400</td>
                                                <td>40 %</td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td>11/03/2025</td>
                                                <td>1000</td>
                                                <td>600</td>
                                                <td>400</td>
                                                <td>40 %</td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td>11/03/2025</td>
                                                <td>1000</td>
                                                <td>600</td>
                                                <td>400</td>
                                                <td>40 %</td>
                                            </tr>
                                            <tr>
                                                <td>01</td>
                                                <td>11/03/2025</td>
                                                <td>1000</td>
                                                <td>600</td>
                                                <td>400</td>
                                                <td>77 %</td>
                                            </tr>
                                            {/* Puedes agregar más filas aquí */}
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
                                        }}><i class="bi bi-chevron-double-up"></i> Ingresos Principales</h6>
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
                                            <table className="table table-bordered" id="tableMainIncome" width="100%" cellSpacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Fecha</th>
                                                        <th>Categoría</th>
                                                        <th>Monto</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
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
                                        }}><i class="bi bi-chevron-double-down"></i> Gastos Principales</h6>
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
                                            <table className="table table-bordered" id="tableMainExpenses" width="100%" cellSpacing="0">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Fecha</th>
                                                        <th>Categoría</th>
                                                        <th>Monto</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>01</td>
                                                        <td>11/03/2025</td>
                                                        <td>1000</td>
                                                        <td>600</td>
                                                    </tr>
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
    }

    return (
        <>
        <div className="d-sm-flex align-items-center justify-content-between mb-2">
            <div>
            <h1 className="h3 mb-0 text-gray-800">{section === 'categories' ? 'Categorías' : section === 'incomes' ? 'Ingresos' : section === 'expenses' ? 'Gastos' : section === 'reports' ? 'Reportes' : 'Dashboard'}</h1>
            {type && <p>{
                section === 'categories' & type === 'incomes' ? 'Ingresos' : section === 'incomes' & type === 'all' ? 'Todos' :
                section === 'categories' & type === 'expenses' ? 'Gastos' : section === 'expenses' & type === 'all' ? 'Todos' :
                section === 'reports' & type === 'daily' ? 'Diarios' : section === 'reports' & type === 'weekly' ? 'Semanales' :
                section === 'reports' & type === 'monthly' ? 'Mensuales' : section === 'reports' & type === 'yearly' ? 'Anuales' : 'Todos'}</p>}
            </div>
            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm">
                <i className="fas fa-download fa-sm text-white-50"></i> Generar Reporte
            </a>
        </div>

        {content}
        </>
    );
};

export default Page;