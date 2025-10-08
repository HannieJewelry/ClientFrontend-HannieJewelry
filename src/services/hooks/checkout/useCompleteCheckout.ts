import { useMutation, useQueryClient } from "@tanstack/react-query";
import { completeCheckout } from "../../checkout.service";

export const useCompleteCheckout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (body?: any) => completeCheckout(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        },
    });
};
