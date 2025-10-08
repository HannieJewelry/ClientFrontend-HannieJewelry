import { Metadata } from "next";
import { notFound } from "next/navigation";
import { TicketDetailsPageView } from "pages-sections/customer-dashboard/support-tickets/page-view";
// API FUNCTIONS
import api from "utils/__api__/ticket";
import {SlugParams} from "../../../../../models/Common";
// CUSTOM DATA MODEL

export const metadata: Metadata = {
  title: "Chi tiết hỗ trợ - HannieJewelry",
  description: `Xem chi tiết yêu cầu hỗ trợ khách hàng trên HannieJewelry`,
  authors: [{ name: "HannieJewelry", url: "http://hanniejewelry.vn/" }],
  keywords: ["chi tiết hỗ trợ", "support details", "HannieJewelry", "jewelry", "e-commerce"]
};

export default async function SupportTicketDetails(props: SlugParams) {
  const params = await props.params;
  try {
    const ticket = await api.getTicket(String(params.slug));
    return <TicketDetailsPageView ticket={ticket} />;
  } catch (error) {
    notFound();
  }
}
