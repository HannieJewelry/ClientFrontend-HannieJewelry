"use client";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
// GLOBAL CUSTOM COMPONENTS
import { Paragraph } from "components/Typography";
// GLOBAL CUSTOM HOOK
import useCart from "hooks/useCart";
// LOCAL CUSTOM COMPONENTS
import CartItem from "./cart-item";
import ListItem from "../list-item";
import { useTranslation } from "react-i18next";

export default function CheckoutAltSummary() {
  const { state } = useCart();
  const { t } = useTranslation();

  return (
    <div>
      <Paragraph color="secondary.900" fontWeight={700} mb={2}>
        {t("YOUR_ORDER")}
      </Paragraph>

      {state.cart.map(({ name, qty, price, id }) => (
        <CartItem name={name} price={price} qty={qty} key={id} />
      ))}

      <Box component={Divider} borderColor="grey.300" my={3} />

      <ListItem title={t("SUBTOTAL")} value={2610} />
      <ListItem title={t("SHIPPING")} />
      <ListItem title={t("TAX")} value={40} />
      <ListItem title={t("DISCOUNT")} mb={3} />

      <Box component={Divider} borderColor="grey.300" mb={1} />

      <ListItem title={t("TOTAL")} value={2650} color="inherit" />
    </div>
  );
}
