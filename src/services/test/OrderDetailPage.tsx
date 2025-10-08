import { useOrderDetail } from "../hooks/order/useOrderDetailQuery";

export default function OrderDetailPage({ orderId }: { orderId: string }) {
    const { data, isLoading, error } = useOrderDetail(orderId);

    if (isLoading) return null;
    if (error) return null;

    return (
        <div>
            <h1>Chi tiết đơn hàng {data?.data?.order_number}</h1>
            <pre>{JSON.stringify(data?.data, null, 2)}</pre>
        </div>
    );
}
