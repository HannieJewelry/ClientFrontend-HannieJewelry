"use client";

import { ReactNode, useEffect } from 'react';
import { useAuthCheck } from '../hooks/auth/useAuthCheck';

interface AuthCheckWrapperProps {
  children: ReactNode;
}

const AuthCheckWrapper = ({ children }: AuthCheckWrapperProps) => {
  useAuthCheck();

  return <>{children}</>;
};

export default AuthCheckWrapper; 