import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { APP_ROUTES } from '@/utils/constant';
import LoadingScreen from '@/components/common/loading-screen';
import DashboardLayout from '@/components/layout/dashboard-layout';
import PrivateRoute from './PrivateRoute';

const AuthLayout = React.lazy(() => import('@/components/layout/auth-layout'));
const LoginPage = React.lazy(() => import('@/pages/auth/Login'));
const DashboardPage = React.lazy(() => import('@/pages/Dashboard'));
const NotFoundPage = React.lazy(() => import('@/pages/NotFound'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
        </Route>

        <Route
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route path="/" element={<Navigate to={APP_ROUTES.DASHBOARD} replace />} />
          <Route path={APP_ROUTES.DASHBOARD} element={<DashboardPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense >
  );
};

export default AppRoutes;
