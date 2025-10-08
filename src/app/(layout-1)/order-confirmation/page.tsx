import { Metadata } from "next";
import { OrderConfirmationPageView } from "pages-sections/order-confirmation";

export const metadata: Metadata = {
  title: "Xác nhận đơn hàng - HannieJewelry",
  description: `Xác nhận đơn hàng trang sức thành công trên HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["xác nhận đơn hàng", "order confirmation", "HannieJewelry", "jewelry", "e-commerce"]
};

export default function OrderConfirmation() {
  return <OrderConfirmationPageView />;
}
