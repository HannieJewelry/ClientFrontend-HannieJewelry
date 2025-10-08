// 'use client';
//
// import Box from '@mui/material/Box';
//
// type SoldChipProps = {
//     sold: number;
// };
//
// export default function SoldChip({ sold }: SoldChipProps) {
//     if (sold <= 0) return null;
//
//     return (
//         <Box
//             mt={1}
//             px={1.5}
//             py={0.5}
//             borderRadius="16px"
//             bgcolor="primary.main"
//             color="white"
//             fontSize="12px"
//             fontWeight={500}
//             display="inline-block"
//             width="fit-content"
//         >
//             Đã bán {sold}
//         </Box>
//     );
// }
"use client";

import Chip, { ChipProps } from "@mui/material/Chip";
import styled from "@mui/material/styles/styled";

// STYLED COMPONENT
const StyledChip = styled(Chip, {
    shouldForwardProp: (prop) => prop !== "shape"
})<{ shape: "rounded" | "square" }>(({ theme, shape }) => ({
    zIndex: 1,
    top: "10px",
    left: "10px",
    paddingLeft: 3,
    paddingRight: 3,
    fontWeight: 600,
    fontSize: "10px",
    position: "absolute",
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    ...(shape === "square" && { borderRadius: 0 })
}));

// ==============================================================
// ✅ Đã chuyển từ `discount` → `sold`
interface Props extends ChipProps {
    sold: number;
    shape?: "rounded" | "square";
}
// ==============================================================

export default function SoldChip({ sold = 0, shape = "rounded", ...props }: Props) {
    return sold > 0 ? (
        <StyledChip size="small" shape={shape} label={`Đã bán: ${sold}`} {...props} />
    ) : null;
}
