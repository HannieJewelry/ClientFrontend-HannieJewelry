"use client";

import { useState } from "react";
import {
    Box,
    Grid,
    Button,
} from "@mui/material";
import useCart from "hooks/useCart";
import ShareBox from "./component/ShareBox";
import JewelryProductInfo from "./component/JewelryProductInfo";
import ProductThumbsGallery from "./component/ProductThumbsGallery";
import WarrantyPolicy from "./warranty-policy";
import ExchangePolicy from "./exchange-policy";
import {Product} from "../../models/Product.model";

type Props = { product: Product };

export default function ProductIntro({ product }: Props) {
    console.log(product);

    return (
        
        <Box width="100%">

            <Grid container spacing={5}>
                <Grid item xs={12} md={5}>
                    <ProductThumbsGallery product={product} />
                </Grid>

                <Grid item xs={12} md={5}  >
                    <JewelryProductInfo product={product} />
                    <ShareBox/>
                    <WarrantyPolicy/>
                    <ExchangePolicy/>

                </Grid>
                <Grid item xs={12} md={2}>
                    <Box
                        sx={{
                            backgroundColor: "#f3f9ff",
                            borderRadius: "10px",
                            p: 2,
                            textAlign: "center",
                            border: "1px dashed #90caf9",
                        }}
                    >
                        <Box fontWeight={600} fontSize="0.875rem" color="#2196f3" mb={1}>
                            🤖 Không biết chọn?
                        </Box>
                        <Box fontSize="0.75rem" color="grey.700" mb={1}>
                            Trả lời 3 câu hỏi – hệ thống sẽ giúp bạn chọn được mẫu ưng ý.
                        </Box>
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{
                                borderColor: "#2196f3",
                                color: "#2196f3",
                                fontSize: "0.7rem",
                                textTransform: "none",
                                px: 2,
                                height: 28,
                            }}
                        >
                            Gợi ý cho tôi
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            
        </Box>
    );
}