"use client";

import {
    Box,
    Typography,
    Grid,
    Divider,
    useTheme,
    Avatar,
    Paper,
    useMediaQuery,
} from "@mui/material";

const items = [
    {
        img: "https://res.cloudinary.com/dvtcwbbck/image/upload/v1749188268/bi-quyet-cham-soc-va-bao-quan-trang-suc-luon-sang-bong-01_1__66deb6ff3f8e4ebdbd1399e31d526b39_1_czlbvu.svg",
        headline: "Tránh nước & hóa chất",
        text: "Không tiếp xúc với nước, chất tẩy rửa, mỹ phẩm thường xuyên để tránh sản phẩm nhanh bị oxi hóa.",
    },
    {
        img: "https://res.cloudinary.com/dvtcwbbck/image/upload/v1749188268/AD93A6D8-3442-4A38-A_1_tc3oad.svg",
        headline: "Tự làm sạch tại nhà",
        text: "Thường xuyên tự đánh bóng tại nhà sẽ giúp trang sức luôn sáng bóng như mới.",
    },
    {
        img: "https://res.cloudinary.com/dvtcwbbck/image/upload/v1749188268/e4d7d7b753c325e11ff3bd48cc129786_1_tpdjmx.svg",
        headline: "Bảo quản khô ráo",
        text: "Khi không đeo, bảo quản nơi khô ráo, tránh ánh nắng trực tiếp, nơi có nhiệt độ cao hoặc ẩm thấp.",
    },
    {
        img: "https://res.cloudinary.com/dvtcwbbck/image/upload/v1749188267/kpi-sale-kinh-doanh-trang-suc-min_1_iqzysy.svg",
        headline: "Vệ sinh định kỳ tại cửa hàng",
        text: "Từ 3-6 tháng, mang sản phẩm qua Hannie Jewelry để được làm sạch, bảo dưỡng miễn phí.",
    },
];

export default function CareZigzag() {
    const theme = useTheme();

    return (
        <>
            <Box >
                <Typography
                    // variant="subtitle1"
                    fontWeight={700}
                    align="center"
                    sx={{
                        fontSize: { xs: theme.typography.subtitle1.fontSize, sm: theme.typography.h6.fontSize },
                        color: theme.palette.primary?.main || theme.palette.secondary[600],
                        mb: { xs: 0, sm: 3 },
                        letterSpacing: 1,
                        textTransform: "uppercase"
                    }}
                >
                    Hướng dẫn bảo quản trang sức
                </Typography>
            </Box>
            <Box sx={{
                maxWidth: 950,
                mx: "auto",
                py: 2,
                px: { xs: 1, sm: 2 }
            }}>
                {items.map((item, idx) => (
                    <Grid
                        key={idx}
                        container
                        alignItems="center"
                        direction={idx % 2 === 0 ? "row" : "row-reverse"}
                        wrap="nowrap"
                        sx={{
                            mb: idx < items.length - 1 ? { xs: 3, sm: 5 } : 0,
                            flexDirection: { xs: idx % 2 === 0 ? "row" : "row-reverse", sm: idx % 2 === 0 ? "row" : "row-reverse" },
                        }}
                    >
                        {/* Step number */}
                        <Grid item xs="auto" sx={{
                            display: "flex",
                            justifyContent: idx % 2 === 0 ? "flex-start" : "flex-end",
                            alignItems: "center",
                            minWidth: 54,
                        }}>
                            <Avatar
                                sx={{
                                    bgcolor: theme.palette.primary?.main || theme.palette.secondary[500],
                                    fontWeight: 700,
                                    border: `2.5px solid ${theme.palette.primary?.main || theme.palette.secondary[600]}`,
                                }}
                            >
                                {idx + 1}
                            </Avatar>
                        </Grid>
                        {/* Illustration */}
                        <Grid item xs="auto" sx={{
                            textAlign: "center",
                            minWidth: 92,
                            maxWidth: 140,
                            mx: 1.5,
                        }}>
                            <Box
                                component="img"
                                src={item.img}
                                alt={item.headline}
                                sx={{
                                    width: { xs: 120, sm: 280 },
                                    // height: { xs: 54, sm: 80 },
                                    objectFit: "cover",
                                    borderRadius: 5,
                                    border: `2px solid ${theme.palette.grey[200]}`,
                                    mx: "auto",
                                }}
                            />
                        </Grid>
                        {/* Content */}
                        <Grid item xs zeroMinWidth>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 1, sm: 3 },
                                    borderRadius: 4,
                                    bgcolor: theme.palette.background.default,
                                    maxWidth: 520,
                                    mx: idx % 2 === 0 ? "0" : "auto",
                                    textAlign: "left",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    height: "100%",
                                }}
                            >
                                <Typography variant='h6'
                                            noWrap={false}
                                            sx={{
                                                color: theme.palette.primary?.main || theme.palette.secondary[600],
                                                fontWeight: 700,
                                                mb: 0.5,
                                                fontSize: { xs: 14, sm: 18 },
                                                letterSpacing: 0.5,
                                                lineHeight: 1.25,
                                            }}
                                >
                                    {item.headline}
                                </Typography>
                                <Typography  variant='subtitle2'
                                             sx={{
                                                 color: theme.palette.text.primary,
                                                 fontWeight: 400,
                                                 fontSize: { xs: 13, sm: 16 },
                                                 lineHeight: 1.75,
                                                 whiteSpace: "normal",
                                                 textOverflow: "ellipsis",
                                             }}
                                >
                                    {item.text}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                ))}
            </Box>
        </>
    );
}