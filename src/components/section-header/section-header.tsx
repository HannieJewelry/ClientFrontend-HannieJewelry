"use client";

import Link from "next/link";
import { ReactNode } from "react";
// MUI ICON COMPONENTS
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
// LOCAL CUSTOM COMPONENTS
import {H2, H3, H4} from "../Typography";
import { FlexBetween, FlexBox } from "../flex-box";
// GLOBAL CUSTOM HOOK
import useSettings from "hooks/useSettings";
import Box from "@mui/material/Box";

// ===================================================
interface Props {
  title: string;
  icon?: ReactNode;
  seeMoreLink?: string;
}
// ===================================================

export default function SectionHeader({ title, seeMoreLink, icon }: Props) {
  const { settings } = useSettings();

  return (
    <FlexBetween mb={3}>
      <FlexBox alignItems="center" gap={1}>
        {icon ?? null}
          <Box
              // sx={{
              //     borderBottom: "2px solid",
              //     borderColor: "#f00",
              //     display: "inline-block",
              //     paddingBottom: "5px", // Adjust the value to control the spacing
              // }}
          >
              <H4 fontSize={18} lineHeight={1}>{title}</H4>
          </Box>
      </FlexBox>

      {seeMoreLink ? (
        <Link href={seeMoreLink}>
          <FlexBox alignItems="center" color="grey.600">
              View All
            {settings.direction === "ltr" ? (
              <ArrowRight fontSize="small" color="inherit" />
            ) : (
              <ArrowLeft fontSize="small" color="inherit" />
            )}
          </FlexBox>
        </Link>
      ) : null}
    </FlexBetween>
  );
}
