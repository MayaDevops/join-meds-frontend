import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import DashboardLayout from './DashboardLayout'; // Dashboard layout with sidebar
import Layout from './HomeLayout'; // Home layout (public)
import { getDataFromStorage } from 'utils/encryption';
import { STORAGE_KEYS } from 'pages/common/constants';

const ProtectedRoute = () => {
  const { id = '' } = getDataFromStorage(STORAGE_KEYS.OFFICE_DETAILS, true) || {};
console.log(id,'1111111111111111id')
  // Optional: redirect if unauthenticated
  // const token = localStorage.getItem('token');
  // if (!token) return <Navigate to="/ui/join-meds/login" replace />;

  return id ? (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ) : (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoute;
