"use client";

import Link from "next/link";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import {useTranslation} from "react-i18next";
import {currency} from "../../lib";
import {Cart} from "../../services/model/cart.model";

interface Props {
    cart?: Cart; // có thể undefined
}
export default function CheckoutSummary( cart:Props ) {
    const {t} = useTranslation();
    const total = cart?.cart.total_price || 0;

    return (
        <Box>
            <Card sx={{
                mb: 2,
                p: 3,
                borderRadius: 1,
                boxShadow: "none",
                border: "1px solid #e0e0e0",
            }}>
                <Typography variant="subtitle1" fontWeight={600} color="grey.900" mb={2}>
                    {t("ORDER_SUMMARY")}
                </Typography>
                <Divider sx={{mb: 2}}/>
                <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography>{t("TOTAL_GOODS_AMOUNT")}:</Typography>
                    <Typography fontWeight={600}>{currency(total)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography>{t("SUBTOTAL")}:</Typography>
                    <Typography fontWeight={600}>{currency(total)}</Typography>
                </Box>
            </Card>

            <Card sx={{
                p: 3,
                boxShadow: "none",
                borderRadius: 1,
                border: "1px solid #e0e0e0",
            }}>
                <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography>{t("TOTAL_PAYMENT")}:</Typography>
                    <Typography fontWeight={600}>{currency(total)}</Typography>
                </Box>

                <Stack spacing={2}>
                    <Button
                        fullWidth
                        color="primary"
                        href="/checkout"
                        variant="contained"
                        LinkComponent={Link}
                    >
                        {t("BUY")}
                    </Button>

                    <Button
                        fullWidth
                        component={Link}
                        href="/"
                        variant="outlined"
                    >
                        {t("BUY_MORE_PRODUCTS")}
                    </Button>
                </Stack>
            </Card>
        </Box>
    );
}
