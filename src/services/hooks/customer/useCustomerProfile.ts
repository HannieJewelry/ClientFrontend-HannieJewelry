import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {getCustomerProfile, updateCustomerProfile} from "../../customer.service";

export const useCustomerProfile = () =>
    useQuery({
        queryKey: ['customer-profile'],
        queryFn: getCustomerProfile,
    });

export const useUpdateCustomerProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateCustomerProfile,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['customer-profile'] });
        },
    });
};
