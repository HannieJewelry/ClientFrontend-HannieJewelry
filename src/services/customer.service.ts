import {GetProfileResponse} from "./model/customer.model";
import axiosInstance from "../utils/axiosInstance";
import {ApiResponse} from "./model/ApiResponse.model";

export const getCustomerProfile = async (): Promise<GetProfileResponse> => {
    const { data } = await axiosInstance.get<ApiResponse<GetProfileResponse>>('/api/client/customers/profile');
    return data.data;
};

export interface UpdateProfilePayload {
    birthday: string;
    gender: "MALE" | "FEMALE" | "OTHER";
    avatar?: File | string | null;
}

export const updateCustomerProfile = async (payload: UpdateProfilePayload): Promise<GetProfileResponse> => {
    const formData = new FormData();
    formData.append('birthday', payload.birthday);
    formData.append('gender', payload.gender);
    if (payload.avatar && typeof payload.avatar !== "string") {
        formData.append('avatar', payload.avatar);
    }

    const { data } = await axiosInstance.put<ApiResponse<GetProfileResponse>>(
        '/api/client/customers/profile',
        formData,
        {
            headers: { 'Content-Type': 'multipart/form-data' }
        }
    );
    return data.data;
};
