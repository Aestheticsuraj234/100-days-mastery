import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const BASE_URL = 'http://localhost:3000';

  const checkAuth = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/v1/user/me`, {
        withCredentials: true,
      });
      console.log(data);
      setUser(data);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const register = async (registerData) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/api/v1/user/register`, registerData, {
        withCredentials: true,
      });
      setUser(data.user);
      toast.success('Registration successful');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
      throw error;
    }
  };

  const login = async (loginData) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/api/v1/user/login`, loginData, {
        withCredentials: true,
      });
      setUser(data.user);
      toast.success('Login successful');
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${BASE_URL}/api/v1/user/logout`, {}, {
        withCredentials: true,
      });
      setUser(null);
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
