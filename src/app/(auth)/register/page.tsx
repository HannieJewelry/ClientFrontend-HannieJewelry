import type { Metadata } from "next";
import { RegisterPageView } from "pages-sections/sessions/page-view";

export const metadata: Metadata = {
  title: "Đăng ký - HannieJewelry",
  description: `HannieJewelry - Cửa hàng trang sức cao cấp trực tuyến. Khám phá bộ sưu tập nhẫn, dây chuyền, bông tai và trang sức đẹp nhất`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["trang sức", "nhẫn", "dây chuyền", "bông tai", "HannieJewelry", "jewelry", "e-commerce"]
};

export default function Register() {
  return <RegisterPageView />;
}
