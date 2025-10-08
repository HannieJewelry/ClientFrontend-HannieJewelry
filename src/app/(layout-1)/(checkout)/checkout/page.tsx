import { Metadata } from "next";
import { CheckoutPageView } from "pages-sections/checkout/page-view";

export const metadata: Metadata = {
  title: "Thanh toán - HannieJewelry",
  description: `Hoàn tất quá trình mua hàng trang sức trên HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["thanh toán", "checkout", "trang sức", "HannieJewelry", "jewelry", "e-commerce"]
};

export default function Checkout() {
  return <CheckoutPageView />;
}
