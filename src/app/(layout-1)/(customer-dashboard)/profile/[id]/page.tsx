import { Metadata } from "next";
import { ProfileEditPageView } from "pages-sections/customer-dashboard/profile/page-view";
// API FUNCTIONS
import api from "utils/__api__/users";

export const metadata: Metadata = {
  title: "Chỉnh sửa hồ sơ - HannieJewelry",
  description: `Chỉnh sửa thông tin hồ sơ cá nhân trên HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["chỉnh sửa hồ sơ", "edit profile", "HannieJewelry", "jewelry", "e-commerce"]
};

export default async function ProfileEdit() {
  const user = await api.getUser();
  return <ProfileEditPageView user={user} />;
}
