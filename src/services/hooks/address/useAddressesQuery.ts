import { useQuery } from "@tanstack/react-query";
import { getAddresses, getDefaultAddress } from "../../address.service";
import { URLSearchQueryParams } from "../../../utils/apiUtils";

export const useAddressesQuery = (params?: URLSearchQueryParams) => {
    return useQuery({
        queryKey: ['addresses', params],
        queryFn: () => getAddresses(params),
    });
};

export const useDefaultAddressQuery = () => {
    return useQuery({
        queryKey: ['defaultAddress'],
        queryFn: getDefaultAddress,
    });
}; 