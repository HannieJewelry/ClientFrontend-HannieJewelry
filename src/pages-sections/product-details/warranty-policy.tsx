"use client";

import React from "react";
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Stack
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {useTheme} from "@mui/material/styles";
import styled from "@mui/material/styles/styled";
import {fontSizes} from "../../theme/sizes";

const RootBox = styled(Box)(({theme}) => ({
    margin: "0 auto",
    marginTop: theme.spacing(3),
}));

export const StyledAccordion = styled(Accordion)(() => ({
    backgroundColor: "transparent",
    boxShadow: "none"
}));

const SectionTitle = styled(Typography)(({theme}) => ({
    fontWeight: 600,
    letterSpacing: "0.3px",
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    fontSize: fontSizes.sm,
}));

export const StyledTableContainer = styled(TableContainer)(({theme}) => ({
    width: "100%",
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: "transparent",
    boxShadow: "none"
}));

export const StyledTableCellHead = styled(TableCell)(({theme}) => ({
    fontWeight: 600,
    color: theme.palette.primary.main,
    fontSize: fontSizes.sm,
    borderRight: `1px solid ${theme.palette.grey[400]}`,
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    whiteSpace: "nowrap"
}));

export const StyledTableCellHeadLast = styled(StyledTableCellHead)(({theme}) => ({
    borderRight: "none"
}));

export const StyledTableCellBody = styled(TableCell)(({theme}) => ({
    // fontWeight: 300,
    fontSize: fontSizes.sm,
    borderRight: `1px solid ${theme.palette.grey[400]}`,
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    padding: "14.8px 16px"
}));

export const StyledTableCellBodyLast = styled(StyledTableCellBody)(({theme}) => ({
    borderRight: "none"
}));

export const SubTableTitle = styled(Typography)(({theme}) => ({
    // fontWeight: 300,
    fontSize: fontSizes.md,
    letterSpacing: "0.3px",
    color: theme.palette.grey[700],
    marginTop: theme.spacing(2),
    textAlign: "center"
}));

const NotesTitle = styled(Typography)(({theme}) => ({
    fontWeight: 600,
    fontSize: fontSizes.sm,
    letterSpacing: "0.3px",
    color: theme.palette.primary.main
}));

export const NotesText = styled(Typography)(({theme}) => ({
    // fontWeight: 300,
    fontSize: fontSizes.sm,
    letterSpacing: "0.3px",
    lineHeight: "21px",
    color: theme.palette.text.primary,
}));

const NotesTextDisabled = styled(NotesText)(({theme}) => ({
    color: theme.palette.text.disabled,
    fontSize: fontSizes.md,
}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    padding: 0,
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    '&.MuiAccordionSummary-root': {
        padding: 0,
        minHeight: 0,
    },
    '& .MuiAccordionSummary-content': {
        margin: 0,
        paddingTop: 8 ,
        paddingBottom: 8,
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: 0,
        paddingTop: 8,
    }
}));

export const StyledAccordionDetails = styled(AccordionDetails)({
    marginTop: 8,
    padding: 0,
});


