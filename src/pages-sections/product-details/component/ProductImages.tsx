// ProductImages.tsx
"use client";
import { Box, Avatar } from "@mui/material";
import LazyImage from "components/LazyImage";
import { FlexBox } from "components/flex-box";

export default function ProductImages({ images, title, selectedImage, onSelect }) {
    return (
        <>
            <FlexBox justifyContent="center" mb={4}>
                <LazyImage
                    src={images[selectedImage]}
                    alt={title}
                    width={320}
                    height={320}
                    loading="eager"
                    sx={{ objectFit: "contain" }}
                />
            </FlexBox>

            <FlexBox justifyContent="center" gap={1}>
                {images.map((url, ind) => (
                    <Avatar
                        key={ind}
                        src={url}
                        variant="square"
                        onClick={() => onSelect(ind)}
                        sx={{
                            width: 64,
                            height: 64,
                            cursor: "pointer",
                            border: selectedImage === ind ? "2px solid #e91e63" : "1px solid #ccc"
                        }}
                    />
                ))}
            </FlexBox>
        </>
    );
}