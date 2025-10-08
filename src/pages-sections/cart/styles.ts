// styles.ts
import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";

export const Wrapper = styled(Card)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  borderRadius: "4px",
  position: "relative",
  marginBottom: "1.5rem",
  boxShadow: "none",
  border: "1px solid #e0e0e0",
  backgroundColor: theme.palette.background.paper,
  transition: "border-color 0.3s ease",
  "&:hover": {
    borderColor: theme.palette.primary.light,
  },

  "@media only screen and (max-width: 425px)": {
    flexWrap: "wrap",
    img: { height: "auto", minWidth: "100%" }
  }
}));