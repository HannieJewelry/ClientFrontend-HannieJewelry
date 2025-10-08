"use client";

import { Heading, StyledLink } from "../styles";
import { CUSTOMER_CARE_LINKS } from "../data";
import { useTranslation } from "react-i18next";

// ==============================================================
type Props = { isDark?: boolean };
// ==============================================================

export default function CustomerCareLinks({ isDark }: Props) {
  const { t } = useTranslation();
  
  return (
    <>
      <Heading>{t("CUSTOMER_CARE")}</Heading>

      {CUSTOMER_CARE_LINKS.map((item, ind) => (
        <StyledLink isDark={isDark} href="/" key={ind}>
          {t(item)}
        </StyledLink>
      ))}
    </>
  );
}
