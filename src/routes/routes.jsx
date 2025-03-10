import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../layouts/layout';
import Login from '../components/session/login';
import ProtectedRoute from '../components/session/ProtectedRoute';
import DashboardPage from '../pages/dashboard/DashboardPage';
import Page from '../pages/Page';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><DashboardPage /></Layout>} />
                <Route path='/login' element={<Login />} />
                <Route path="/page" element={<ProtectedRoute><Layout><Page /></Layout></ProtectedRoute>} />
                {/* <Route path="/profile/:id" element={<Profile />} />
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;