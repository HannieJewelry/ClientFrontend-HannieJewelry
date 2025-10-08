"use client";
import { Box } from "@mui/material";
import { FlexBox } from "components/flex-box";

export default function ProductGuarantees() {
    return (
        <FlexBox mt={3} gap={3} flexWrap="wrap">
            <div>🔁 Đổi miễn phí 72 giờ</div>
            <div>🚚 Giao hàng toàn quốc</div>
            <div>💳 Trả góp 0%</div>
            <div>🔒 Bảo hành trọn đời</div>
        </FlexBox>
    );
}
