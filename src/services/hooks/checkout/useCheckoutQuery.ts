import { useQuery } from "@tanstack/react-query";
import { getCheckout } from "../../checkout.service";

export const useCheckoutQuery = () => {
    return useQuery({
        queryKey: ["checkout"],
        queryFn: getCheckout,
        enabled: typeof window !== "undefined",
    });
};
