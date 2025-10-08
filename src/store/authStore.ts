import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import Cookies from 'js-cookie';

interface User {
  id?: string;
  email?: string;
  phone?: string;
  name?: string;
  [key: string]: any;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

const COOKIE_OPTIONS = {
  expires: 7,
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const
};

export const useAuthStore = create<AuthState>()(
    persist<AuthState>(
        (set) => ({
          token: null,
          user: null,
          isAuthenticated: false,
          setToken: (token) => {
            Cookies.set('auth-token', token, COOKIE_OPTIONS);
            set({ token, isAuthenticated: !!token });
          },
          setUser: (user) => set({ user }),
          logout: () => {
            Cookies.remove('auth-token', { path: '/' });
            set({ token: null, user: null, isAuthenticated: false });
          },
        }),
        { name: 'auth-storage' }
    )
);
