"use client";

import { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonOutline from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../../store/authStore';

export default function UserMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter();
    const { logout, user } = useAuthStore();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (path: string) => {
        router.push(path);
        handleClose();
    };

    const handleLogout = () => {
        logout();
        handleClose();
        router.push('/');
    };

    const ICON_COLOR = { color: "grey.600" };

    return (
        <>
            <Tooltip title="Account">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <PersonOutline sx={ICON_COLOR} />
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 1,
                    sx: {
                        minWidth: 200,
                        borderRadius: 1,
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
                        mt: 1.5,
                        '& .MuiMenuItem-root': {
                            fontSize: '0.875rem',
                            py: 1,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Box sx={{ px: 2, py: 1 }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                        ACCOUNT INFORMATION
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {user?.name || "Nguyễn Thanh Hậu"}
                    </Typography>
                </Box>

                <Divider />

                <MenuItem onClick={() => handleMenuItemClick('/profile')}>
                    <ListItemIcon>
                        <PersonOutline fontSize="small" />
                    </ListItemIcon>
                    My Profile
                </MenuItem>

                <MenuItem onClick={() => handleMenuItemClick('/address')}>
                    <ListItemIcon>
                        <LocationOnOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    Address List
                </MenuItem>

                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <LogoutOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}
