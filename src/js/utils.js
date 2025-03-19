import toast from 'react-hot-toast';

export const FunctionDisabledToast = () => toast.error('¡Función deshabilitada!');

export const LogOut = () => {
    localStorage.removeItem('user_token_access');
    localStorage.removeItem('user_token_refresh');
    localStorage.removeItem('user_data');
    window.location.reload();
}