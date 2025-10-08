import { Metadata } from "next";
import { NotFoundPageView } from "pages-sections/not-found";

export const metadata: Metadata = {
  title: "404 - Trang không tìm thấy - HannieJewelry",
  description: "Trang bạn tìm kiếm không tồn tại trên HannieJewelry",
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["404", "not found", "HannieJewelry", "jewelry", "e-commerce"]
};

export default function NotFound() {
  return <NotFoundPageView />;
}
