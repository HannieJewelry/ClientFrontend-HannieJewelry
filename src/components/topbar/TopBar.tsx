"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { LanguageSwitcher } from "../language-switcher";

const StyledTopbar = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  height: 40,
  fontSize: 12,
  display: "flex",
  alignItems: "center",
  "& .topbarRight": {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
}));

export default function Topbar() {
  return (
    <StyledTopbar>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box></Box>
        <Box className="topbarRight">
          <LanguageSwitcher />
        </Box>
      </Container>
    </StyledTopbar>
  );
}