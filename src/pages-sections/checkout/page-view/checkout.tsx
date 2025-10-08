"use client";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import { useState } from "react";
import {CheckoutForm} from "../checkout-form";
import {CheckoutSummary} from "../checkout-summery";

export default function CheckoutPageView() {
    const [shippingAddress, setShippingAddress] = useState<any>(null);
    const [billingAddress, setBillingAddress] = useState<any>(null);
    const [sameAsShipping, setSameAsShipping] = useState(false);

    return (
        <Container maxWidth="lg">
            <Grid container flexWrap="wrap-reverse" spacing={3}>
                <Grid item lg={7} md={7} xs={12}>
                    <CheckoutForm
                        shippingAddress={shippingAddress}
                        setShippingAddress={setShippingAddress}
                        billingAddress={billingAddress}
                        setBillingAddress={setBillingAddress}
                        sameAsShipping={sameAsShipping}
                        setSameAsShipping={setSameAsShipping}
                    />
                </Grid>

                <Grid item lg={5} md={5} xs={12}>
                    <Stack spacing={3}>
                        <CheckoutSummary
                            shippingAddress={shippingAddress}
                            billingAddress={billingAddress}
                            sameAsShipping={sameAsShipping}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}
