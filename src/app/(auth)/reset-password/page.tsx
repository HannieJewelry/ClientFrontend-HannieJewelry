import type { Metadata } from "next";
import { ResetPasswordPageView } from "pages-sections/sessions/page-view";

export const metadata: Metadata = {
  title: "Đặt lại mật khẩu - HannieJewelry",
  description: `Đặt lại mật khẩu cho tài khoản HannieJewelry của bạn để tiếp tục mua sắm trang sức cao cấp`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["đặt lại mật khẩu", "reset password", "HannieJewelry", "jewelry", "e-commerce"]
};

export default function ResetPassword() {
  return <ResetPasswordPageView />;
}
