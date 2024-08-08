import { createContext, useState, useEffect } from 'react';
import { Token } from '@/api';
import { User } from '@/api';

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const login = async (token) => {
    try {
      tokenCtrl.setToken(token);
      const response = await userCtrl.getMe();
      console.log(response);
      setUser(response);
      setToken(token);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const data = {
    token,
    user,
    login,
    logout: null,
    updateUser: null,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
