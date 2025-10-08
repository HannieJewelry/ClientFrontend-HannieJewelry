import MenuItem from "@mui/material/MenuItem";
// COMPONENT ICON CỦA MUI
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

// COMPONENT TÙY CHỈNH DÙNG TOÀN CỤC
import { NavLink } from "components/nav-link";
import { FlexBox } from "components/flex-box";
import BazaarCard from "components/BazaarCard";

// COMPONENT TÙY CHỈNH CỤC BỘ
import MegaMenu from "../mega-menu";
import NavItemChild from "./nav-item-child";
import CategoryBasedMenu from "../category-based-menu";

// DỮ LIỆU MENU
import navigation from "data/navbarNavigation";

// i18n
import { useTranslation } from "react-i18next";

// CÁC THÀNH PHẦN ĐƯỢC STYLED
import { StyledNavLink, NAV_LINK_STYLES, ChildNavListWrapper } from "../styles";

// KIỂU DỮ LIỆU
import { NavList } from "../types";

export default function NavigationList() {
  // Sử dụng hook useTranslation để dịch các khóa ngôn ngữ
  const { t } = useTranslation();
  
  // Hàm đệ quy để hiển thị các menu cấp con (nếu có)
  const renderNestedNav = (list: any[] = [], isRoot = false) => {
    return list.map((nav: NavList) => {
      if (isRoot) {
        // Nếu là menu cấp gốc và có mega menu thì hiển thị MegaMenu
        if (nav.megaMenu) {
          return <MegaMenu key={nav.title} title={t(nav.title)} menuList={nav.child as any} />;
        }

        // Nếu có mega menu có phân nhóm (có con), hiển thị dạng category-based
        if (nav.megaMenuWithSub) {
          return (
              <CategoryBasedMenu key={nav.title} title={t(nav.title)} menuList={nav.child as any} />
          );
        }

        // Nếu là một đường dẫn đơn lẻ (link), hiển thị như nav link thường
        if (nav.url) {
          return (
              <StyledNavLink href={nav.url} key={nav.title}>
                {t(nav.title)}
              </StyledNavLink>
          );
        }

        // Nếu là mục cha có các menu con
        if (nav.child) {
          return (
              <FlexBox
                  key={nav.title}
                  alignItems="center"
                  position="relative"
                  flexDirection="column"
                  sx={{
                    // Hover để hiện menu con
                    "&:hover": {
                      "& > .child-nav-item": {
                        display: "block",
                      },
                    },
                  }}>
                {/* Phần hiển thị tiêu đề + icon chỉ xuống */}
                <FlexBox alignItems="flex-end" gap={0.3} sx={NAV_LINK_STYLES}>
                  {nav.title}
                  <KeyboardArrowDown sx={{ color: "grey.500", fontSize: "1.1rem" }} />
                </FlexBox>

                {/* Phần menu con được ẩn mặc định và chỉ hiện khi hover */}
                <ChildNavListWrapper className="child-nav-item">
                  <BazaarCard elevation={3} sx={{ mt: 2.5, py: 1, minWidth: 100 }}>
                    {renderNestedNav(nav.child)} {/* Đệ quy hiển thị menu con */}
                  </BazaarCard>
                </ChildNavListWrapper>
              </FlexBox>
          );
        }
      } else {
        // Nếu không phải menu cấp gốc (tức là menu con)
        if (nav.url) {
          return (
              // Nếu có link, hiển thị như một mục trong dropdown
              <NavLink href={nav.url} key={nav.title}>
                <MenuItem sx={{ whiteSpace: "nowrap" }}>{nav.title}</MenuItem>
              </NavLink>
          );
        }

        // Nếu là mục cha có cấp con, hiển thị qua NavItemChild
        if (nav.child) {
          return (
              <NavItemChild nav={nav} key={nav.title}>
                {renderNestedNav(nav.child)}
              </NavItemChild>
          );
        }
      }
    });
  };

  // Render toàn bộ navigation root
  return <FlexBox gap={4}>{renderNestedNav(navigation, true)}</FlexBox>;
}
