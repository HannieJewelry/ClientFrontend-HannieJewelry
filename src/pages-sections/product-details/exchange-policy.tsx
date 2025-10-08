"use client";
import React from "react";
import {
    Box,
    Stack,
    Table,
    TableBody,
    TableHead,
    TableRow,
    Typography,
    AccordionSummary,
    AccordionDetails,
    useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    NotesText,
    StyledAccordion, StyledAccordionDetails, StyledAccordionSummary, StyledTableCellBody, StyledTableCellBodyLast,
    StyledTableCellHead,
    StyledTableCellHeadLast,
    StyledTableContainer,
    SubTableTitle
} from "./warranty-policy";

const notes = [
    "4.1 Thời gian Đổi hàng/ Mua lại được tính theo ngày làm việc của khối bán hàng.",
    "4.2 Giá Thu đổi được tính sau giá ưu đãi trên giấy đảm bảo vàng.",
    "4.3 Mọi giao dịch đổi hàng hoặc mua lại tại Hannie Jewelry, nhân viên thực hiện giao dịch phải in 2 phiếu mua hàng (1 phiếu giao cho khách hàng). Trên 2 phiếu mua hàng yêu cầu có thông tin cơ bản: Tên khách hàng, số điện thoại, số CCCD của khách hàng, chữ kí trên 2 phiếu (ghi rõ họ tên) của khách hàng và nhân viên thực hiện giao dịch,… theo đúng các yêu cầu từ BP Kế toán.",
    "4.4 Sản phẩm được phép giao dịch Đổi hàng/ Mua lại khi có dấu, logo của công ty.",
    "4.5 Trường hợp khách mang sản phẩm không có logo công ty nhưng có giấy đảm bảo hoặc trích lục được lịch sử mua hàng, nhân viên gửi sản phẩm đến Trung tâm bảo hành sản phẩm của Hannie Jewelry để kiểm tra tuổi vàng, kiểm tra catalog hình ảnh sản phẩm khớp với giấy đảm bảo vàng thì tiến hành mua lại cho khách hàng theo quy chế.",
    "4.6 Trường hợp khách mang sản phẩm không phải của Hannie Jewelry, nhân viên tư vấn cho khách hàng mang sản phẩm qua Trung tâm bảo hành- mua lại của Hannie Jewelry.",
    "4.7 Sản phẩm gắn đá trắng, đá màu, ngọc trai, xà cừ,... bị rơi đá; sản phẩm đã chỉnh sửa có sự thay đổi về trọng lượng: thu mua theo trọng lượng thực tế tại thời điểm giao dịch theo Bảng 3.1.",
];

