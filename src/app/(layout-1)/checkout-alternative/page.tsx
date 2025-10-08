import { Metadata } from "next";
import { CheckoutAlternativePageView } from "pages-sections/checkout/page-view";

export const metadata: Metadata = {
  title: "Thanh toán - HannieJewelry",
  description: `Hoàn tất đơn hàng trang sức của bạn trên HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["thanh toán", "checkout", "HannieJewelry", "jewelry", "e-commerce"]
};

export default async function CheckoutAlternative() {
  return <CheckoutAlternativePageView />;
}
