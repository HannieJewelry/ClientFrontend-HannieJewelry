'use client';

import React from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableHead,
    Container
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// ==== Styled Components ==== //

const MainBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    gap: theme.spacing(2),
}));

const StatusBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 1,
    boxShadow: "none",
    border: "1px solid #e0e0e0",
    padding: theme.spacing(2),
    gap: theme.spacing(1),
}));

const StatusLine = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: 8,
});

const StatusLabel = styled(Typography)(({ theme }) => ({
    minWidth: 130,
    fontSize: theme.typography.body2.fontSize,
}));

const StatusValue = styled('span')(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: theme.typography.body2.fontSize,
}));

const TableSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2.5),
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: theme.spacing(3),
    },
}));

const OrderTable = styled(TableContainer)(({ theme }) => ({
    borderRadius: 1,
    boxShadow: "none",
    border: "1px solid #e0e0e0",
    flex: 2,
}));

const StyledTable = styled(Table)(({ theme }) => ({
    borderCollapse: 'separate',
    borderSpacing: 0,
    '& td, & th': {
        borderRight: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0",
    },
    '& tr > td:last-of-type, & tr > th:last-of-type': {
        borderRight: 0,
    },
    '& tr:last-of-type td': {
        borderBottom: 0,
    },
    '& th': {
        fontWeight: 700,
    },
}));

const CustomerBox = styled(Box)(({ theme }) => ({
    borderRadius: 1,
    boxShadow: "none",
    border: "1px solid #e0e0e0",
    padding: theme.spacing(3),
    minWidth: 320,
    [theme.breakpoints.down('md')]: {
        width: '100%',
        marginLeft: 0,
        marginTop: theme.spacing(2),
    },
    marginLeft: theme.spacing(2),
    flex: 1,
}));

const CustomerTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    color: theme.palette.grey[900],
    fontSize: theme.typography.subtitle2.fontSize,
    marginBottom: theme.spacing(2),
}));

const CustomerInfo = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.25),
}));

const ItalicText = styled('div')(({ theme }) => ({
    color: theme.palette.error[400],
    fontStyle: 'italic',
    ...theme.typography.caption,
    marginTop: theme.spacing(0.5),
}));

// ==== Data Demo ==== //
const order = {
    id: 7613,
    date: '03/07/2025 04:27',
    status: 'Chờ xử lý',
    paymentStatus: 'Chờ xử lý',
    method: 'COD',
    items: [
        {
            name: 'Bông tai BTPTB373',
            desc: ['Bạc 925', 'Bạc Trắng'],
            price: 682000,
            qty: 1,
            note: '09/07/2025',
        },
    ],
    customer: {
        name: 'Pham Tuyen',
        phone: '0328364631',
        email: 'tuyenpham022@gmail.com',
        address: '553 QL 13, Thủ Đức, Hồ Chí Minh',
        note: '',
    },
};

const toVND = (n: number) => n.toLocaleString('vi-VN') + '₫';

// ==== Component ==== //

export default function OrderSuccessPage() {
    return (
        <Container maxWidth="lg">
            <MainBox>
                <Typography color="primary" fontWeight={700} variant="h6">
                    Đơn hàng #{order.id}
                </Typography>
                <Typography color="text.primary" variant="body2">
                    Xin chào quý khách, chúng tôi đã nhận được thông tin đặt hàng của quý khách.<br />
                    Tư vấn viên sẽ liên hệ với bạn trong thời gian ngắn nhất
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                    Ngày: {order.date}
                </Typography>

                <StatusBox>
                    <StatusLine>
                        <StatusLabel>Trạng thái đơn hàng:</StatusLabel>
                        <StatusValue>{order.status}</StatusValue>
                    </StatusLine>
                    <StatusLine>
                        <StatusLabel>Thanh toán:</StatusLabel>
                        <StatusValue>{order.paymentStatus}</StatusValue>
                    </StatusLine>
                    <StatusLine>
                        <StatusLabel>Phương thức:</StatusLabel>
                        <Typography variant="body2">{order.method}</Typography>
                    </StatusLine>
                </StatusBox>

                <TableSection>
                    <OrderTable>
                        <StyledTable>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Sản phẩm</TableCell>
                                    <TableCell>Đơn giá</TableCell>
                                    <TableCell>Số lượng</TableCell>
                                    <TableCell>Tổng</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {order.items.map((item, idx) => (
                                    <TableRow key={item.name + idx}>
                                        <TableCell>
                                            <Typography variant="subtitle2">{item.name}</Typography>
                                            {item.desc?.map((line, i) => (
                                                <Typography key={i} variant="body2" color="text.secondary">{line}</Typography>
                                            ))}
                                            <ItalicText>
                                                Ngày dự kiến nhận hàng: {item.note}
                                            </ItalicText>
                                        </TableCell>
                                        <TableCell>{toVND(item.price)}</TableCell>
                                        <TableCell>{item.qty}</TableCell>
                                        <TableCell>{toVND(item.price * item.qty)}</TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell colSpan={3}>Tổng tiền hàng</TableCell>
                                    <TableCell>{toVND(order.items.reduce((s, i) => s + i.price * i.qty, 0))}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>Tổng cộng Voucher giảm giá</TableCell>
                                    <TableCell>0₫</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>Tổng tiền phí vận chuyển</TableCell>
                                    <TableCell>Miễn phí</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>
                                        <Typography fontWeight={700} variant="subtitle2">
                                            Tổng thanh toán
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontWeight={700} variant="body1">
                                            {toVND(order.items.reduce((s, i) => s + i.price * i.qty, 0))}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </StyledTable>
                    </OrderTable>
                    <CustomerBox>
                        <CustomerTitle variant="subtitle1">
                            THÔNG TIN KHÁCH HÀNG
                        </CustomerTitle>
                        <CustomerInfo>
                            <Typography variant="body2" fontWeight={500}>
                                Họ tên: <Box component="span" fontWeight={400} display="inline">{order.customer.name}</Box>
                            </Typography>
                            <Typography variant="body2" fontWeight={500}>
                                Điện thoại: <Box component="span" fontWeight={400} display="inline">{order.customer.phone}</Box>
                            </Typography>
                            <Typography variant="body2" fontWeight={500}>
                                Email: <Box component="span" fontWeight={400} display="inline">{order.customer.email}</Box>
                            </Typography>
                            <Typography variant="body2" fontWeight={500}>
                                Địa chỉ: <Box component="span" fontWeight={400} display="inline">{order.customer.address}</Box>
                            </Typography>
                            <Typography variant="body2" fontWeight={500}>
                                Ghi chú: <Box component="span" fontWeight={400} display="inline">{order.customer.note || ''}</Box>
                            </Typography>
                        </CustomerInfo>
                    </CustomerBox>
                </TableSection>
            </MainBox>
        </Container>
    );
}
