import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/components/HomeLayout';
import WebPortal from './pages/home/components/WebPortal'; // ✅ correct
import Register from './pages/register/components';
import OrganizationProfile from './pages/register/components/OrganizationProfile';
import Navigator from 'pages/common/components/Navigator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WebPortal />} />
          <Route path="ui/join-meds/register" element={<Register />} />
          <Route path="ui/join-meds/register/profile" element={<OrganizationProfile />} />
        </Route>
      </Routes>
      <Navigator />
    </Router>
  );
}

export default App;
