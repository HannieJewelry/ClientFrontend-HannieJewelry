"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useAuthStore } from "../../store/authStore";
import { useLogout } from "../../hooks/auth/useLogout";

const UserProfileButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user, isAuthenticated } = useAuthStore();
  const { logout } = useLogout();
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLogout = () => {
    handleClose();
    logout();
  };
  
  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <>
      <Button
        onClick={handleClick}
        startIcon={
          <Avatar
            sx={{ width: 32, height: 32 }}
            src="/assets/images/avatars/001-man.svg"
          />
        }
      >
        {user?.name || user?.phone || "Tài khoản"}
      </Button>
      
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Thông tin tài khoản</MenuItem>
        <MenuItem onClick={handleClose}>Đơn hàng của tôi</MenuItem>
        <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
      </Menu>
    </>
  );
};

export default UserProfileButton; 