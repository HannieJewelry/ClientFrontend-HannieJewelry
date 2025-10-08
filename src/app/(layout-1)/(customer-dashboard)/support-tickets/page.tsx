import { Metadata } from "next";
import { TicketsPageView } from "pages-sections/customer-dashboard/support-tickets/page-view";
// API FUNCTIONS
import api from "utils/__api__/ticket";

export const metadata: Metadata = {
  title: "Hỗ trợ khách hàng - HannieJewelry",
  description: `Quản lý các yêu cầu hỗ trợ và liên hệ với HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["hỗ trợ", "support", "HannieJewelry", "jewelry", "e-commerce"]
};

export default async function SupportTickets() {
  const tickets = await api.getTicketList();
  return <TicketsPageView tickets={tickets} />;
}
