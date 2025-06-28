import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/components/HomeLayout';
import WebPortal from './pages/home/components/WebPortal';
import Login from './pages/login/components/Login';
import Register from './pages/register/components';
import OrganizationProfile from './pages/register/components/OrganizationProfile';
import Dashboard from './pages/dashboard/components';
import ProtectedRoute from './layout/components/ProtectedRoute';
import Navigator from 'pages/common/components/Navigator';

function App() {
  return (
    <Router>
      <Routes>
        {/* 🌐 Public layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<WebPortal />} />
          <Route path="ui/join-meds/login" element={<Login />} />
          <Route path="ui/join-meds/register" element={<Register />} />
        </Route>

        {/* 🔒 Protected route wrapper decides layout */}
        <Route element={<ProtectedRoute />}>
          <Route path="/ui/join-meds/user/dashboard" element={<Dashboard />} />
          <Route path="/ui/join-meds/register/profile" element={<OrganizationProfile />} />
          <Route path="/profile" element={<OrganizationProfile />} />
        </Route>
      </Routes>
      <Navigator />
    </Router>
  );
}

export default App;
