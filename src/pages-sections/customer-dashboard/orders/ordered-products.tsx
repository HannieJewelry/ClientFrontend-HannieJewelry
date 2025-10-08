import { FC } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { format } from "date-fns";
// GLOBAL CUSTOM COMPONENTS
import { H6, Paragraph } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";
// CUSTOM DATA MODEL
import { OrderDetail } from "services/model/order.model";

// ==============================================================
type Props = { order: OrderDetail };
// ==============================================================

export default function OrderedProducts({ order }: Props) {
  if (!order) return null;

  const {
    id,
    order_number,
    order_code,
    created_at,
    line_items = [],
    confirmed_at,
    fulfillment_status
  } = order;

  // Format dates
  const createdDate = created_at ? format(new Date(created_at), "dd MMM, yyyy") : "N/A";
  const confirmedDate = confirmed_at ? format(new Date(confirmed_at), "dd MMM, yyyy") : "Chưa xác nhận";

  return (
    <Card sx={{ p: 0, mb: "30px" }}>
      <FlexBetween px={3} py={2} flexWrap="wrap" bgcolor="grey.200">
        <Item title="Mã đơn hàng:" value={order_number || order_code || `#${id?.substring(0, 8)}`} />
        <Item title="Ngày đặt:" value={createdDate} />
        <Item title="Ngày xác nhận:" value={confirmedDate} />
      </FlexBetween>

      {line_items.length > 0 ? (
        line_items.map((item: any, ind: number) => (
          <FlexBetween px={2} py={1} flexWrap="wrap" key={ind}>
            <FlexBox gap={2.5} alignItems="center">
              <Avatar 
                alt={item.title || item.name} 
                src={item.image_src || "/assets/images/placeholder.svg"} 
                sx={{ height: 64, width: 64 }} 
              />

              <div>
                <H6>{item.title || item.name || "Sản phẩm"}</H6>
                <Paragraph color="grey.600">
                  {currency(item.price || 0)} x {item.quantity || 1}
                </Paragraph>
                {item.variant_title && (
                  <Paragraph color="grey.500" fontSize="0.875rem">
                    Phân loại: {item.variant_title}
                  </Paragraph>
                )}
              </div>
            </FlexBox>

            <Paragraph color="grey.600" ellipsis>
              Trạng thái: {
                item.fulfillment_status === "fulfilled" ? "Đã giao" :
                item.fulfillment_status === "unfulfilled" ? "Chưa giao" :
                "Đang xử lý"
              }
            </Paragraph>

              {item.fulfillment_status === "fulfilled" && (
                  <Button variant="text" color="primary">
                      Viết đánh giá
                  </Button>
              )}

          </FlexBetween>
        ))
      ) : (
        <FlexBox px={3} py={2} justifyContent="center">
          <Paragraph color="grey.600">Không có sản phẩm trong đơn hàng này</Paragraph>
        </FlexBox>
      )}
    </Card>
  );
}

function Item({ title, value }: { title: string; value: string }) {
  return (
    <FlexBox gap={1} alignItems="center">
      <Paragraph color="grey.600">{title}</Paragraph>
      <Paragraph>{value}</Paragraph>
    </FlexBox>
  );
}
