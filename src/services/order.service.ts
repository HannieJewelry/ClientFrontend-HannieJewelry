import axiosInstance from "../utils/axiosInstance";
import {OrderResponse} from "./model/order.model";

export const getOrderDetail = async (orderId: string) => {
    const { data } = await axiosInstance.get<OrderResponse>(`/api/orders/${orderId}`);
    return data;
};

export const getMyOrders = async () => {
    const { data } = await axiosInstance.get<OrderResponse>("/api/client/orders/me");
    return data;
};

export const getMyOrderDetail = async (orderId: string) => {
    const { data } = await axiosInstance.get<OrderResponse>(`/api/client/orders/me/${orderId}`);
    return data;
};