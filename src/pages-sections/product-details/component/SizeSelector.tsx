"use client";
import { Box, Typography, useTheme } from "@mui/material";
import { FlexBox } from "components/flex-box";
import { fontSizes } from "../../../theme/sizes";

type SizeSelectorProps = {
    sizes: string[];
    selectedSize: string;
    onChangeSize: (size: string) => void;
    showAll: boolean;
    onToggle: () => void;
};


export default function SizeSelector({
                                         sizes,
                                         selectedSize,
                                         onChangeSize,
                                         showAll,
                                         onToggle,
                                     }: SizeSelectorProps) {
    const theme = useTheme();

    return (
        <>
            <FlexBox mb={1} gap={1} flexWrap="wrap">
                {sizes.map((size) => (
                    <Box
                        key={size}
                        onClick={() => onChangeSize(size)}
                        sx={{
                            width: 28,
                            height: 28,
                            borderRadius: "3px",
                            border: "1px solid #ccc",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: fontSizes.xs,
                            fontWeight: 500,
                            cursor: "pointer",
                            backgroundColor: selectedSize === size ? "#D9D9D9" : "#fff",
                            transition: "background 0.18s",
                            "&:hover": {
                                backgroundColor: selectedSize === size ? "#c6c6c6" : "#f5f5f5",
                            },
                        }}
                    >
                        {size}
                    </Box>
                ))}
            </FlexBox>

        </>
    );
}
