"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import LogoSection from "./components/logo";
import AboutLinks from "./components/about-links";
import SocialLinks from "./components/social-links";
import CustomerCareLinks from "./components/customer-care-links";
// GLOBAL CUSTOM COMPONENTS
import { Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { Heading } from "./styles";
import CallEndOutlinedIcon from '@mui/icons-material/CallEndOutlined';
import LaPhoneAlt from "../../icons/footer/LaPhoneAlt";
import CilLocationPin from "../../icons/footer/CilLocationPin";
import MdiLightEmail from "../../icons/footer/MdiLightEmail";
import { useTranslation } from "react-i18next";
export default function Footer1() {
  const { t } = useTranslation();
  
  return (
    <Box component="footer" bgcolor="#222935" mb={{ sm: 0, xs: 7 }}>
      <Box component={Container} color="white" overflow="hidden" py={{ sm: 10, xs: 4 }}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <LogoSection />
          </Grid>

          {/* ABOUT US LINKS */}
          <Grid item lg={2} md={6} sm={6} xs={12}>
            <AboutLinks />
          </Grid>

          {/* CUSTOMER CARE LINKS */}
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <CustomerCareLinks />
          </Grid>

          {/* CONTACT & SOCIAL LINKS */}
          <Grid item lg={3} md={6} sm={12} xs={12}>
            {/* CONTACT INFORMATION */}
            <Heading>{t("WE_ARE_HERE")}</Heading>
            <Paragraph
                py={0.6}
                color="grey.500"
                style={{ display: "flex", alignItems: "center"}}
            >
              <CilLocationPin style={{ marginRight: "8px", fontSize: "20px" }} />
              {t("ADDRESS")}
            </Paragraph>
            <Paragraph
                py={0.6}
                color="grey.500"
                style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
            >
              <LaPhoneAlt style={{ marginRight: "8px", fontSize: "20px" }} />
              {t("PHONE")}
            </Paragraph>
            <Paragraph
                py={0.6}
                mb={2}

                color="grey.500"
                style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
            >
              <MdiLightEmail style={{ marginRight: "8px", fontSize: "20px" }} />
              {t("EMAIL")}
            </Paragraph>



            {/* SOCIAL LINKS WITH ICON */}
            <SocialLinks />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
