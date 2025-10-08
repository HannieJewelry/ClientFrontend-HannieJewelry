import { Metadata } from "next";
import { OrdersPageView } from "pages-sections/customer-dashboard/orders/page-view";

export const metadata: Metadata = {
  title: "Đơn hàng của tôi - HannieJewelry",
  description: `Quản lý và theo dõi đơn hàng trang sức của bạn tại HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "https://hanniejewelry.vn" }],
  keywords: ["đơn hàng", "trang sức", "jewelry", "orders"]
};

export default function Orders() {
  return <OrdersPageView />;
}
