import { Metadata } from "next";
import { EditAddressPageView } from "pages-sections/customer-dashboard/address/page-view";

export const metadata: Metadata = {
  title: "Chỉnh sửa địa chỉ - Hannie Jewelry",
  description: `Chỉnh sửa địa chỉ trong tài khoản của bạn`,
};

export default function EditAddress() {
  return <EditAddressPageView />;
} 