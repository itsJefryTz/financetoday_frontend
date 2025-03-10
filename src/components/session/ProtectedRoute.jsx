import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('user_token_access');

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;