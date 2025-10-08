"use client";

import { useParams } from "next/navigation";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
// Local CUSTOM COMPONENTS
import OrderSummery from "../order-summery";
import OrderProgress from "../order-progress";
import OrderedProducts from "../ordered-products";
import DashboardHeader from "../../dashboard-header";
// CUSTOM HOOKS
import { useMyOrderDetail } from "services/hooks/order/useMyOrderDetail";
// GLOBAL CUSTOM COMPONENTS
import { Paragraph } from "components/Typography";

// =============================================================
export default function OrderDetailsPageView() {
  const params = useParams();
  const orderId = params?.id as string;
  
  const { data: orderResponse, isLoading, error } = useMyOrderDetail(orderId);
  const order = orderResponse?.data;

  if (isLoading) {
    return (
      <>
        <DashboardHeader
          Icon={ShoppingBag}
          title="Chi tiết đơn hàng"
        />
        <Box display="flex" justifyContent="center" py={4}>
          <CircularProgress />
        </Box>
      </>
    );
  }

  if (error || !order) {
    return (
      <>
        <DashboardHeader
          Icon={ShoppingBag}
          title="Chi tiết đơn hàng"
        />
        <Box textAlign="center" py={4}>
          <Paragraph color="error.main">
            Không thể tải thông tin đơn hàng. Vui lòng thử lại sau.
          </Paragraph>
        </Box>
      </>
    );
  }

  return (
    <>
      {/* TITLE HEADER AREA */}
      <DashboardHeader
        href="/orders"
        Icon={ShoppingBag}
        title={`Chi tiết đơn hàng ${order.order_number || order.order_code || `#${order.id?.substring(0, 8)}`}`}
        buttonText="Quay lại"
      />

      {/* ORDER PROGRESS AREA */}
      <OrderProgress order={order} />

      {/* ORDERED PRODUCT LIST */}
      <OrderedProducts order={order} />

      {/* SHIPPING AND ORDER SUMMERY */}
      <OrderSummery order={order} />
    </>
  );
}
