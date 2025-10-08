import { useQuery } from "@tanstack/react-query";
import {getOrderDetail} from "../../order.service";

export function useOrderDetail(orderId?: string) {
    return useQuery({
        queryKey: ["order-detail", orderId],
        queryFn: () => {
            if (!orderId) return Promise.reject("No orderId provided");
            return getOrderDetail(orderId);
        },
        enabled: !!orderId,
        retry: 1,
    });
}