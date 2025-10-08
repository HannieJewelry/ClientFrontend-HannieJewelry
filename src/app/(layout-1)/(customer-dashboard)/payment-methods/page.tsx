import { Metadata } from "next";
import { PaymentMethodsPageView } from "pages-sections/customer-dashboard/payment-methods/page-view";

export const metadata: Metadata = {
  title: "Phương thức thanh toán - HannieJewelry",
  description: `Quản lý các phương thức thanh toán trên HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["phương thức thanh toán", "payment methods", "HannieJewelry", "jewelry", "e-commerce"]
};

export default async function PaymentMethods() {
  return <PaymentMethodsPageView />;
}
