import axios from 'axios';

export const API_BASE_URL = 'https://thefinanzasaldia.pythonanywhere.com/';

export const obtenerDatosDashboardUsuario = async (tokenAcceso, tokenRefresh) => {
    try {
        const respuesta = await axios.get(`${API_BASE_URL}api/v1/user_dashboard_data/`, {
            headers: {
                Authorization: `Bearer ${tokenAcceso}`,
            },
        });

        return respuesta.data;
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) {
                // Manejo del error 401: intentar refrescar el token
                console.log('Manejo del error 401: Token expirado, intentando refrescar el token...')
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

                return nuevaRespuesta.data;
            }
        }
    }
};

export const GetUserIncomeList = async (tokenAcceso, tokenRefresh) => {
    try {
        const respuesta = await axios.get(`${API_BASE_URL}api/v1/user_income_list/`, {
            headers: {
                Authorization: `Bearer ${tokenAcceso}`,
            },
        });

        return respuesta.data;
    } catch (error) {
        if (error.response) {
            if (error.response.status === 401) {
                // Manejo del error 401: intentar refrescar el token
                console.log('Manejo del error 401: Token expirado, intentando refrescar el token...')
                const respuestaRefresh = await axios.post(`${API_BASE_URL}users/api/token/refresh/`, {
                    refresh: tokenRefresh,
                });

                // Actualiza el token de acceso.
                const nuevoTokenAcceso = respuestaRefresh.data.access;
                localStorage.setItem('user_token_access', nuevoTokenAcceso);
                console.log('Nuevo token de acceso actualizado.')

                // Vuelve a intentar la solicitud original con el nuevo token.
                const nuevaRespuesta = await axios.get(`${API_BASE_URL}api/v1/user_income_list/`, {
                    headers: {
                        Authorization: `Bearer ${nuevoTokenAcceso}`,
                    },
                });

                return nuevaRespuesta.data;
            }
        }
    }
};
