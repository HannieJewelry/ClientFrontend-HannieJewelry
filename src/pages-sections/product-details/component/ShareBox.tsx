// import { Box, Typography, Stack, IconButton } from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import SendIcon from "@mui/icons-material/Send"; // đại diện Telegram

// export default function ShareBox({ sku = "DCN0460" }) {
//     return (
//         <Box
//             sx={{
//                 borderTop: "1px solid #eee",
//                 pt: 2,
//                 mt: 4,
//             }}
//         >
//             {/*<Typography fontSize="0.875rem" fontWeight={600} display="inline">*/}
//             {/*    SKU:&nbsp;*/}
//             {/*</Typography>*/}
//             {/*<Typography fontSize="0.875rem" color="grey.600" display="inline">*/}
//             {/*    {sku}*/}
//             {/*</Typography>*/}

//             <Box mt={2}>
//                 <Typography
//                     fontSize="0.875rem"
//                     fontWeight={600}
//                     display="inline"
//                     mr={1}
//                 >
//                     Share:
//                 </Typography>

//                 <Stack direction="row" spacing={1} component="span">
//                     <IconButton
//                         sx={{ backgroundColor: "#3b5998", color: "#fff" }}
//                         size="small"
//                     >
//                         <FacebookIcon fontSize="small" />
//                     </IconButton>
//                     <IconButton
//                         sx={{ backgroundColor: "#1da1f2", color: "#fff" }}
//                         size="small"
//                     >
//                         <TwitterIcon fontSize="small" />
//                     </IconButton>
//                     <IconButton
//                         sx={{ backgroundColor: "#bd081c", color: "#fff" }}
//                         size="small"
//                     >
//                         <PinterestIcon fontSize="small" />
//                     </IconButton>
//                     <IconButton
//                         sx={{ backgroundColor: "#0077b5", color: "#fff" }}
//                         size="small"
//                     >
//                         <LinkedInIcon fontSize="small" />
//                     </IconButton>
//                     <IconButton
//                         sx={{ backgroundColor: "#36a8e0", color: "#fff" }}
//                         size="small"
//                     >
//                         <SendIcon fontSize="small" />
//                     </IconButton>
//                 </Stack>
//             </Box>
//         </Box>
//     );
// }
import { Box, Typography, Stack, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import WarrantyPolicy from "../warranty-policy"; // đại diện Telegram

export default function ShareBox() {
    return (
        <Box
            sx={{
                borderTop: "1px solid #9CA3AF40",
                pt: 2,
                mt: 4,
            }}
        >
            <Stack direction="row" alignItems="center" spacing={0.5}>
                
                <Typography
                    variant="body1"
                    fontWeight={600}
                    color="#444"
                    sx={{
                        minWidth: 60, // Giữ chữ luôn thẳng hàng khi dịch
                        display: "flex",
                        alignItems: "center",
                        height: 40, // Bằng với icon button
                        userSelect: "none"
                    }}
                >
                    Share:
                </Typography>
                <Stack direction="row" spacing={1}>
                    <IconButton
                        sx={{
                            backgroundColor: "#3b5998",
                            color: "#fff",
                            width: 32,
                            height: 32,
                            "&:hover": { backgroundColor: "#334d84" },
                        }}
                    >
                        <FacebookIcon sx={{ fontSize: 22 }} />
                    </IconButton>
                    <IconButton
                        sx={{
                            backgroundColor: "#1da1f2",
                            color: "#fff",
                            width: 32,
                            height: 32,
                            "&:hover": { backgroundColor: "#1991da" },
                        }}
                    >
                        <TwitterIcon sx={{ fontSize: 22 }} />
                    </IconButton>
                    <IconButton
                        sx={{
                            backgroundColor: "#bd081c",
                            color: "#fff",
                            width: 32,
                            height: 32,
                            "&:hover": { backgroundColor: "#8c0615" },
                        }}
                    >
                        <PinterestIcon sx={{ fontSize: 22 }} />
                    </IconButton>
                    <IconButton
                        sx={{
                            backgroundColor: "#0077b5",
                            color: "#fff",
                            width: 32,
                            height: 32,
                            "&:hover": { backgroundColor: "#005983" },
                        }}
                    >
                        <LinkedInIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                    <IconButton
                        sx={{
                            backgroundColor: "#36a8e0",
                            color: "#fff",
                            width: 32,
                            height: 32,
                            "&:hover": { backgroundColor: "#2787b8" },
                        }}
                    >
                        <SendIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                </Stack>
            </Stack>

        </Box>
    );
}