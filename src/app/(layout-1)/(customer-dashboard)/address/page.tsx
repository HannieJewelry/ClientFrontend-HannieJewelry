import { Metadata } from "next";
import { AddressPageView } from "pages-sections/customer-dashboard/address/page-view";
// API FUNCTIONS
import api from "utils/__api__/address";

export const metadata: Metadata = {
  title: "Quản lý địa chỉ - HannieJewelry",
  description: `Quản lý địa chỉ giao hàng và thanh toán trên HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["địa chỉ", "address", "HannieJewelry", "jewelry", "e-commerce"]
};

export default async function Address() {
  const addressList = await api.getAddressList();
  return <AddressPageView addressList={addressList} />;
}
