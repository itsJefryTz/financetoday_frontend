import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { API_BASE_URL } from '../../js/api';
import { FunctionDisabledToast } from '../../js/utils';

const LoginForm = () => {
    const navigate = useNavigate();
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Muestra un toast de carga.
        const loadingToast = toast.loading('Iniciando sesión...');

        try {
            const response = await axios.post(`${API_BASE_URL}users/api/token/`, {
                username,
                password,
            });
            localStorage.setItem('user_token_access', response.data.access);
            localStorage.setItem('user_token_refresh', response.data.refresh);

            const userResponse = await axios.get(`${API_BASE_URL}users/api/user_info/`, {
                headers: {
                    Authorization: `Bearer ${response.data.access}`,
                },
            });

            // Guardar datos del usuario en localStorage.
            localStorage.setItem('user_data', JSON.stringify(userResponse.data));
            console.log(userResponse.data)
            
            // Muestra un toast de éxito.
            toast.success('Inicio de sesión exitoso', {
                id: loadingToast, // Reemplaza el toast de carga.
            });

            navigate('/dashboard');
        } catch (error) {
            // Manejo de errores.
            if (error.response) {
                if (error.response.status === 401) {
                    toast.error('Credenciales inválidas. Por favor, verifica tu usuario y contraseña.', {
                        id: loadingToast, // Reemplaza el toast de carga.
                    });
                } else {
                    toast.error('Error al iniciar sesión: ' + error.response.data, {
                        id: loadingToast, // Reemplaza el toast de carga.
                    });
                }
            } else if (error.request) {
                toast.error('No se recibió respuesta del servidor.', {
                    id: loadingToast, // Reemplaza el toast de carga.
                });
            } else {
                toast.error('Error al configurar la solicitud: ' + error.message, {
                    id: loadingToast, // Reemplaza el toast de carga.
                });
            }
        }
    };

    return (
        <>
            {/* <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Usuario"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                />
                <button type="submit">Iniciar sesión</button>
            </form> */}
            <div className="container">
                {/* Outer Row */}
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* Nested Row within Card Body */}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-success"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Iniciar sesión</h1>
                                            </div>
                                            <form className="user" onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        className="form-control form-control-user"
                                                        aria-describedby="usernameHelp"
                                                        placeholder="Escribe tu nombre de usuario..."
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        className="form-control form-control-user"
                                                        placeholder="Escribe tu contraseña..."
                                                    />
                                                </div>
                                                <div className="form-group" onClick={FunctionDisabledToast}>
                                                    <div className="custom-control custom-checkbox small">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheck"
                                                            disabled
                                                        />
                                                        <label className="custom-control-label" htmlFor="customCheck">
                                                            Recordarme
                                                        </label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-success btn-user btn-block">
                                                    Iniciar sesión
                                                </button>
                                                <hr />
                                                <a href="#" onClick={FunctionDisabledToast} className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Entrar con Google
                                                </a>
                                                <a href="#" onClick={FunctionDisabledToast} className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Entrar con Facebook
                                                </a>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="#" onClick={FunctionDisabledToast}>¿Has olvidado tu contraseña?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="#" onClick={FunctionDisabledToast}>Crear una cuenta</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;