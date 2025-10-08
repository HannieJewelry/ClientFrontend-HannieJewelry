import { Metadata } from "next";
import { ProfilePageView } from "pages-sections/customer-dashboard/profile/page-view";
// API FUNCTIONS
import api from "utils/__api__/users";

export const metadata: Metadata = {
  title: "Hồ sơ cá nhân - HannieJewelry",
  description: `Quản lý hồ sơ cá nhân và thông tin tài khoản trên HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["hồ sơ", "profile", "HannieJewelry", "jewelry", "e-commerce"]
};

export default async function Profile() {
  return <ProfilePageView/>;
}
