import React, { createContext, useState, useEffect, ReactNode } from "react";
import { registerUser, loginUser, getUserProfile } from "../api/userApi";

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  register: (userData: any) => Promise<void>;
  login: (userData: any) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      getUserProfile(token).then((data) => setUser(data));
    }
  }, []);

  const register = async (userData: any) => {
    const data = await registerUser(userData);
    localStorage.setItem("token", data.token);
    setIsAuthenticated(true);
    setUser(data.user);
  };

  const login = async (userData: any) => {
    const data = await loginUser(userData);
    localStorage.setItem("token", data.token);
    setIsAuthenticated(true);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