export default function ExchangePolicy() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                mx: "auto",
                background: theme.palette.background.default,
            }}
        >

            <StyledAccordion >
                <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography  fontWeight="600">
                        CHÍNH SÁCH THU ĐỔI
                    </Typography>
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    <Stack spacing={3}>
                        {/* 1. Vàng 22K-24K */}
                        <Box>
                            <Typography
                                color={theme.palette.primary.main}
                                fontWeight={600}
                                mb={2} // 16px
                            >
                                1. Trang sức vàng 22K - 24K
                            </Typography>
                            <Stack spacing={1}>
                                {/* 8px spacing */}
                                <NotesText>
                                    Thu đổi theo giá mua vào Bảng giá vàng Hannie Jewelry tại thời điểm giao dịch. (Được đổi sang đơn hàng có giá trị cao hơn theo chương trình ưu đãi Kinh doanh).
                                </NotesText>
                                <NotesText>
                                    Đối với các sản phẩm kiềng, vòng bị mất miềng vàng: mua lại theo thỏa thuận.
                                </NotesText>
                            </Stack>
                        </Box>

                        {/* 2. Kim cương */}
                        <Box>
                            <Typography
                                color={theme.palette.primary.main}
                                fontWeight={600}
                                mb={2}
                            >
                                2. Kim cương tự nhiên, kim cương nuôi cấy (Lab-Grown Diamond) viên
                            </Typography>
                            <NotesText mb={2}>
                                Kim cương viên còn đủ chứng thư kiểm định, giấy đảm bảo theo quy định của từng loại kim cương, thu mua theo bảng sau.
                            </NotesText>
                            <StyledTableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCellHead align="center">Thời gian</StyledTableCellHead>
                                            <StyledTableCellHead align="center">Dòng sản phẩm</StyledTableCellHead>
                                            <StyledTableCellHead align="center">Tỷ lệ đổi hàng</StyledTableCellHead>
                                            <StyledTableCellHeadLast align="center">Tỷ lệ mua lại</StyledTableCellHeadLast>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <StyledTableCellBody align="center" rowSpan={2}>0-72 giờ</StyledTableCellBody>
                                            <StyledTableCellBody align="left">KC, LDIA &lt; 4.5mm</StyledTableCellBody>
                                            <StyledTableCellBody align="center">100%</StyledTableCellBody>
                                            <StyledTableCellBodyLast align="center">70%</StyledTableCellBodyLast>
                                        </TableRow>
                                        <TableRow>
                                            <StyledTableCellBody align="left">KC, LDIA ≥ 4.5mm</StyledTableCellBody>
                                            <StyledTableCellBody align="center">100%</StyledTableCellBody>
                                            <StyledTableCellBodyLast align="center">80%</StyledTableCellBodyLast>
                                        </TableRow>
                                        <TableRow>
                                            <StyledTableCellBody align="center" rowSpan={4}>Sau 72 giờ</StyledTableCellBody>
                                            <StyledTableCellBody align="left">Viên không có tem riêng: KC &lt; 3.0mm</StyledTableCellBody>
                                            <StyledTableCellBody align="left">Theo quy chế thu đổi của trang sức đi kèm</StyledTableCellBody>
                                            <StyledTableCellBodyLast align="left">Theo quy chế thu đổi của trang sức đi kèm</StyledTableCellBodyLast>
                                        </TableRow>
                                        <TableRow>
                                            <StyledTableCellBody align="left">Viên không có tem riêng: LDIA &lt; 3.5mm</StyledTableCellBody>
                                            <StyledTableCellBody align="left">Theo quy chế thu đổi của trang sức đi kèm</StyledTableCellBody>
                                            <StyledTableCellBodyLast align="left">Theo quy chế thu đổi của trang sức đi kèm</StyledTableCellBodyLast>
                                        </TableRow>
                                        <TableRow>
                                            <StyledTableCellBody align="left">Viên có tem riêng: KC ≥ 3.0mm</StyledTableCellBody>
                                            <StyledTableCellBody align="center">80%</StyledTableCellBody>
                                            <StyledTableCellBodyLast align="center">70%</StyledTableCellBodyLast>
                                        </TableRow>
                                        <TableRow>
                                            <StyledTableCellBody align="left">Viên có tem riêng: LDIA ≥ 3.5mm</StyledTableCellBody>
                                            <StyledTableCellBody align="center">80%</StyledTableCellBody>
                                            <StyledTableCellBodyLast align="center">70%</StyledTableCellBodyLast>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </StyledTableContainer>
                            <SubTableTitle>Bảng 2.1</SubTableTitle>
                            <Stack spacing={1} mt={2}>
                                <NotesText>
                                    - Khách hàng không có giấy đảm bảo (không trích lục được lịch sử mua hàng) hoặc mất chứng thư kiểm định kim cương: Mua lại theo thỏa thuận.
                                </NotesText>
                                <NotesText>
                                    - Khi bán kim cương GIV, VGA,… (kiểm định trong nước) gắn trên các sản phẩm Hannie Jewelry, chỉ cần có chứng thư thì sẽ mua lại theo quy chế, không cần vỉ.
                                </NotesText>
                                <NotesText>
                                    - Khi bán kim cương GIV, VGA,… (kiểm định trong nước) rời, khách hàng không gắn kim cương lên sản phẩm của Hannie Jewelry, chỉ mua lại kim cương rời khi kim cương còn nguyên vẹn cả chứng thư và vỉ (vỉ không bị bóc ra).
                                </NotesText>
                            </Stack>
                        </Box>

                        {/* 3. Trang sức còn lại */}
                        <Box>
                            <Typography
                                color={theme.palette.primary.main}
                                fontWeight={600}
                                mb={2}
                            >
                                3. Các dòng trang sức còn lại (gắn đá màu, Moissanite, kim cương tự nhiên, Lab-Grown Diamond, charm, ngọc trai, Platin...)
                            </Typography>
                            <StyledTableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCellHead align="center">Tình trạng</StyledTableCellHead>
                                            <StyledTableCellHead align="center">Thời gian</StyledTableCellHead>
                                            <StyledTableCellHead align="center">Đổi hàng</StyledTableCellHead>
                                            <StyledTableCellHeadLast align="center">Mua lại</StyledTableCellHeadLast>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <StyledTableCellBody align="left" rowSpan={2}>
                                                Sản phẩm có giấy đảm bảo hoặc<br />trích lục được lịch sử mua hàng
                                            </StyledTableCellBody>
                                            <StyledTableCellBody align="center">Trong 72 giờ</StyledTableCellBody>
                                            <StyledTableCellBody align="left">100% (80% với sản phẩm có giá trị thấp hơn)</StyledTableCellBody>
                                            <StyledTableCellBodyLast align="center">70%</StyledTableCellBodyLast>
                                        </TableRow>
                                        <TableRow>
                                            <StyledTableCellBody align="center">Sau 72 giờ</StyledTableCellBody>
                                            <StyledTableCellBody align="center">80%</StyledTableCellBody>
                                            <StyledTableCellBodyLast align="center">70%</StyledTableCellBodyLast>
                                        </TableRow>
                                        <TableRow>
                                            <StyledTableCellBody align="left">
                                                Sản phẩm không có giấy đảm bảo<br />hoặc không trích lục được lịch sử<br />mua hàng
                                            </StyledTableCellBody>
                                            <StyledTableCellBody align="center">Vô thời hạn</StyledTableCellBody>
                                            <StyledTableCellBody align="left">
                                                Mua lại theo trọng lượng vàng và giá vàng thời điểm<br />(giá mua vào) theo tuổi vàng sản phẩm
                                            </StyledTableCellBody>
                                            <StyledTableCellBodyLast align="center"></StyledTableCellBodyLast>
                                        </TableRow>
                                        <TableRow>
                                            <StyledTableCellBody align="left" colSpan={4}>
                                                Mọi giao dịch đổi hàng/ Mua lại, nhân viên chọn phương án có giá trị mua lại cao nhất có thể cho khách hàng.
                                            </StyledTableCellBody>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </StyledTableContainer>
                            <SubTableTitle>Bảng 3.1</SubTableTitle>
                            <Stack spacing={1} mt={2}>
                                <NotesText>
                                    - Đối với những sản phẩm xuất hóa đơn điện tử cho tổ chức, khi thu đổi cần có xác nhận của tổ chức theo mẫu Biên bản trả lại hàng. Trường hợp không có xác nhận, hoặc không làm được Biên bản trả lại hàng, sản phẩm sẽ chuyển sang luồng mua lại Sản phẩm không có giấy đảm bảo.
                                </NotesText>
                                <NotesText>
                                    - Bảng 3.1 áp dụng cho cả sản phẩm nguyên vẹn và không còn nguyên vẹn
                                </NotesText>
                                <NotesText>
                                    - Đối với sản phẩm gắn các loại đá Moissanite, Kim cương tự nhiên, Kim cương nuôi cấy (Lab-grown Diamond) rơi viên tấm(1): thu mua theo Bảng 3.1 và trừ đi giá trị viên theo Bảng giá đá.
                                </NotesText>
                                <NotesText>
                                    - Trang sức Platin, ghép Platin không có hóa đơn hoặc không trích lục được lịch sử mua hàng: đổi hàng, mua lại theo trọng lượng (không kể viên trai/ đá/ kim cương) x 2.500.000đ/ 1 chỉ.
                                </NotesText>
                                <NotesText>
                                    - Ghi chú: (1) viên tấm: Moissanite &lt;4.0mm, Ldia &lt;3.5mm, KC &lt;3.0mm.
                                </NotesText>
                            </Stack>
                        </Box>

                        {/* 4. Một số lưu ý */}
                        <Box>
                            <Typography
                                color={theme.palette.primary.main}
                                fontWeight={600}
                                mb={2}
                            >
                                4. Một số lưu ý
                            </Typography>
                            <Stack spacing={1}>
                                {notes.map((text, idx) => (
                                    <NotesText variant="body2" color="text.secondary" key={idx}>
                                        {text}
                                    </NotesText>
                                ))}
                            </Stack>
                        </Box>
                    </Stack>
                </StyledAccordionDetails>
            </StyledAccordion>
        </Box>
    );
}
