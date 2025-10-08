import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddressDetailsPageView } from "pages-sections/customer-dashboard/address/page-view";
// API FUNCTIONS
import api from "utils/__api__/address";
// CUSTOM DATA MODEL
import { IdParams } from "models/Common";

export const metadata: Metadata = {
  title: "Chi tiết địa chỉ - HannieJewelry",
  description: `Xem và chỉnh sửa thông tin địa chỉ trên HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["chi tiết địa chỉ", "address details", "HannieJewelry", "jewelry", "e-commerce"]
};

export default async function Address(props: IdParams) {
  const params = await props.params;
  try {
    const address = await api.getAddress(params.id);
    return <AddressDetailsPageView address={address} />;
  } catch (error) {
    notFound();
  }
}
