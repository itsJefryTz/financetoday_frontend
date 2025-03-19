import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from '../layouts/layout';
import LoginPage from '../pages/session/LoginPage';
import RegisterPage from '../pages/session/RegisterPage';
import ProtectedRoute from '../components/session/ProtectedRoute';
import DashboardPage from '../pages/dashboard/dashboard';
// import IncomePage from '../pages/income/income'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path="/" element={<Navigate to="/dashboard" />} />     
                <Route path="/dashboard" element={<ProtectedRoute><Layout><DashboardPage /></Layout></ProtectedRoute>} />
                {/* <Route path="/income" element={<ProtectedRoute><Layout><IncomePage /></Layout></ProtectedRoute>} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;
