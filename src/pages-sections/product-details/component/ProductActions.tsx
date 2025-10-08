import { Box, Typography, IconButton, InputBase } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type Props = {
    qty: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onChangeQty: (val: number) => void;
    inStock?: boolean;
    storeHave?: number;
    inCart?: number;
};

export default function QuantityInput({
                                          qty,
                                          onIncrease,
                                          onDecrease,
                                          onChangeQty,
                                          inStock = true,
                                          storeHave = 0,
                                          inCart = 0,
                                      }: Props) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                border: "1px solid #ccc",
                borderRadius: "5px",
                p: "0px 12px",
                position: "relative",
                width: "100%",
                boxSizing: "border-box",
                gap: 1.5,
            }}
        >
            {/* Label */}
            <Typography
                sx={{
                    display: "inline-block",
                    fontSize: "0.7152rem",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    width: 80,
                }}
            >
                Số lượng:
            </Typography>

            {/* Minus */}
            <IconButton
                onClick={onDecrease}
                size="small"
                sx={{ p: 0.5 }}
            >
                <RemoveIcon sx={{ fontSize: 14 }} />
            </IconButton>

            {/* Input field */}
            <InputBase
                type="number"
                value={qty}
                onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val) && val > 0) {
                        onChangeQty(val);
                    }
                }}
                inputProps={{
                    min: 1,
                    style: {
                        textAlign: "center",
                    },
                }}
                sx={{
                    width: 40,
                    height: 35,
                    px: 0.5,
                }}
            />

            {/* Plus */}
            <IconButton
                onClick={onIncrease}
                size="small"
                sx={{ p: 0.5 }}
            >
                <AddIcon sx={{ fontSize: 14 }} />
            </IconButton>

            {/* Stock status */}
            <Box
                sx={{
                    position: "absolute",
                    right: 12,
                    top: "50%",
                    transform: "translateY(-50%)",
                }}
            >
                <Typography
                    sx={{
                        color: "#ED8383",
                        fontSize: "13px",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                    }}
                >
                    {inStock ? "Còn hàng" : "Hết hàng"}
                </Typography>
                {/* Hidden inputs */}
                <InputBase type="hidden" value={storeHave} sx={{ display: "none" }} />
                <InputBase type="hidden" value={inCart} sx={{ display: "none" }} />
            </Box>
        </Box>
    );
}
