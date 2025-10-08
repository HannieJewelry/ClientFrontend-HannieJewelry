import axiosInstance from "../utils/axiosInstance";
import { AddressRequest } from "./model/address.model";
import { URLSearchQueryParams, buildQueryString } from "../utils/apiUtils";

export const getAddresses = async (params?: URLSearchQueryParams) => {
    const queryString = params ? `?${buildQueryString(params)}` : '';
    const { data } = await axiosInstance.get(`/api/client/addresses${queryString}`);
    return data;
};

export const getDefaultAddress = async () => {
    // First get all addresses
    const { data } = await axiosInstance.get("/api/client/addresses");
    
    // Find the default address
    const defaultAddress = data?.data?.result?.content?.find((address: any) => address.default === true);
    
    // Return the same structure but with only the default address
    return {
        message: data.message,
        code: data.code,
        data: defaultAddress || null
    };
};

export const createAddress = async (payload: AddressRequest) => {
    const { data } = await axiosInstance.post("/api/client/addresses", payload);
    return data;
};

export const updateAddress = async ({ id, payload }: { id: string; payload: AddressRequest }) => {
    const { data } = await axiosInstance.put(`/api/client/addresses/${id}`, payload);
    return data;
};

export const deleteAddress = async (id: string) => {
    const { data } = await axiosInstance.delete(`/api/client/addresses/${id}`);
    return data;
};

export const setDefaultAddress = async (id: string) => {
    const { data } = await axiosInstance.put(`/api/client/addresses/${id}/default`);
    return data;
}; 