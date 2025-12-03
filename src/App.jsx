import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/components/HomeLayout';
// import WebPortal from './pages/home/components/WebPortal';
import OrganisationAuthLanding from './pages/login/components/OrganisationAuthLanding';

import WebPortal from './pages/home/components/WebPortal';

import Login from './pages/login/components/Login';
import Register from './pages/register/components';
import ForgotPassword from './pages/login/components/ForgotPassword';

import OrganizationProfile from './pages/register/components/OrganizationProfile';
import ProfileCard from './pages/register/components/ProfileCard';
import Dashboard from './pages/dashboard/components';
import ProtectedRoute from './layout/components/ProtectedRoute';
import Navigator from 'pages/common/components/Navigator';
import Reports from './pages/register/components/Reports';

function App() {
  return (
    <Router>
      <Routes>
        {/* 🌐 Public layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<WebPortal />} />
          <Route path="ui/join-meds/login" element={<Login />} />
          <Route path="ui/join-meds/forgot-password" element={<ForgotPassword />} />
          <Route path="ui/join-meds/register" element={<Register />} />
        </Route>

        {/* 🔒 Protected route wrapper decides layout */}
        <Route element={<ProtectedRoute />}>
          <Route path="/ui/join-meds/user/dashboard" element={<Dashboard />} />
          <Route path="/ui/join-meds/register/profile" element={<OrganizationProfile />} />
          <Route path="/profile" element={<OrganizationProfile />} />
          <Route path="/ui/join-meds/user/profile" element={<ProfileCard />} />
          <Route path="/ui/join-meds/user/reports" element={<Reports />} />

        </Route>
      </Routes>
      <Navigator />
    </Router>
  );
}

export default App;
