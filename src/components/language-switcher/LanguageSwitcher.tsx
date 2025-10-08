import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {changeLanguage, getCurrentLanguage} from "../../i18n";
import i18next from "i18next";

const languageOptions = [
    { label: "Tiếng Việt", value: "vi", icon: "🇻🇳" },
    { label: "English", value: "en", icon: "🇬🇧" },
];

export default function LanguageSwitcher() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [currentLang, setCurrentLang] = useState(getCurrentLanguage());

    useEffect(() => {
        const handler = (lng: string) => setCurrentLang(lng);
        i18next.on("languageChanged", handler);
        return () => i18next.off("languageChanged", handler);
    }, []);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => setAnchorEl(null);

    const handleLanguageChange = (langValue: string) => {
        changeLanguage(langValue);
        handleClose();
    };

    const currentLanguage = languageOptions.find(
        (lang) => lang.value === currentLang
    );

    return (
        <Box>
            <Button
                id="language-button"
                aria-controls={open ? "language-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                    color: "inherit",
                    "&:hover": { backgroundColor: "transparent" },
                }}
            >
                {currentLanguage?.icon} {currentLanguage?.label}
            </Button>
            <Menu
                id="language-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "language-button",
                }}
            >
                {languageOptions.map((option) => (
                    <MenuItem
                        key={option.value}
                        onClick={() => handleLanguageChange(option.value)}
                        selected={option.value === currentLang}
                    >
                        {option.icon} {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}
