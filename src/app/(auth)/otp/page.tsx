import type { Metadata } from "next";
import { OtpVerifyPageView } from "pages-sections/sessions/page-view";

export const metadata: Metadata = {
  title: "Xác thực OTP - HannieJewelry",
  description: `Xác thực mã OTP để đăng nhập vào tài khoản HannieJewelry của bạn`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["otp", "xác thực", "HannieJewelry", "jewelry", "verification", "e-commerce"]
};

export default function OtpPage() {
  return <OtpVerifyPageView />;
}