import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
// GLOBAL CUSTOM COMPONENTS
import {FlexBetween} from "components/flex-box";
import {H5, H6, Paragraph} from "components/Typography";
// CUSTOM UTILS LIBRARY FUNCTION
import {currency} from "lib";
// CUSTOM DATA MODEL
import {OrderDetail} from "services/model/order.model";

// ==============================================================
type Props = { order: OrderDetail };

// ==============================================================

function ListItem({title, value}: { title: string; value: string }) {
    return (
        <FlexBetween mb={1}>
            <Paragraph color="grey.600">{title}</Paragraph>
            <H6>{value}</H6>
        </FlexBetween>
    );
}

export default function OrderSummery({order}: Props) {
    if (!order) return null;

    const {
        shipping_address,
        billing_address,
        subtotal_price = 0,
        total_discounts = 0,
        total_price = 0,
        transactions = []
    } = order;

    // Format shipping address
    const formatAddress = (address: any) => {
        if (!address) return "Chưa có thông tin địa chỉ";

        const parts = [
            address.address1,
            address.ward,
            address.district,
            address.province
        ].filter(Boolean);

        return parts.join(", ");
    };

    const getPaymentMethod = () => {
        if (transactions && transactions.length > 0) {
            const transaction = transactions[0];

            if (transaction.gateway) {
                return transaction.gateway;
            }
            return "Phương thức thanh toán khác";
        }
        return "Chưa xác định";
    };


    return (
        <Grid container spacing={3}>
            {/* SHIPMENT ADDRESS SECTION */}
            <Grid item lg={6} md={6} xs={12}>
                <Card sx={{p: 3}}>
                    <H5 mt={0} mb={2}>
                        Địa chỉ giao hàng
                    </H5>

                    <Paragraph fontSize={14} my={0}>
                        {formatAddress(shipping_address)}
                    </Paragraph>

                    {shipping_address?.name && (
                        <Paragraph fontSize={14} mt={1} color="grey.600">
                            Người nhận: {shipping_address.name}
                        </Paragraph>
                    )}

                    {shipping_address?.phone && (
                        <Paragraph fontSize={14} color="grey.600">
                            Số điện thoại: {shipping_address.phone}
                        </Paragraph>
                    )}
                </Card>
            </Grid>

            {/* TOTAL SUMMERY SECTION */}
            <Grid item lg={6} md={6} xs={12}>
                <Card sx={{p: 3}}>
                    <H5 mt={0} mb={2}>
                        Tổng kết đơn hàng
                    </H5>

                    <ListItem title="Tạm tính:" value={currency(subtotal_price)}/>
                    <ListItem title="Phí vận chuyển:" value={currency(0)}/>
                    <ListItem title="Giảm giá:" value={currency(total_discounts)}/>

                    <Divider sx={{mb: 1}}/>

                    <FlexBetween mb={2}>
                        <H6>Tổng cộng</H6>
                        <H6>{currency(total_price)}</H6>
                    </FlexBetween>

                    <Paragraph>{getPaymentMethod()}</Paragraph>
                </Card>
            </Grid>
        </Grid>
    );
}
