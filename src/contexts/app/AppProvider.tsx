import React, { useState, useCallback } from 'react';
import { AppContext } from './AppContext';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const toggleLogout = useCallback(() => {
    setIsLogoutOpen(prev => !prev);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLogoutOpen,
        toggleLogout,
      }}>
      {children}
    </AppContext.Provider>
  );
}; 