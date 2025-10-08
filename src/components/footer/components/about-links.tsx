"use client";

import { Heading, StyledLink } from "../styles";
import { ABOUT_LINKS } from "../data";
import { useTranslation } from "react-i18next";

// ==============================================================
type Props = { isDark?: boolean };
// ==============================================================

export default function AboutLinks({ isDark }: Props) {
  const { t } = useTranslation();
  
  return (
    <>
      <Heading>{t("ABOUT_HANNIE_JEWELRY")}</Heading>

      <div>
        {ABOUT_LINKS.map((item, ind) => (
          <StyledLink isDark={isDark} href="/" key={ind}>
            {t(item)}
          </StyledLink>
        ))}
      </div>
    </>
  );
}
