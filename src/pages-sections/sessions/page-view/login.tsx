"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import { useRouter } from "next/navigation";
import BazaarTextField from "components/BazaarTextField";
import Alert from "@mui/material/Alert";
import {useOtpAuth} from "../../../hooks/auth/useOtpAuth";

// ==============================================================

interface Props {
    closeDialog?: () => void;
}

// ==============================================================

const LoginPageView: React.FC<Props> = ({ closeDialog }) => {
    const router = useRouter();
    const { phone, setPhone, requestOtp, isLoading, error } = useOtpAuth();

    const handlePhoneSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!phone) return;

        try {
            await requestOtp();
            router.push("/otp");
            if (closeDialog) closeDialog();
        } catch (err) {
            console.error("Error requesting OTP:", err);
        }
    };

    return (
        <Box>
            <Box mb={3.5} textAlign="center">
                <Typography variant="h6" fontWeight={700} mb={1}>
                    Welcome back
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Please log in to continue
                </Typography>
            </Box>

            {error && (
                <Alert
                    severity="error"
                    sx={{
                        mb: 2,
                        borderRadius: 2,
                        fontSize: 15,
                        alignItems: "center",
                        px: 2
                    }}
                >
                    {error}
                </Alert>
            )}

            <form onSubmit={handlePhoneSubmit}>
                <BazaarTextField
                    mb={2.5}
                    fullWidth
                    name="phone"
                    size="medium"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    label="Your phone number"
                    placeholder="Enter your phone number"
                    required
                    autoFocus
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PermPhoneMsgOutlinedIcon color="primary" fontSize="medium" />
                            </InputAdornment>
                        ),
                    }}
                />

                <Typography
                    variant="body1"
                    textAlign="center"
                    mb={2}
                    color="text.secondary"
                    fontWeight={500}
                >
                    You will receive an OTP via SMS
                </Typography>

                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isLoading || !phone}
                    sx={{
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                        fontWeight: 700,
                        mt: 0.5,
                    }}
                >
                    {isLoading ? "Sending OTP..." : "Get OTP via SMS"}
                </Button>
            </form>
        </Box>
    );
};

export default LoginPageView;