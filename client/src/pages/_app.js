import '@/scss/globals.scss';
import { AuthProvider } from '@/contexts/AuthContext';

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
