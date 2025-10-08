import axiosInstance from '../utils/axiosInstance';

export const requestOtpAPI = (phone: string) => axiosInstance.post('/api/auth/request-otp', { phone });

export const verifyOtpAPI = (phone: string, otp: string) => axiosInstance.post('/api/auth/login-otp', { phone, otp });
