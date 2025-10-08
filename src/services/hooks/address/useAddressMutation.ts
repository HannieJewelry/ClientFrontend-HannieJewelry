import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddressRequest } from "../../model/address.model";
import { createAddress, deleteAddress, setDefaultAddress, updateAddress } from "../../address.service";

export const useCreateAddress = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: (payload: AddressRequest) => createAddress(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['addresses'] });
        }
    });
};

export const useUpdateAddress = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: ({ id, payload }: { id: string; payload: AddressRequest }) => 
            updateAddress({ id, payload }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['addresses'] });
        }
    });
};

export const useDeleteAddress = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: (id: string) => deleteAddress(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['addresses'] });
        }
    });
};

export const useSetDefaultAddress = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: (id: string) => setDefaultAddress(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['addresses'] });
        }
    });
}; 