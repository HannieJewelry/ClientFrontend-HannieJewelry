"use client";

import ShoppingBag from "@mui/icons-material/ShoppingBag";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
// Local CUSTOM COMPONENTS
import OrderRow from "../order-row";
import Pagination from "../../pagination";
import DashboardHeader from "../../dashboard-header";
// CUSTOM HOOKS
import { useMyOrders } from "services/hooks/order/useMyOrder";
// GLOBAL CUSTOM COMPONENTS
import { Paragraph } from "components/Typography";

// ====================================================
export default function OrdersPageView() {
  const { data: ordersResponse, isLoading, error } = useMyOrders();
  const orders = Array.isArray(ordersResponse?.data) ? ordersResponse.data : [];

  if (isLoading) {
    return (
      <>
        <DashboardHeader Icon={ShoppingBag} title="My Orders" />
        <Box display="flex" justifyContent="center" py={4}>
          <CircularProgress />
        </Box>
      </>
    );
  }

  if (error) {
    return (
      <>
        <DashboardHeader Icon={ShoppingBag} title="My Orders" />
        <Box textAlign="center" py={4}>
          <Paragraph color="error.main">
            Có lỗi xảy ra khi tải danh sách đơn hàng. Vui lòng thử lại sau.
          </Paragraph>
        </Box>
      </>
    );
  }

  return (
    <>
      {/* TITLE HEADER AREA */}
      <DashboardHeader Icon={ShoppingBag} title="My Orders" />

      {/* ORDER LIST AREA */}
      {orders.length > 0 ? (
        orders.map((order) => (
          <OrderRow order={order} key={order.id} />
        ))
      ) : (
        <Box textAlign="center" py={4}>
          <Paragraph color="grey.600">
            Bạn chưa có đơn hàng nào.
          </Paragraph>
        </Box>
      )}

      {/* ORDERS PAGINATION */}
      {orders.length > 0 && (
        <Pagination count={Math.ceil(orders.length / 10)} onChange={(data) => console.log(data)} />
      )}
    </>
  );
}
