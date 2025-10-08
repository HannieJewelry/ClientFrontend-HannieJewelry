import Link from "next/link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// MUI ICON COMPONENTS
import Add from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";
import Remove from "@mui/icons-material/Remove";
// GLOBAL CUSTOM COMPONENTS
import Image from "components/BazaarImage";
import { Span } from "components/Typography";
import { FlexBox } from "components/flex-box";
// GLOBAL CUSTOM HOOK
import useCart from "hooks/useCart";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";
// STYLED COMPONENT
import { Wrapper } from "./styles";
import {Typography} from "@mui/material";
import {useChangeCart} from "../../services/hooks/shopping_cart/useCartMutation";
import {useCartQuery} from "../../services/hooks/shopping_cart/useCartQuery";
import {enqueueSnackbar} from "notistack";

// =========================================================
type Props = {
  qty: number;
  name: string;
  slug: string;
  price: number;
  imgUrl?: string;
  id: string | number;
  line: number;
};
// =========================================================

export default function CartItem({ id, name, qty, price, imgUrl, slug, line }: Props) {
  const { mutate: changeCart, isPending } = useChangeCart();
  const { refetch } = useCartQuery();

  const handleCartAmountChange = (newQty: number) => {

    changeCart(
        { line: String(line), quantity: newQty },
        {
          onSuccess: () => refetch(),
          onError: (err: any) => {
            // Lấy message từ backend, fallback nếu không có
            const message = err?.response?.data?.message
            enqueueSnackbar(message, { variant: "warning" });
          },
        }
    );
  };

  // Disable giảm số lượng về <1 hoặc disable khi pending
  const handleRemove = () => handleCartAmountChange(0);

  return (
      <Wrapper>
        <Image
            alt={name}
            width={140}
            height={140}
            display="block"
            src={imgUrl || "/assets/images/products/iphone-xi.png"}
        />

        {/* DELETE BUTTON */}
        <IconButton
            size="small"
            onClick={handleRemove}
            sx={{ position: "absolute", right: 15, top: 15 }}>
          <Close fontSize="small" />
        </IconButton>

        <FlexBox p={2} rowGap={2} width="100%" flexDirection="column">
          <Link href={`/products/${slug}`}>
            <Typography variant="subtitle1" fontWeight={600} noWrap>
              {name}
            </Typography>
          </Link>
          {/* PRODUCT PRICE SECTION */}
          <FlexBox gap={1} flexWrap="wrap" alignItems="center">
            <Span color="grey.600">
              {currency(price)} x {qty}
            </Span>
            <Span fontWeight={600} color="primary.main">
              {currency(price * qty)}
            </Span>
          </FlexBox>
          {/* PRODUCT QUANTITY INC/DEC BUTTONS */}
          <FlexBox alignItems="center">
            <Button
                color="primary"
                sx={{ p: "5px" }}
                variant="outlined"
                disabled={qty === 1 || isPending}
                onClick={() => handleCartAmountChange(qty - 1)}>
              <Remove fontSize="small" />
            </Button>
            <Span mx={1} fontWeight={600} fontSize={15}>
              {qty}
            </Span>
            <Button
                color="primary"
                sx={{ p: "5px" }}
                variant="outlined"
                onClick={() => handleCartAmountChange(qty + 1)}
                disabled={isPending}
            >
              <Add fontSize="small" />
            </Button>
          </FlexBox>
        </FlexBox>
      </Wrapper>
  );
}
