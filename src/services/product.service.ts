import axiosInstance from '../utils/axiosInstance';
import {buildQueryString, URLSearchQueryParams} from "../utils/apiUtils";
import {ApiPaginatedResult, ApiResponse} from "./model/ApiResponse.model";
import {Product} from "../models/Product.model";
import {ProductType} from "./model/productType.model";
import {Vendor} from "./model/vendor.model";

export const getProducts = async (
    params?: URLSearchQueryParams
): Promise<ApiResponse<ApiPaginatedResult<Product>>> => {
    const query = buildQueryString(params);
    const fullUrl = `/api/client/collections/all/products${query ? '?' + query : ''}`;
    
    // Debug: Uncomment to log the final API URL
    // if (params?.filter) {
    //     console.log('🚀 Final API URL:', fullUrl);
    //     console.log('📊 Query params:', params);
    // }
    
    const { data } = await axiosInstance.get<ApiResponse<{ result: ApiPaginatedResult<Product> }>>(fullUrl);
    return {
        ...data,
        data: data.data.result
    };
};

export const getProductDetail = async (handle: string): Promise<ApiResponse<Product>> => {
    const { data } = await axiosInstance.get<ApiResponse<Product>>(`/api/client/collections/${handle}`);
    return data;
};


export const getProductTypes = async (): Promise<ApiResponse<ProductType[]>> => {
    const { data } = await axiosInstance.get<ApiResponse<ProductType[]>>(
        `/api/client/collections/product-types`
    );
    return data;
};

export const getVendors = async (): Promise<ApiResponse<Vendor[]>> => {
    const { data } = await axiosInstance.get<ApiResponse<Vendor[]>>(
        `/api/client/collections/vendors`
    );
    return data;
};