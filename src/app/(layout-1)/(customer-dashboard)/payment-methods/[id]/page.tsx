import { Metadata } from "next";
import { PaymentDetailsPageView } from "pages-sections/customer-dashboard/payment-methods/page-view";

export const metadata: Metadata = {
  title: "Chi tiết thanh toán - HannieJewelry",
  description: `Quản lý thông tin thanh toán và phương thức thanh toán trên HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["thanh toán", "payment", "HannieJewelry", "jewelry", "e-commerce"]
};

export default async function PaymentMethodDetails() {
  return <PaymentDetailsPageView />;
}
