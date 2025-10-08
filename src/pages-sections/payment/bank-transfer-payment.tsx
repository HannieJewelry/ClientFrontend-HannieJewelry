"use client";
import { AblyProvider, ChannelProvider, useChannel } from "ably/react";
import {
    Box,
    Typography,
    Card,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Button,
    useMediaQuery,
    CircularProgress,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Image from "next/image";
import { styled, useTheme } from "@mui/material/styles";
import NoteSection from "./NoteSection";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useOrderDetail } from "../../services/hooks/order/useOrderDetailQuery";
import {ablyClient} from "../../utils/ablyClient";

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    borderBottom: "1px solid #e0e0e0",
    paddingBottom: theme.spacing(1),
}));
const FlexContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: theme.spacing(2),
    },
}));
const QRContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.up("sm")]: { width: "30%" },
}));
const QRWrapper = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    padding: theme.spacing(2),
    background: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: "none",
    border: "1px solid #e0e0e0",
}));
const InfoCard = styled(Card)(({ theme }) => ({
    width: "100%",
    maxWidth: "100%",
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: "none",
    border: "1px solid #e0e0e0",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
        maxWidth: 500,
    },
}));
const CardHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    borderBottom: "1px solid #e0e0e0",
}));
const BankLogoWrap = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
}));
const StyledTable = styled(Table)(() => ({
    width: "100%",
    tableLayout: "fixed",
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:not(:last-child) td": {
        borderBottom: "1px solid #e0e0e0",
    },
    "&:hover": {
        backgroundColor: theme.palette.grey[50],
    },
}));
const StyledTableCell = styled(TableCell)(() => ({
    width: "35%",
    fontWeight: 600,
}));
const ValueTableCell = styled(TableCell)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    wordBreak: "break-all",
}));
const CopyButton = styled(Button)(({ theme }) => ({
    minWidth: 32,
    height: 32,
    color: theme.palette.primary.main,
    "&:hover": {
        color: theme.palette.common.white,
        background: theme.palette.primary.main,
    },
    "&:active": {
        transform: "scale(0.95)",
    },
}));

const BANK_NAME = "MBBank";
const ACCOUNT_NAME = "NGUYEN THANH HAU";
const BANK_ID = "970422";
const ACCOUNT_NUMBER = "0914696665";

const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
};

function RealTimePaymentStatus({ orderCode, onPaid }: { orderCode: string, onPaid: () => void }) {
    const channelName = `order-${orderCode}`;
    useChannel(channelName, "order-paid", () => {
        onPaid();
    });
    return null;
}

export default function BankTransferPayment() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const searchParams = useSearchParams();
    const router = useRouter();
    const orderId = searchParams.get("order_id");
    const { data, isLoading, error } = useOrderDetail(orderId || undefined);

    const [paid, setPaid] = useState(false);

    if (paid && orderId) {
        router.push(`/order-confirmation?order_id=${orderId}`);
    }

    if (isLoading) return <Box py={3} width="100%" display="flex" justifyContent="center"><CircularProgress /></Box>;
    if (error) return <Box py={3} color="error.main">{error.message}</Box>;
    if (!data?.data) return <Box py={3} color="error.main">Không tìm thấy đơn hàng</Box>;

    const order = data.data;
    const amount = order.total_price;
    const orderCode = order.order_code;
    const orderInfo = `SEVQR ${orderCode}`;
    const addInfo = encodeURIComponent(orderInfo);
    const template = "compact";
    const qrUrl = `https://api.vietqr.io/image/${BANK_ID}-${ACCOUNT_NUMBER}-${template}.jpg?amount=${amount}&addInfo=${addInfo}`;
    const dynamicBankInfo = [
        { label: "Chủ tài khoản:", value: ACCOUNT_NAME },
        { label: "Số tài khoản:", value: ACCOUNT_NUMBER },
        { label: "Số tiền:", value: Number(amount).toLocaleString("vi-VN") + "đ" },
        { label: "Nội dung CK:", value: orderInfo },
    ];

    return (
        <AblyProvider client={ablyClient}>
            <ChannelProvider channelName={`order-${orderCode}`}>
                <RealTimePaymentStatus orderCode={orderCode} onPaid={() => setPaid(true)} />
                <SectionTitle variant={isMobile ? "subtitle1" : "h6"}>
                    Chuyển khoản ngân hàng
                </SectionTitle>
                <FlexContainer>
                    <QRContainer>
                        <QRWrapper>
                            <img src={qrUrl} alt="QR VietQR" style={{ width: "100%", height: "auto" }} />
                        </QRWrapper>
                    </QRContainer>
                    <Box flex={1} width="100%">
                        <InfoCard variant="outlined">
                            <CardHeader>
                                <BankLogoWrap>
                                    <Image
                                        src="https://my.sepay.vn/assets/images/banklogo/mbbank-icon.png"
                                        alt="MBBank Logo"
                                        width={48}
                                        height={48}
                                        style={{ objectFit: "contain" }}
                                    />
                                </BankLogoWrap>
                                <Typography fontWeight="700">
                                    Ngân hàng {BANK_NAME}
                                </Typography>
                            </CardHeader>
                            <StyledTable>
                                <TableBody>
                                    {dynamicBankInfo.map((item) => (
                                        <StyledTableRow key={item.label}>
                                            <StyledTableCell>
                                                {item.label}
                                            </StyledTableCell>
                                            <ValueTableCell>
                                                <Typography fontWeight="700">{item.value}</Typography>
                                                <CopyButton
                                                    size="small"
                                                    onClick={() => handleCopy(item.value)}
                                                >
                                                    <ContentCopyIcon fontSize="small" />
                                                </CopyButton>
                                            </ValueTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </StyledTable>
                        </InfoCard>
                    </Box>
                </FlexContainer>
                <NoteSection />
            </ChannelProvider>
        </AblyProvider>
    );
}