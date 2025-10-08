import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import MenuItem from "@mui/material/MenuItem";
// MUI ICON COMPONENTS
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
// GLOBAL CUSTOM HOOKS
import useOverflowDetect from "hooks/useOverflowDetect";
// GLOBAL CUSTOM COMPONENTS
import { Span } from "components/Typography";
import BazaarCard from "components/BazaarCard";
// GLOBAL CUSTOM HOOK
import useSettings from "hooks/useSettings";
// i18n
import { useTranslation } from "react-i18next";
// STYLED COMPONENTS
import { ParentNav, ParentNavItem } from "../styles";
import { NavList } from "../types";

// ==============================================================
interface Props extends PropsWithChildren {
  nav: NavList;
}
// ==============================================================

export default function NavItemChild({ nav, children }: Props) {
  const pathname = usePathname();
  const { settings } = useSettings();
  const { checkOverflow, elementRef, isLeftOverflowing, isRightOverflowing } = useOverflowDetect();
  const { t } = useTranslation();

  const isActive = nav.child.flat().find((item) => item.url === pathname);

  // console.log(isLeftOverflowing, isRightOverflowing);

  return (
    <ParentNav minWidth={200} active={isActive ? 1 : 0} onMouseEnter={checkOverflow}>
      <MenuItem color="grey.700">
        <Span flex="1 1 0">{t(nav.title)}</Span>

        {settings.direction === "ltr" ? (
          <ArrowRight fontSize="small" />
        ) : (
          <ArrowLeft fontSize="small" />
        )}
      </MenuItem>

      <ParentNavItem
        ref={elementRef}
        left={isLeftOverflowing}
        right={isRightOverflowing}
        className="parent-nav-item">
        <BazaarCard elevation={3} sx={{ py: "0.5rem", minWidth: 180 }}>
          {children}
        </BazaarCard>
      </ParentNavItem>
    </ParentNav>
  );
}
