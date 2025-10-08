import Link from "next/link";
import { ReactNode } from "react";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx";
import useHeader from "./hooks/use-header";
import FlexBox from "components/flex-box/flex-box";
import MobileHeader from "./components/mobile-header";
import DialogDrawer from "./components/dialog-drawer";
import LoginCartButtons from "./components/login-cart-buttons";
import { HeaderWrapper, StyledContainer } from "./styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import SearchWithSuggestions from "./components/search-with-suggestions";

// ==============================================================
interface Props {
    isFixed?: boolean;
    className?: string;
    midSlot: ReactNode;
}
// ==============================================================

export default function Header({ isFixed, className, midSlot }: Props) {
    const { t } = useTranslation();
    const theme = useTheme();
    const downMd = useMediaQuery(theme.breakpoints.down(1150));
    const { dialogOpen, sidenavOpen, toggleDialog, toggleSidenav } = useHeader();

    const CONTENT_FOR_LARGE_DEVICE = (
        <FlexBox alignItems="center" justifyContent="space-between" width="100%" position="relative">
            {/* Left - Hệ thống cửa hàng + Tìm kiếm */}
            <FlexBox alignItems="center" gap={2}>
                {/* Ô tìm kiếm với gợi ý */}
                <SearchWithSuggestions />
            </FlexBox>

            {/* Center - Logo */}
            <FlexBox
                justifyContent="center"
                alignItems="center"
                sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                <Link href="/">
                    <Image
                        src={require("../../../public/assets/images/logo3.jpg")}
                        alt="logo"
                        height={50}
                    />
                </Link>
            </FlexBox>

            {/* Right - Login + Cart */}
            <FlexBox flex={1} justifyContent="flex-end">
                <LoginCartButtons toggleDialog={toggleDialog} toggleSidenav={toggleSidenav} />
            </FlexBox>

            {/* Dialog & Cart Side Drawer */}
            <DialogDrawer
                dialogOpen={dialogOpen}
                sidenavOpen={sidenavOpen}
                toggleDialog={toggleDialog}
                toggleSidenav={toggleSidenav}
            />
        </FlexBox>
    );

    return (
        <HeaderWrapper className={clsx(className)}>
            <StyledContainer>
                {downMd ? <MobileHeader /> : CONTENT_FOR_LARGE_DEVICE}
            </StyledContainer>
        </HeaderWrapper>
    );
}
