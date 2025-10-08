"use client";

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";
import { FlexBox } from "../../../components/flex-box";
import { useTheme } from "@mui/material/styles";
import { currency } from "lib";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PaymentIcon from "@mui/icons-material/AccountBalanceWallet";
import { useCheckoutQuery } from "../../../services/hooks/checkout/useCheckoutQuery";
import { useUpdateCheckout } from "../../../services/hooks/checkout/useUpdateCheckout";
import { useCompleteCheckout } from "../../../services/hooks/checkout/useCompleteCheckout";

export default function CheckoutSummary({
                                            shippingAddress,
                                            billingAddress,
                                            sameAsShipping,
                                        }) {
    const theme = useTheme();
    const router = useRouter();
    const { t } = useTranslation();
    const { data: checkout, isLoading, error } = useCheckoutQuery();
    const { mutate: updateCheckout, isPending: isUpdating } = useUpdateCheckout();
    const { mutate: completeCheckout, isPending: isCompleting } = useCompleteCheckout();

    const [selectedPayment, setSelectedPayment] = useState<null | any>(null);

    if (isLoading) return null;
    if (error) return null;

    const lineItems = checkout?.line_items || [];
    const paymentMethods = checkout?.payment_methods || [];

    const tongTienHang = checkout?.sub_total_before_tax || 0;
    const tongGiamGia = checkout?.discount || 0;
    const phiVanChuyen = checkout?.shipping || 0;
    const tongThanhToan = checkout?.total || 0;


    const handleComplete = () => {
        if (!shippingAddress) {
            alert("Vui lòng chọn địa chỉ giao hàng");
            return;
        }

        const updateBody = {
            attributes: [
                { key: "shipping_instructions", value: "Leave at the door" },
            ],
            address_id: shippingAddress.id,
            note: "Giao hàng buổi sáng",
            shipping_method_id: 1,
            payment_method_id: selectedPayment?.id,
        };

        console.log("Address ID being sent:", shippingAddress.id);
        console.log("Complete updateBody:", updateBody);

        updateCheckout(updateBody, {
            onSuccess: () => {
                completeCheckout(
                    { payment_method: selectedPayment?.code },
                    {
                        onSuccess: (response) => {
                            const orderId = response?.data?.order_id;
                            if (selectedPayment?.code === "bank_transfer" && orderId) {
                                router.push(`/payment/banking?order_id=${orderId}`);
                            } else if (selectedPayment?.code === "cod") {
                                router.push("/order-confirmation");
                            } else {
                                alert("Không lấy được order_id, vui lòng thử lại!");
                            }
                        },
                        onError: () => {
                            alert("Có lỗi khi xác nhận đơn hàng. Vui lòng thử lại!");
                        },
                    }
                );
            },
            onError: () => {
                alert("Cập nhật checkout thất bại, vui lòng thử lại!");
            },
        });
    };

    return (
        <Card
            sx={{
                p: 3,
                boxShadow: "none",
                border: "1px solid #e0e0e0",
                borderRadius: 1,
            }}
        >
            {/* Danh sách sản phẩm */}
            <Stack spacing={2} mb={2}>
                {lineItems.length === 0 ? (
                    <Typography color="grey.600">{t("CART_EMPTY")}</Typography>
                ) : (
                    lineItems.map((item) => (
                        <Box key={item.id} display="flex" alignItems="flex-start" gap={2}>
                            <Avatar
                                src={item.image_url || "/no-image.png"}
                                alt={item.product_title}
                                variant="rounded"
                                sx={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: "12px",
                                    border: `1px solid ${theme.palette.grey[200]}`,
                                    background: "#fff",
                                }}
                            />
                            <Box flex={1}>
                                <Typography fontWeight={600} fontSize={16} color="text.primary">
                                    {item.product_title}
                                </Typography>
                                <Typography fontSize={13} color="text.secondary">
                                    {item.variant_title}
                                </Typography>
                                <Typography fontSize={13} color="text.secondary" mb={0.5}>
                                    {t("QUANTITY")}: {item.quantity}
                                </Typography>
                            </Box>
                            <Box minWidth={115} textAlign="right">
                                <Typography fontWeight={500} fontSize={16} color="text.primary">
                                    {currency(item.price)}
                                </Typography>
                                <Typography fontSize={13} color={theme.palette.primary[700]}>
                                    {currency(item.line_price)}
                                </Typography>
                            </Box>
                        </Box>
                    ))
                )}
            </Stack>

            <Divider sx={{ my: 2 }} />

            {/* Tổng kết đơn hàng */}
            <Box>
                <FlexBox justifyContent="space-between" mb={1}>
                    <Typography color="text.primary">{t("TOTAL_GOODS_AMOUNT")}</Typography>
                    <Typography color="text.primary" fontWeight={500}>
                        {currency(tongTienHang)}
                    </Typography>
                </FlexBox>
                <FlexBox justifyContent="space-between" mb={1}>
                    <Typography color="text.primary">{t("TOTAL_VOUCHER_DISCOUNT")}</Typography>
                    <Typography color="grey.600" fontWeight={500}>
                        - {currency(tongGiamGia)}
                    </Typography>
                </FlexBox>
                <FlexBox justifyContent="space-between" mb={1}>
                    <Typography color="text.primary">{t("TOTAL_SHIPPING_FEE")}</Typography>
                    <Typography color="grey.600" fontWeight={500}>
                        {phiVanChuyen > 0 ? currency(phiVanChuyen) : t("FREE")}
                    </Typography>
                </FlexBox>
            </Box>

            <Divider sx={{ my: 2 }} />

            <FlexBox justifyContent="space-between" alignItems="flex-end" mb={2}>
                <Typography color="text.primary" fontWeight={700}>
                    {t("TOTAL_PAYMENT")}
                </Typography>
                <Box display="flex" alignItems="baseline" gap={1}>
                    <Typography color="grey.600" fontSize={15}>
                        VND
                    </Typography>
                    <Typography fontSize={18} fontWeight={700} lineHeight={1} color="text.primary">
                        {currency(tongThanhToan)}
                    </Typography>
                </Box>
            </FlexBox>

            {/* Phương thức thanh toán */}
            {selectedPayment === null ? (
                <Stack spacing={2}>
                    {paymentMethods.map((pm) => (
                        <Button
                            key={pm.id}
                            fullWidth
                            variant="contained"
                            color={pm.code === "cod" ? "primary" : "info"}
                            startIcon={<PaymentIcon />}
                            size="large"
                            onClick={() => setSelectedPayment(pm)}
                        >
                            {pm.name}
                        </Button>
                    ))}
                </Stack>
            ) : (
                <>
                    <Button
                        fullWidth
                        variant="contained"
                        color="success"
                        startIcon={<PaymentIcon />}
                        size="large"
                        onClick={handleComplete}
                        disabled={isUpdating || isCompleting}
                    >
                        {isUpdating || isCompleting ? t("PROCESSING") : t("CONFIRM_PAYMENT")}
                    </Button>

                    <Box mt={1} display="flex" justifyContent="flex-end">
                        <Button
                            variant="text"
                            color="primary"
                            startIcon={<ArrowBackIcon />}
                            onClick={() => setSelectedPayment(null)}
                        >
                            {t("BACK_TO_CART")}
                        </Button>
                    </Box>
                </>
            )}
        </Card>
    );
}
