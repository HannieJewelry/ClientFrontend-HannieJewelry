import { useMutation } from "@tanstack/react-query";
import {CartChangeBody} from "../../model/cart.model";
import {changeCart} from "../../cart.service";

export const useChangeCart = () => {
    return useMutation({
        mutationFn: (payload: CartChangeBody) => changeCart(payload),
    });
};