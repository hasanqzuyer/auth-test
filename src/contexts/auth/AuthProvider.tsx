import React, { useCallback, useEffect, useState } from 'react';
import { User } from '../../types';
import { setUser as setStorageUser, getUser } from '../../utils/helper';
import { AuthContext } from './AuthContext';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = useCallback(async (user: User) => {
    try {
      setStorageUser(user);
      setUser(user);
      setLoading(false)
    } catch (error) {
      throw new Error('Login failed');
    }
  }, []);

  const logout = useCallback(async () => {
    setStorageUser(null);
    setUser(null);
  }, []);

  useEffect(() => {
    const initAuth = async () => {
      const storedUser = getUser();
      setUser(storedUser);
      setStorageUser(storedUser);
      setLoading(false);
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      loading,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};