import axios from 'axios';
import toast from 'react-hot-toast';

export const API_BASE_URL = 'http://127.0.0.1:8000/';

export const obtenerDatosDashboardUsuario = async (tokenAcceso, tokenRefresh) => {
    try {
        // Muestra un toast de carga.
        //const loadingToast = toast.loading('Cargando información...');

        const respuesta = await axios.get(`${API_BASE_URL}api/v1/user_dashboard_data/`, {
            headers: {
                Authorization: `Bearer ${tokenAcceso}`,
            },
        });

        // Desvanece el toast de carga.
        //toast.dismiss(loadingToast);

        // devuelve los datos.
        //console.log(respuesta.data)
        return respuesta.data;
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) {
                // Manejo del error 401: intentar refrescar el token
                console.log('Manejo del error 401: Token expirado, intentando refrescar el token...')
                try {
                    const respuestaRefresh = await axios.post(`${API_BASE_URL}users/api/token/refresh/`, {
                        refresh: tokenRefresh,
                    });

                    // Actualiza el token de acceso.
                    const nuevoTokenAcceso = respuestaRefresh.data.access;
                    localStorage.setItem('user_token_access', nuevoTokenAcceso);
                    console.log('Nuevo token de acceso actualizado.')

                    // Vuelve a intentar la solicitud original con el nuevo token.
                    const nuevaRespuesta = await axios.get(`${API_BASE_URL}api/v1/user_dashboard_data/`, {
                        headers: {
                            Authorization: `Bearer ${nuevoTokenAcceso}`,
                        },
                    });

                    // Desvanece el toast de carga.
                    //toast.dismiss(loadingToast);
                    
                    // devuelve los nuevos datos.
                    //.log(nuevaRespuesta.data)
                    return nuevaRespuesta.data;
                } catch (refreshError) {
                    /*toast.error('Error al refrescar el token. Por favor, vuelve a iniciar sesión.', {
                        id: loadingToast, // Reemplaza el toast de carga.
                    });*/
                }
            } else {
                /*toast.error('Error: ' + error.response.data, {
                    id: loadingToast, // Reemplaza el toast de carga.
                });*/
            }
        } else if (error.request) {
            /*toast.error('No se recibió respuesta del servidor.', {
                id: loadingToast, // Reemplaza el toast de carga.
            });*/
        } else {
            /*toast.error('Error al configurar la solicitud: ' + error.message, {
                id: loadingToast, // Reemplaza el toast de carga.
            });*/
        }
    }
};