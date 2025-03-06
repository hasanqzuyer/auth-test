import { createContext } from 'react';

interface AppContextType {
  isLogoutOpen: boolean;
  toggleLogout: () => void;
} 

export const AppContext = createContext<AppContextType | undefined>(undefined); 