export default function WarrantyPolicy() {
    const theme = useTheme();
    const freeWarrantyData = [
        {content: "Làm sạch sản phẩm tại cửa hàng", time: "Trọn đời"},
        {content: "Đánh bóng và xi mới", time: "05 lần"},
        {content: "Gắn đá CZ", time: "Trọn đời"},
        {
            content: "Gắn kim cương/ đá màu/ ngọc trai (chưa bao gồm viên)",
            time: "Miễn phí công gắn"
        },
        {content: "Gắn đá Moissanite từ 0.8-3.0 mm", time: "Trọn đời"},
        {content: "Chỉnh size tay, khắc tên", time: "Trọn đời"},
        {content: "Hàn dây, sửa khoá (không bao gồm thay mới)", time: "01 lần"}
    ];
    const paidWarrantyData = [
        {content: "Sửa độ rung ladanse", price: "100.000đ"},
        {
            content: "Nắn lại nhẫn (tuỳ tình trạng), đánh bóng, xi mới",
            price: "50.000đ"
        },
        {
            content:
                "Cắt dây/hàn dây: cắt, đốt, hàn, đánh bóng, xi mới (chưa bao gồm vàng thêm)",
            price: "70.000đ + phí vàng thêm"
        },
        {
            content: "Nhẫn thay đai, sản phẩm thêm chi tiết (chưa bao gồm vàng thêm)",
            price: "70.000đ + phí vàng thêm"
        }
    ];

    return (
        <RootBox>
            <StyledAccordion>
                <StyledAccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel-warranty-content"
                    id="panel-warranty-header"
                >
                    <Typography
                        fontWeight="600"
                        fontSize={fontSizes.md}
                    >
                        CHÍNH SÁCH BẢO HÀNH
                    </Typography>
                </StyledAccordionSummary >
                <StyledAccordionDetails>
                    {/* Free Warranty Section */}
                    <Box>
                        <SectionTitle variant="body1">
                            1. DỊCH VỤ BẢO HÀNH MIỄN PHÍ
                        </SectionTitle>
                        <StyledTableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCellHead align="center" sx={{width: "60%"}}>
                                            Nội dung
                                        </StyledTableCellHead>
                                        <StyledTableCellHeadLast align="center" sx={{width: "40%"}}>
                                            Thời gian
                                        </StyledTableCellHeadLast>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {freeWarrantyData.map((row, index) => (
                                        <TableRow key={index}>
                                            <StyledTableCellBody>
                                                {row.content}
                                            </StyledTableCellBody>
                                            <StyledTableCellBodyLast>
                                                {row.time}
                                            </StyledTableCellBodyLast>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </StyledTableContainer>
                        <SubTableTitle>Bảng 1.1</SubTableTitle>
                    </Box>

                    {/* Paid Warranty Section */}
                    <Box mt={4}>
                        <SectionTitle variant="body1">
                            2. DỊCH VỤ BẢO HÀNH TÍNH PHÍ
                        </SectionTitle>
                        <StyledTableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCellHead align="center" sx={{width: "60%"}}>
                                            Nội dung bảo hành
                                        </StyledTableCellHead>
                                        <StyledTableCellHeadLast align="center" sx={{width: "40%"}}>
                                            Chi phí bảo hành
                                        </StyledTableCellHeadLast>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {paidWarrantyData.map((row, index) => (
                                        <TableRow key={index}>
                                            <StyledTableCellBody>
                                                {row.content.includes("chưa bao") ? (
                                                    <NotesText
                                                    >
                                                        {row.content.split("(")[0]}
                                                        <br/>
                                                        {`(${row.content.split("(")[1]}`}
                                                    </NotesText>
                                                ) : (
                                                    row.content
                                                )}
                                            </StyledTableCellBody>
                                            <StyledTableCellBodyLast>
                                                {row.price}
                                            </StyledTableCellBodyLast>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </StyledTableContainer>
                        <SubTableTitle>Bảng 2.1</SubTableTitle>
                    </Box>

                    {/* Notes Section */}
                    <Box mt={4} >
                        <NotesTitle>
                            LƯU Ý
                        </NotesTitle>
                        <Stack spacing={1} mt={1} mb={2}>
                            <NotesText>
                                - Thời gian sửa chữa: 3 - 5 ngày làm việc (Nhẫn thay đai, sản phẩm thêm chi tiết 7 ngày
                                làm việc)
                            </NotesText>
                            <NotesText>
                                - Đối với các hoạt động bảo hành, Hannie Jewelry áp dụng bảo hành điện tử bằng việc tra cứu
                                thông tin trên hệ<br/>
                                thống phần mềm
                            </NotesText>
                            <NotesText>
                                - Các dịch vụ bảo hành, sửa chữa sản phẩm (làm mới, chỉnh size,..) có thể giảm về trọng
                                lượng so với ban<br/>
                                đầu do bị hao mòn trong thời gian sử dụng và quy trình làm mới sản phẩm{" "}
                                <Box component="span" fontWeight={600} sx={{color: theme.palette.primary.main}}>
                                    (Hạn mức hao mòn: 6%)
                                </Box>
                            </NotesText>
                            <NotesText>
                                - Vàng là kim loại mềm, dễ bị xước và hỏng hình dạng khi đeo trong thời gian dài. Vui
                                lòng không đeo trang<br/>
                                sức trong lúc hoạt động mạnh và bê vác
                            </NotesText>
                            <NotesTextDisabled>
                                ---------------------------------------------------
                            </NotesTextDisabled>
                            <NotesText>
                                Trụ sở: 23/100 Đội Cấn, Ba Đình, Hà Nội, Việt Nam
                            </NotesText>
                            <Box sx={{display: "flex", alignItems: "center"}}>
                                <NotesText>
                                    Website:
                                </NotesText>
                                <NotesText sx={{ml: 0.5}}>
                                    https://hanniejewelry.vn
                                </NotesText>
                            </Box>
                            <Box sx={{display: "flex", alignItems: "center"}}>
                                <NotesText>
                                    FB Page:
                                </NotesText>
                                <NotesText sx={{ml: 0.5}}>
                                    www.facebook.com/hanniejewelry
                                </NotesText>
                            </Box>
                            <NotesText>
                                <Box component="span" >
                                    Hotline giải đáp thắc mắc:{" "}
                                </Box>
                                <Box component="span" fontWeight={600}>
                                    1900 633 428
                                </Box>
                            </NotesText>
                        </Stack>
                    </Box>
                </StyledAccordionDetails>
            </StyledAccordion>
        </RootBox>
    );
}
