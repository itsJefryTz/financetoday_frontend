import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../layouts/layout';
import DashboardPage from '../pages/dashboard/DashboardPage';
import Page from '../pages/Page';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><DashboardPage /></Layout>} />
                <Route path="/dashboard" element={<Layout><DashboardPage /></Layout>} />
                <Route path="/page" element={<Layout><Page /></Layout>} />
                {/* <Route path="/profile/:id" element={<Profile />} />
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
};

export default AppRoutes;