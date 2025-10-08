import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addToCart, AddToCartBody} from "../../cart.service";


export const useAddToCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: AddToCartBody) => addToCart(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
    });
};