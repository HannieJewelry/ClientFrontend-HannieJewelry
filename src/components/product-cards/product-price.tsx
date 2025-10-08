import Box from "@mui/material/Box";
// GLOBAL CUSTOM COMPONENTS
import FlexBox from "components/flex-box/flex-box";
import { Paragraph } from "components/Typography";
// CUSTOM UTILS LIBRARY FUNCTIONS
import { currency } from "lib";

// ==============================================================
type Props = {
  price: number;
  compareAtPrice?: number;
};
// ==============================================================

export default function ProductPrice({ price, compareAtPrice }: Props) {
  const hasDiscount = compareAtPrice && compareAtPrice > price;

  return (
    <FlexBox gap={1} mt={0.5} alignItems="center" justifyContent="center" textAlign="center">
      {/* Current Price */}
      <Paragraph
        fontWeight="600"
        color="#ed8383"
        sx={{ fontFamily: "'Quicksand', sans-serif" }}
      >
        {currency(price)}
      </Paragraph>

      {/* Original Price with Strikethrough if on discount */}
      {hasDiscount && (
        <Box
          component="del"
          fontWeight="600"
          color="#ed8383"
          sx={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          {currency(compareAtPrice)}
        </Box>
      )}
    </FlexBox>
  );
}
