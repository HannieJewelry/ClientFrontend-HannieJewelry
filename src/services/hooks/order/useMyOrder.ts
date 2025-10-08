import {useQuery} from "@tanstack/react-query";
import {getMyOrders} from "../../order.service";

export function useMyOrders() {
    return useQuery({
        queryKey: ["my-orders"],
        queryFn: () => getMyOrders(),
        retry: 1,
    });
}