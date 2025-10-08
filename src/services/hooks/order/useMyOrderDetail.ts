import {useQuery} from "@tanstack/react-query";
import {getMyOrderDetail} from "../../order.service";

export function useMyOrderDetail(orderId?: string) {
    return useQuery({
        queryKey: ["my-order-detail", orderId],
        queryFn: () => {
            if (!orderId) return Promise.reject("No orderId provided");
            return getMyOrderDetail(orderId);
        },
        enabled: !!orderId,
        retry: 1,
    });
}