import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { H3 } from "components/Typography";

// Styled components for product card 11
export const CardRoot = styled(Card)({
  position: "relative",
  overflow: "hidden",
  borderRadius: "8px",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
    transform: "translateY(-5px)",
  }
});

export const PriceText = styled(H3)(({ theme }) => ({
  fontSize: 18,
  color: theme.palette.grey[600],
  textDecoration: "line-through"
}));


