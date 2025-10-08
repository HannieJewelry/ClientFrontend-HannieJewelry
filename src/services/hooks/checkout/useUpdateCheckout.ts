import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCheckout } from "../../checkout.service";

export const useUpdateCheckout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (body: any) => updateCheckout(body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
            queryClient.invalidateQueries({ queryKey: ["checkout"] });
        },
    });
};
