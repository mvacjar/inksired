import { createContext, useState, useEffect, use } from 'react';

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
      setToken(token);
      setLoading(false);
      setUser({ email: 'loki@gmail.com' });
    } catch (error) {
      console.error('Error logging in:', error);
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
