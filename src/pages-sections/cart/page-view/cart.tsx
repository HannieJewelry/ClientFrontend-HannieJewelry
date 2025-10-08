"use client";

import Grid from "@mui/material/Grid";
// GLOBAL CUSTOM HOOK
import useCart from "hooks/useCart";
// LOCAL CUSTOM COMPONENTS
import CartItem from "../cart-item";
import CheckoutForm from "../checkout-form";
import Container from "@mui/material/Container";
import {useCartQuery} from "../../../services/hooks/shopping_cart/useCartQuery";
import {Box, Stack, Typography} from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import {useTranslation} from "react-i18next";

export default function CartPageView() {
  const { data, isLoading, error } = useCartQuery();
  const { t } = useTranslation();
  const cart = data?.data;
  if (isLoading) return null;
  if (error) return null;
  return (
      <Container maxWidth="lg">
    <Grid container spacing={3}>
      {/* CART PRODUCT LIST */}
      <Grid item md={8} xs={12}>
        {cart?.items && cart.items.length > 0 ? (
            cart.items.map((item, index) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    line={index + 1}
                    qty={item.qty ?? item.quantity}
                    name={item.product_title ?? item.name}
                    slug={item.slug}
                    price={item.price}
                    imgUrl={item.image}
                />
            ))

        ) : (
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                  height: 320,
                }}
            >
              <Stack alignItems="center" spacing={2}>
                <RemoveShoppingCartIcon color="disabled" sx={{ fontSize: 64 }} />
                <Typography variant="body1" >
                  <Typography>{t("CART_EMPTY")}</Typography>
                </Typography>
              </Stack>
            </Box>
        )}
      </Grid>

      {/* CHECKOUT FORM */}
      <Grid item md={4} xs={12}>
        <CheckoutForm cart={cart} />
      </Grid>
    </Grid>
        </Container>
  );
}
