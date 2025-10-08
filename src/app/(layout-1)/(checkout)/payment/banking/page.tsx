import { Metadata } from "next";
import { PaymentPageView } from "pages-sections/payment/page-view";

export const metadata: Metadata = {
    title: "Thanh toán chuyển khoản ngân hàng | Hannie Jewelry",
    description: "Hoàn tất thanh toán đơn hàng an toàn và nhanh chóng qua chuyển khoản ngân hàng tại Hannie Jewelry. Xác nhận đơn hàng tự động, ưu tiên đóng gói và giao hàng nhanh.",
    authors: [{ name: "Hannie Jewelry", url: "https://hanniejewelry.vn" }],
    keywords: [
        "Hannie Jewelry",
        "Thanh toán chuyển khoản",
        "Mua trang sức online",
        "Chuyển khoản ngân hàng",
        "Thanh toán an toàn",
        "Trang sức",
        "Order Jewelry"
    ]
};

export default function CheckoutPaymentBanking() {
    return (
        <PaymentPageView />
    );
}
