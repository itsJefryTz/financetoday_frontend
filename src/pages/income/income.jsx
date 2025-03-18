import { useEffect, useState } from 'react';

import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net";

import { GetUserIncomeList } from '../../js/api';

const IncomePage = () => {
    const [loading, setLoading] = useState(true);
    const tokenAcceso = localStorage.getItem('user_token_access');
    const tokenRefresh = localStorage.getItem('user_token_refresh');
    const [userIncomeList, setUserIncomeList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const userIncomeList = await GetUserIncomeList(tokenAcceso, tokenRefresh);
            setUserIncomeList(userIncomeList);

            if ($.fn.DataTable.isDataTable("#table_userIncomeList")) {
                $("#table_userIncomeList").DataTable().destroy();
            }
        
            $("#table_userIncomeList").DataTable({
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
                <h1 className="h3 mb-0 text-gray-800">Ingresos</h1>
                <p>Todos</p>
                </div>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm">
                    <i className="fas fa-download fa-sm text-white-50"></i> Generar Reporte
                </a>
            </div>

            <div className="card shadow mb-4">
                <div className="card-header bg-white py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold" style={{
                        background: 'linear-gradient(90deg, rgba(101,216,157,1) 0%, rgba(35,174,149,1) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}><i className="bi bi-chevron-double-up text-success"></i> Todos los Ingresos</h6>
                    <div className="">
                        <a href="#" className="btn btn-success shadow">
                            <i class="bi bi-plus-lg"></i>
                        </a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered" id="table_userIncomeList" width="100%" cellSpacing="0">
                            <thead className="">
                                <tr>
                                    <th>ID</th>
                                    <th style={{minWidth: 130}}>Fecha</th>
                                    <th style={{minWidth: 250}}>Categoría</th>
                                    <th>Monto</th>
                                    <th style={{minWidth: 350}}>Descripción</th>
                                    <th style={{minWidth: 150}}>Acciones</th>
                                </tr>
                            </thead>
                            {/* <tfoot>
                                <tr>
                                    <th></th>
                                </tr>
                            </tfoot> */}
                            <tbody>
                                {userIncomeList.map((income) => (
                                    <tr key={income.id}>
                                        <td>{income.id}</td>
                                        <td className='text-start'><b>{income.date}</b></td>
                                        <td className='text-start'> {income.category.name}</td>
                                        <td><b><i className="bi bi-chevron-double-up text-success"></i> {income.amount}</b></td>
                                        <td>{income.description}</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" class="btn btn-success"><i class="bi bi-eye-fill"></i></button>
                                                <button type="button" class="btn btn-warning"><i class="bi bi-pencil-fill"></i></button>
                                                <button type="button" class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IncomePage;