import { useQuery } from "@tanstack/react-query";
import {getCart} from "../../cart.service";

export const useCartQuery = () => {
    return useQuery({
        queryKey: ['cart'],
        queryFn: getCart,
    });
};
