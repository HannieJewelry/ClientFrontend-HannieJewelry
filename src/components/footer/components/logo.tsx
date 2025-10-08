"use client";

import Link from "next/link";
import AppStore from "./app-store";
import Image from "components/BazaarImage";
import { Paragraph } from "components/Typography";
import { useTranslation } from "react-i18next";

export default function LogoSection() {
  const { t } = useTranslation();
  
  return (
    <>
      <Link href="/">
        <Image mb={2.5} height={70} src="/assets/images/logo4.png" alt="logo" />
      </Link>

      <Paragraph mb={2.5} color="grey.500">
        {t("COPYRIGHT_TEXT")}
      </Paragraph>

      {/*<AppStore />*/}
    </>
  );
}
