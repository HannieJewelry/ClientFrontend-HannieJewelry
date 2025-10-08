import axiosInstance from "../utils/axiosInstance";

export const getCheckout = async () => {
    const res = await axiosInstance.get(`/api/client/checkout`);
    console.log("API raw response:", res.data);
    return res.data.data;
};
export const completeCheckout = async (body?: any) => {
    const res = await axiosInstance.post(`/api/client/checkout/complete`, body || {});
    console.log("Complete checkout response:", res.data);
    return res.data;
};

export const updateCheckout = async (body: any) => {
    const res = await axiosInstance.put(`/api/client/checkout`, body);
    console.log("Update checkout response:", res.data);
    return res.data;
};