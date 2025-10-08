import { Metadata } from "next";
import { CartPageView } from "pages-sections/cart/page-view";

export const metadata: Metadata = {
  title: "Giỏ hàng - HannieJewelry",
  description: `Xem và quản lý các sản phẩm trang sức trong giỏ hàng của bạn`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["giỏ hàng", "cart", "trang sức", "HannieJewelry", "jewelry", "e-commerce"]
};

export default function Cart() {
  return <CartPageView />;
}
