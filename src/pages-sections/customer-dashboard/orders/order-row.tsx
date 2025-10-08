import Link from "next/link";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import East from "@mui/icons-material/East";
import { format } from "date-fns";
// GLOBAL CUSTOM COMPONENT
import { H5, Paragraph } from "components/Typography";
// Local CUSTOM COMPONENT
import TableRow from "../table-row";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";
// CUSTOM DATA MODEL
import { OrderDetail } from "services/model/order.model";

// =================================================
type Props = { order: OrderDetail };
// =================================================

export default function OrderRow({ order }: Props) {
  const getColor = (status: string) => {
    switch (status) {
      case "pending":
        return "warning";
      case "processing":
      case "confirmed":
        return "info";
      case "shipped":
      case "self_delivery":
        return "secondary";
      case "completed":
        return "success";
      case "cancel":
      case "failed":
        return "error";
      default:
        return "default";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending":
        return "Chờ xử lý";
      case "processing":
        return "Đang xử lý";
      case "confirmed":
        return "Đã xác nhận";
      case "shipped":
        return "Đang giao hàng";
      case "self_delivery":
        return "Tự giao hàng";
      case "completed":
        return "Hoàn thành";
      case "cancel":
        return "Đã hủy";
      case "failed":
        return "Thất bại";
      default:
        return status;
    }
  };

  // Format order date
  const formattedDate = order.created_at ? format(new Date(order.created_at), "dd/MM/yyyy") : "N/A";

  return (
    <Link href={`/orders/${order.id}`}>
      <TableRow sx={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr" }}>
        <H5 ellipsis>
          {order.order_number || `#${order.id.substring(0, 8)}`}
        </H5>

        <Box textAlign="center">
          <Chip 
            size="small" 
            label={getStatusLabel(order.order_processing_status)} 
            color={getColor(order.order_processing_status)} 
          />
        </Box>

        <Paragraph textAlign={{ sm: "center", xs: "left" }}>
          {formattedDate}
        </Paragraph>

        <Paragraph textAlign="center">
          {currency(order.total_price)}
        </Paragraph>

        <Box display={{ sm: "inline-flex", xs: "none" }} justifyContent="end">
          <IconButton>
            <East
              fontSize="small"
              sx={{
                color: "grey.500",
                transform: ({ direction }) => `rotate(${direction === "rtl" ? "180deg" : "0deg"})`
              }}
            />
          </IconButton>
        </Box>
      </TableRow>
    </Link>
  );
}
