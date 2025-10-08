'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    Box,
    Grid,
    Container,
    MenuItem,
    Paper,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useFloating, offset, shift, flip, autoUpdate } from '@floating-ui/react-dom';

export default function NavbarList2() {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLElement | null>(null);

    const { x, y, strategy, refs, update } = useFloating({
        placement: 'bottom',
        middleware: [offset(10), flip(), shift()],
        whileElementsMounted: autoUpdate,
    });

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        ref.current = event.currentTarget;
        refs.setReference(event.currentTarget);
        setOpen(true);
        update();
    };

    const handleCloseMenu = () => {
        setOpen(false);
    };

    return (
        <AppBar position="static" color="inherit" elevation={1}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    {/* LOGO */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Image 
                            src="https://flowbite.com/docs/images/logo.svg" 
                            alt="Logo" 
                            width={32} 
                            height={32} 
                            style={{ height: 'auto' }}
                        />
                        <Typography variant="h6" noWrap sx={{ fontWeight: 600 }}>
                            Flowbite
                        </Typography>
                    </Box>

                    {/* Desktop Nav */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
                        <Button color="primary" variant="text">Home</Button>

                        {/* Mega Menu Trigger */}
                        <Button
                            onMouseEnter={handleOpenMenu}
                            endIcon={<ExpandMoreIcon />}
                            sx={{ fontWeight: 500 }}
                        >
                            Company
                        </Button>

                        {/* Mega Menu with Floating UI */}
                        {open && (
                            <Paper
                                ref={refs.setFloating}
                                onMouseLeave={handleCloseMenu}
                                style={{
                                    position: strategy,
                                    top: y ?? 0,
                                    left: x ?? 0,
                                    zIndex: 1300,
                                }}
                                sx={{
                                    p: 2,
                                    maxWidth: 1200,
                                    width: '100%',
                                    borderRadius: 0,
                                    boxShadow: 3,
                                }}
                            >
                                <Grid container spacing={4} px={2} py={1} justifyContent="center">
                                    {[
                                        {
                                            title: 'TRANG SỨC',
                                            items: ['Bông tai', 'Nhẫn nữ', 'Mặt Dây Chuyền', 'Bộ Trang Sức', 'Dây Chuyền', 'Lắc tay', 'Lắc Chân', 'Charm Vàng 14K'],
                                        },
                                        {
                                            title: 'TRANG SỨC CÔ DÂU',
                                            items: ['Bông Tai Cô Dâu', 'Dây Chuyền Cô Dâu', 'Bộ Trang Sức Cô Dâu'],
                                        },
                                        {
                                            title: 'NHẪN CƯỚI',
                                            items: ['Nhẫn Cưới Dưới 7 Triệu', 'Nhẫn Cưới 7 Triệu - 10 Triệu', 'Nhẫn Cưới 10 Triệu - 15 Triệu', 'Nhẫn Cưới 15 Triệu - 20 Triệu', 'Nhẫn Cưới Từ 20 Triệu'],
                                        },
                                        {
                                            title: 'NHẪN CẦU HÔN',
                                            items: ['Nhẫn Cầu Hôn Dưới 5 Triệu', 'Nhẫn Cầu Hôn 5 Triệu - 10 Triệu', 'Nhẫn Cầu Hôn 10 Triệu - 20 Triệu', 'Nhẫn Cầu Hôn Từ 20 Triệu'],
                                        },
                                        {
                                            title: 'QUÀ TẶNG',
                                            items: ['Quà Sinh Nhật', 'Lễ Kỉ Niệm', 'Quà Cưới'],
                                        },
                                        {
                                            title: 'VÀNG 24K',
                                            items: ['Trang sức 24K', 'Vàng Miếng', 'Nhẫn 24K'],
                                        },
                                    ].map((column) => (
                                        <Grid item xs={12} sm={6} md={2} key={column.title}>
                                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                                {column.title}
                                            </Typography>
                                            {column.items.map((item) => (
                                                <MenuItem key={item} onClick={handleCloseMenu} sx={{ py: 0.5 }}>
                                                    {item}
                                                </MenuItem>
                                            ))}
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        )}

                        <Button>Team</Button>
                    </Box>

                    {/* Right side */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Button variant="outlined">Login</Button>
                        <Button variant="contained">Sign Up</Button>
                    </Box>

                    {/* Mobile Menu Icon */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
