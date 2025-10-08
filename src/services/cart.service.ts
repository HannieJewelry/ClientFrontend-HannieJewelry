import axiosInstance from "../utils/axiosInstance";

export interface AddToCartBody {
    variant_id: number;
    quantity: number;
}

export const getCart = async () => {
    const { data } = await axiosInstance.get("/api/client/cart");
    return data;
};

export const addToCart = async (payload) => {
    const { data } = await axiosInstance.post("/api/client/cart/add", payload);
    return data;
};

export const changeCart = async (payload) => {
    const { data } = await axiosInstance.post('/api/client/cart/change', payload);
    return data;
};