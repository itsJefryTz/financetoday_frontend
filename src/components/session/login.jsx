import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { API_BASE_URL } from '../../js/api';

const Login = () => {
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

            navigate('/page?section=dashboard&type=all');
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
            <h1>Login</h1>
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
            </form>
        </>
    );
};

export default Login;