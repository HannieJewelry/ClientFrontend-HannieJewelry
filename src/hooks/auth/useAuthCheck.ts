import { useEffect } from 'react';
import { useAuthStore } from '../../store/authStore';
import Cookies from 'js-cookie';

export const useAuthCheck = () => {
  const { token, setToken, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (token && isAuthenticated) return;

    const tokenFromCookie = Cookies.get('auth-token');
    
    if (tokenFromCookie) {
      console.log('Found authentication token in cookie');
      setToken(tokenFromCookie);
    }
  }, [token, isAuthenticated, setToken]);

  return { isAuthenticated };
}; 