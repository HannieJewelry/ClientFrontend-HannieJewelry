// "use client";
// import {
//     Typography,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableRow,
//     List,
//     ListItem,
//     ListItemIcon,
//     ListItemText,
//     Divider,
// } from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import CareZigzag from "./component/CareZigzag";
// import { styled } from "@mui/material/styles";
//
// // Styled components
// const Root = styled("div")(({ theme }) => ({
//     margin: "0 auto",
//     paddingLeft: theme.spacing(1),
//     paddingRight: theme.spacing(2),
//     maxWidth: 1280,
// }));
//
// const GridWrap = styled("div")(({ theme }) => ({
//     display: "flex",
//     flexWrap: "wrap",
//     [theme.breakpoints.down("md")]: {
//         flexDirection: "column",
//     },
// }));
//
// const LeftCol = styled("div")(({ theme }) => ({
//     flex: "0 0 58%",
//     [theme.breakpoints.down("md")]: {
//         flex: "1 1 100%",
//         maxWidth: "100%",
//         order: 1,  // Đổi thành 1 (đứng trên)
//         marginBottom: 0,
//     },
//     [theme.breakpoints.up("sm")]: {
//         marginBottom: theme.spacing(2),
//     },
// }));
//
// const RightCol = styled("div")(({ theme }) => ({
//     flex: "0 0 38%",
//     [theme.breakpoints.down("md")]: {
//         flex: "1 1 100%",
//         maxWidth: "100%",
//         order: 2,  // Đổi thành 2 (đứng dưới)
//     },
//     [theme.breakpoints.up("sm")]: {
//         marginLeft: theme.spacing(4),
//     },
// }));
//
//
//
// const StyledList = styled(List)(({ theme }) => ({
//     marginTop: theme.spacing(1),
//
// }));
//
// const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
//     borderRadius: theme.spacing(1),
//     background: "none",
//     boxShadow: "none",
//     border: `1px solid ${theme.palette.grey[200]}`,
// }));
//
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     fontWeight: 500,
//     color: theme.palette.grey[800],
//     background: "none",
//     border: 0,
//     paddingTop: theme.spacing(1.1),
//     paddingBottom: theme.spacing(1.1),
// }));
//
// export default function ProductDescription() {
//     const data = [
//         {
//             label: "VỀ SẢN PHẨM",
//             desc: "Hannie Jewelry cam kết chất liệu và kiểu dáng của sản phẩm giống 100% hình ảnh và mô tả",
//         },
//         {
//             label: "VỀ GIÁ CẢ",
//             desc: "Thông tin về giá sản phẩm minh bạch rõ ràng",
//         },
//         {
//             label: "VỀ DỊCH VỤ",
//             desc: "Đội ngũ tư vấn viên nhiệt tình, chu đáo, sẵn sàng giải đáp thắc mắc của khách hàng trong thời gian nhanh nhất",
//         },
//         {
//             label: "VỀ THỜI GIAN CHUẨN BỊ HÀNG",
//             desc: "Hàng có sẵn, thời gian chuẩn bị tối ưu nhất",
//         },
//     ];
//
//     return (
//         <Root >
//             <GridWrap>
//                 <LeftCol>
//                     <Typography color="text.primary" >
//                         Sở hữu thiết kế thanh lịch, hiện đại, nhẫn vàng 18K đính kim cương thiên nhiên là lựa chọn hoàn hảo cho mọi dịp quan trọng. Mỗi sản phẩm được chế tác tỉ mỉ bởi nghệ nhân giàu kinh nghiệm, mang đến sự tinh xảo, sang trọng và khẳng định đẳng cấp người đeo.
//                     </Typography>
//
//                     <StyledList>
//                         {data.map((item, idx) => (
//                             <div key={item.label}>
//                                 <ListItem alignItems="flex-start">
//                                     <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
//                                         <FavoriteIcon color="error" fontSize="small" />
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary={
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 700,
//                                                     letterSpacing: 1,
//                                                     textTransform: "uppercase",
//                                                     mb: 0.5,
//                                                     color: "primary.main",
//                                                 }}
//                                             >
//                                                 {item.label}
//                                             </Typography>
//                                         }
//                                         secondary={
//                                             <Typography sx={{ color: "#222" }}>
//                                                 {item.desc}
//                                             </Typography>
//                                         }
//                                     />
//                                 </ListItem>
//                             </div>
//                         ))}
//                     </StyledList>
//                 </LeftCol>
//
//                 {/* Cột bảng thông tin bên phải */}
//                 <RightCol>
//                     <StyledTableContainer>
//                         <Table>
//                             <TableBody>
//                                 {[
//                                     ["Tên sản phẩm", "Nhẫn vàng 18K đính kim cương"],
//                                     ["Chất liệu", "Vàng 18K"],
//                                     ["Loại đá", "Kim cương thiên nhiên"],
//                                     ["Trọng lượng", "1.5 chỉ (~5.625g)"],
//                                     ["Kích thước", "Tùy chọn size"],
//                                     ["Màu sắc", "Vàng, trắng, hồng"],
//                                     ["Thương hiệu", "DOJI"],
//                                     ["Bảo hành", "12 tháng"],
//                                     ["Chứng nhận", "Có (giấy kiểm định)"],
//                                     ["Xuất xứ", "Việt Nam"],
//                                 ].map(([label, value], idx, arr) => (
//                                     <TableRow
//                                         key={label}
//                                         sx={{
//                                             "& td, & th": {
//                                                 border: 0,
//                                                 borderBottom:
//                                                     idx === arr.length - 1
//                                                         ? "none"
//                                                         : `1px solid #e0e0e0`,
//                                                 py: 1.1,
//                                             },
//                                         }}
//                                     >
//                                         <StyledTableCell sx={{ width: "38%" }}>{label}</StyledTableCell>
//                                         <StyledTableCell>{value}</StyledTableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </StyledTableContainer>
//                 </RightCol>
//             </GridWrap>
//
//             <CareZigzag />
//         </Root>
//     );
// }
"use client";
import {
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    useMediaQuery,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CareZigzag from "./component/CareZigzag";
import { styled, useTheme } from "@mui/material/styles";
import {useProductDetail} from "../../services/hooks/product/useProducts";

// Styled components
const Root = styled("div")(({ theme }) => ({
    margin: "0 auto",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(2),
    maxWidth: 1280,
    background: theme.palette.background.default,
}));

const GridWrap = styled("div")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const LeftCol = styled("div")(({ theme }) => ({
    flex: "0 0 58%",
    [theme.breakpoints.down("md")]: {
        flex: "1 1 100%",
        maxWidth: "100%",
        marginBottom: theme.spacing(2),
    },
}));

const RightCol = styled("div")(({ theme }) => ({
    flex: "0 0 38%",
    [theme.breakpoints.down("md")]: {
        display: "none", // Ẩn hoàn toàn khi mobile
    },
    [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(4),
    },
}));

const StyledList = styled(List)(({ theme }) => ({
    marginTop: theme.spacing(1),
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    borderRadius: theme.spacing(1),
    background: "none",
    boxShadow: "none",
    border: `1px solid ${theme.palette.grey[200]}`,
    // marginBottom: theme.spacing(30),
    [theme.breakpoints.up("md")]: {
        marginBottom: 30,
    }
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontWeight: 500,
    color: theme.palette.grey[800],
    background: "none",
    border: 0,
    paddingTop: theme.spacing(1.1),
    paddingBottom: theme.spacing(1.1),
}));
interface ProductDescriptionProps {
    handle?: string;
}
export default function ProductDescription({ handle }: ProductDescriptionProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { data: product, isLoading } = useProductDetail(handle);
    const data = [
        {
            label: "VỀ SẢN PHẨM",
            desc: "Hannie Jewelry cam kết chất liệu và kiểu dáng của sản phẩm giống 100% hình ảnh và mô tả",
        },
        {
            label: "VỀ GIÁ CẢ",
            desc: "Thông tin về giá sản phẩm minh bạch rõ ràng",
        },
        {
            label: "VỀ DỊCH VỤ",
            desc: "Đội ngũ tư vấn viên nhiệt tình, chu đáo, sẵn sàng giải đáp thắc mắc của khách hàng trong thời gian nhanh nhất",
        },
        {
            label: "VỀ THỜI GIAN CHUẨN BỊ HÀNG",
            desc: "Hàng có sẵn, thời gian chuẩn bị tối ưu nhất",
        },
    ];

    const table = (
        <StyledTableContainer>
            <Table>
                <TableBody>
                    {[
                        ["Tên sản phẩm", "Nhẫn vàng 18K đính kim cương"],
                        ["Chất liệu", "Vàng 18K"],
                        ["Loại đá", "Kim cương thiên nhiên"],
                        ["Trọng lượng", "1.5 chỉ (~5.625g)"],
                        ["Kích thước", "Tùy chọn size"],
                        ["Màu sắc", "Vàng, trắng, hồng"],
                        ["Thương hiệu", "DOJI"],
                        ["Bảo hành", "12 tháng"],
                        ["Chứng nhận", "Có (giấy kiểm định)"],
                        ["Xuất xứ", "Việt Nam"],
                    ].map(([label, value], idx, arr) => (
                        <TableRow
                            key={label}
                            sx={{
                                "& td, & th": {
                                    border: 0,
                                    borderBottom:
                                        idx === arr.length - 1
                                            ? "none"
                                            : `1px solid #e0e0e0`,
                                    py: 1.1,
                                },
                            }}
                        >
                            <StyledTableCell sx={{ width: "38%" }}>{label}</StyledTableCell>
                            <StyledTableCell>{value}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTableContainer>
    );

    return (
        <Root>
            <GridWrap>
                <LeftCol>
                    <Typography color="text.primary" sx={{ mb: 2 }}>
                        Sở hữu thiết kế thanh lịch, hiện đại, nhẫn vàng 18K đính kim cương thiên nhiên là lựa chọn hoàn hảo cho mọi dịp quan trọng. Mỗi sản phẩm được chế tác tỉ mỉ bởi nghệ nhân giàu kinh nghiệm, mang đến sự tinh xảo, sang trọng và khẳng định đẳng cấp người đeo.
                    </Typography>

                    {/* Hiện table ở đây khi mobile */}
                    {isMobile && table}

                    <StyledList>
                        {data.map((item, idx) => (
                            <div key={item.label}>
                                <ListItem alignItems="flex-start">
                                    <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                                        <FavoriteIcon color="error" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    letterSpacing: 1,
                                                    textTransform: "uppercase",
                                                    mb: 0.5,
                                                    color: "primary.main",
                                                }}
                                            >
                                                {item.label}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography sx={{ color: "#222" }}>
                                                {item.desc}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                {idx < data.length - 1 && (
                                    <Divider sx={{ opacity: 0.2, my: 0.5 }} />
                                )}
                            </div>
                        ))}
                    </StyledList>
                </LeftCol>

                {/* Bảng thông tin chỉ hiện ở desktop */}
                <RightCol>
                    {table}
                </RightCol>
            </GridWrap>

            <CareZigzag />
        </Root>
    );
}
