"use client";

import Grid from "@mui/material/Grid";
// Local CUSTOM COMPONENTS
import BankTransferPayment from "../bank-transfer-payment";
import Container from "@mui/material/Container";

export default function BankTransfer() {
    return (
        <Container maxWidth="lg">
            <BankTransferPayment/>
        </Container>
    );
}
