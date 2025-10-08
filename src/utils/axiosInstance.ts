import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { MockEndPoints } from '__server__';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

// Interceptor cho request: log request
axiosInstance.interceptors.request.use(
    (config) => {
        console.log("Request gửi đi:", config);
        return config;
    },
    Promise.reject
);

// Interceptor cho request: thêm token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get('auth-token');
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    Promise.reject
);

// Interceptor cho response: xử lý lỗi 401
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Xoá token (nếu cần)
            Cookies.remove('auth-token');
            // Chuyển hướng về login
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export const Mock = new MockAdapter(axiosInstance);
MockEndPoints(Mock);

export default axiosInstance;
