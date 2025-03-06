import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './contexts/app/AppProvider';
import { AuthProvider } from './contexts/auth/AuthProvider';
import AppRoutes from './routes/AppRoutes';
import LoadingScreen from './components/common/loading-screen';

const App: React.FC = () => {
  return (
    <AppProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingScreen />}>
            <AppRoutes />
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </AppProvider>
  );
};

export default App;
