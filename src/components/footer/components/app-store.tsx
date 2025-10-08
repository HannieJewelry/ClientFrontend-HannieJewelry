"use client";

import Box from "@mui/material/Box";
// GLOBAL CUSTOM COMPONENT
import FlexBox from "components/flex-box/flex-box";
import { useTranslation } from "react-i18next";
// DATA
import { PLAY_APP_STORE_DATA } from "../data";

export default function AppStore() {
  const { t } = useTranslation();
  
  return (
    <FlexBox flexWrap="wrap" m={-1}>
      {PLAY_APP_STORE_DATA.map(({ icon: Icon, subtitle, title, url }) => (
        <a href={url} key={title} target="_blank" rel="noreferrer noopener">
          <Box
            m={1}
            gap={1}
            p="10px 16px"
            color="white"
            display="flex"
            bgcolor="#161d2b"
            borderRadius="5px"
            alignItems="center">
            <Icon />

            <div>
              <Box fontSize="8px" fontWeight="600" lineHeight="1">
                {t(subtitle)}
              </Box>

              <Box fontSize="14px" fontWeight="700">
                {t(title)}
              </Box>
            </div>
          </Box>
        </a>
      ))}
    </FlexBox>
  );
}
