import {useQuery} from '@tanstack/react-query';
import {getProductDetail, getProducts, getProductTypes, getVendors} from "../../product.service";
import {URLSearchQueryParams} from "../../../utils/apiUtils";

export const useProducts = (params?: URLSearchQueryParams) => {
    return useQuery({
        queryKey: ['products', params],
        queryFn: () => getProducts(params),
    });
};

export const useProductDetail = (handle: string, enabled = true) => {
    return useQuery({
        queryKey: ["productDetail", handle],
        queryFn: () => getProductDetail(handle),
        enabled: !!handle && enabled,
    });
};

export const useProductTypes = () => {
    return useQuery({
        queryKey: ['productTypes'],
        queryFn: () => getProductTypes(),
    });
};

export const useVendors = () => {
    return useQuery({
        queryKey: ['vendors'],
        queryFn: () => getVendors(),
    });
};