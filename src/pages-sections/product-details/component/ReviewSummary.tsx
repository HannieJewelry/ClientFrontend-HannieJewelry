import { Box, Typography, Rating } from "@mui/material";

export default function ReviewSummary() {
    return (
        <Box display="flex" alignItems="center" gap={1.5} mb={2} flexWrap="wrap">
            {/* Rating Stars */}
            <Rating value={5} precision={0.1} readOnly size="small" sx={{ color: "#F6BA35" }} />

            {/* Score */}
            <Typography variant="body1" color="text.secondary" >
                (5.00)
            </Typography>

            {/* Divider */}
            <Typography variant="body2" color="grey.500" mx={1}>
                |
            </Typography>

            {/* Orders */}
            <Typography variant="body2"  color="primary">
                27 Đã bán
            </Typography>

            {/* Divider */}
            <Typography variant="body2" color="grey.500" mx={1}>
                |
            </Typography>

            {/* Wishlisted */}
            <Typography variant="body2" color="primary">
                2 Mong muốn
            </Typography>
        </Box>
    );
}
