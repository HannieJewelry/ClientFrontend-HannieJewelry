"use client";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENT
import PersonOutline from "@mui/icons-material/PersonOutline";
// CUSTOM ICON COMPONENT
import ShoppingBagOutlined from "icons/ShoppingBagOutlined";
// GLOBAL CUSTOM HOOK
import Link from "next/link";
import { useAuthStore } from "../../../store/authStore";
import UserMenu from "../components/user-menu";
import {useCartQuery} from "../../../services/hooks/shopping_cart/useCartQuery";

// ==============================================================
interface Props {
  toggleDialog: () => void;
  toggleSidenav: () => void;
}
// ==============================================================

export default function LoginCartButtons({ toggleDialog, toggleSidenav }: Props) {
  const { isAuthenticated } = useAuthStore();
  const { data } = useCartQuery();
  const ICON_COLOR = { color: "grey.600" };
  const cartCount = data?.data?.items
      ? data.data.items.reduce((sum, item) => sum + item.quantity, 0)
      : 0;

  const handleUserIconClick = () => {
    if (!isAuthenticated) {
      toggleDialog();
    }
  };

  return (
      <div>
        {isAuthenticated ? (
            <UserMenu />
        ) : (
            <IconButton onClick={handleUserIconClick}>
              <PersonOutline sx={ICON_COLOR} />
            </IconButton>
        )}

        <Badge badgeContent={cartCount} color="primary">
          <IconButton component={Link} href="/cart">
            <ShoppingBagOutlined sx={ICON_COLOR} />
          </IconButton>
        </Badge>
      </div>
  );
}
