import { useEffect, useState } from 'react';

import $ from "jquery";
import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net";

import { GetUserIncomeList } from '../../js/api';
import { FunctionDisabledToast } from '../../js/utils';

const Modal_EditIncome = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
        <div className="modal fade show" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ borderRadius: '10px' }}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                        <button className="close" type="button" onClick={onClose} aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Select "Logout" below if you are ready to end your current session.
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" onClick={onClose}>Cancel</button>
                        <a className="btn btn-primary" href="login.html">Logout</a>
                    </div>
                </div>
            </div>
        </div>  
    );
};

const IncomePage = () => {
    const [loading, setLoading] = useState(true);
    const tokenAcceso = localStorage.getItem('user_token_access');
    const tokenRefresh = localStorage.getItem('user_token_refresh');
    const [userIncomeList, setUserIncomeList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal_EditIncome = () => {
        setIsModalOpen(true);
    };

    const closeModal_EditIncome = () => {
        setIsModalOpen(false);
    };

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
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm" onClick={FunctionDisabledToast}>
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
                                    <th style={{minWidth: 250}}>Nombre</th>
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
                                        <td className='text-start'> {income.name}</td>
                                        <td><b><i className="bi bi-chevron-double-up text-success"></i> {income.amount}</b></td>
                                        <td>{income.description}</td>
                                        <td>
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" class="btn btn-success" onClick={FunctionDisabledToast}><i class="bi bi-eye-fill"></i></button>
                                                <button type="button" class="btn btn-warning" onClick={openModal_EditIncome}><i class="bi bi-pencil-fill"></i></button>
                                                <Modal_EditIncome isOpen={isModalOpen} onClose={closeModal_EditIncome} />
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