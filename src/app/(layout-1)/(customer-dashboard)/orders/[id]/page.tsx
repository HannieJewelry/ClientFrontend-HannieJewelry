import { Metadata } from "next";
import { OrderDetailsPageView } from "pages-sections/customer-dashboard/orders/page-view";

export const metadata: Metadata = {
  title: "Chi tiết đơn hàng - HannieJewelry",
  description: `Xem chi tiết đơn hàng trang sức của bạn tại HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "https://hanniejewelry.vn" }],
  keywords: ["chi tiết đơn hàng", "trang sức", "jewelry", "order details"]
};

export default function OrderDetails() {
  return <OrderDetailsPageView />;
}
