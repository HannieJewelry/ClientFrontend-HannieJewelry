// ProductVariants.tsx
"use client";
import { Box } from "@mui/material";
import { FlexBox } from "components/flex-box";

export default function ProductVariants({ selectedColor, onChangeColor }) {
    return (
        <FlexBox mb={2} gap={1}>
            <Box
                onClick={() => onChangeColor("gray")}
                sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "linear-gradient(216.3deg, #8C8C8C -21.85%, #F2F2F2 41.39%, #8C8C8C 84.72%)",
                    border: selectedColor === "gray" ? "2px solid #fff" : "2px solid #ccc",
                    outline: selectedColor === "gray" ? "1px solid #555" : "none",
                    cursor: "pointer"
                }}
            />

            <Box
                onClick={() => onChangeColor("pink")}
                sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "linear-gradient(218.05deg, #FFA48F 4.74%, #FFFCFC 48.09%, #FFA48F 91.43%)",
                    border: selectedColor === "pink" ? "2px solid #fff" : "2px solid #ccc",
                    outline: selectedColor === "pink" ? "1px solid #555" : "none",
                    cursor: "pointer"
                }}
            />
        </FlexBox>
    );
}
