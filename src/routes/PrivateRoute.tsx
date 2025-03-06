import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { APP_ROUTES } from '../utils/constant';
import LoadingScreen from '@/components/common/loading-screen';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
}) => {
  const { isAuthenticated, loading, user } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated || !user) {
    navigate(APP_ROUTES.LOGIN);
  }
  return <>{children}</>;
};

export default PrivateRoute;
