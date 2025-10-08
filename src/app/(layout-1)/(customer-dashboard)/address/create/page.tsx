import { Metadata } from "next";
import { CreateAddressPageView } from "pages-sections/customer-dashboard/address/page-view";

export const metadata: Metadata = {
  title: "Thêm địa chỉ mới - Hannie Jewelry",
  description: `Thêm địa chỉ mới vào tài khoản của bạn`,
};

export default function CreateAddress() {
  return <CreateAddressPageView />;
} 