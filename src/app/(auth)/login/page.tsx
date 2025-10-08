import type { Metadata } from "next";
import { LoginPageView } from "pages-sections/sessions/page-view";

export const metadata: Metadata = {
  title: "Đăng nhập - HannieJewelry",
  description: `Đăng nhập vào tài khoản HannieJewelry để mua sắm trang sức cao cấp và quản lý đơn hàng của bạn`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["đăng nhập", "trang sức", "HannieJewelry", "jewelry", "login", "e-commerce"]
};

export default function Login() {
  return <LoginPageView />;
}
