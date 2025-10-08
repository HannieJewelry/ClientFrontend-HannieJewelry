import { Metadata } from "next";
import { PaymentPageView } from "pages-sections/payment/page-view";

export const metadata: Metadata = {
  title: "Thanh toán - HannieJewelry",
  description: `Thực hiện thanh toán an toàn cho đơn hàng trang sức của bạn`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["thanh toán", "payment", "trang sức", "HannieJewelry", "jewelry", "e-commerce"]
};

export default function Payment() {
  return <PaymentPageView />;
}
