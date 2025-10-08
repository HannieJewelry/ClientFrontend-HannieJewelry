"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { useRouter } from "next/navigation";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useOtpAuth } from "../../../hooks/auth/useOtpAuth";
import BazaarTextField from "../../../components/BazaarTextField";

const OtpVerifyContent = () => {
    const router = useRouter();
    const { phone, otp, setOtp, isVerifying, verifyOtp, requestOtp, error } = useOtpAuth();
    const [timeLeft, setTimeLeft] = useState(300);
    const [isResending, setIsResending] = useState(false);
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!otp) return;
        try {
            await verifyOtp();
        } catch (err) {
            console.error("Error verifying OTP:", err);
        }
    };

    const handleResendOtp = async () => {
        if (timeLeft > 0) return;
        try {
            setIsResending(true);
            await requestOtp();
            setTimeLeft(45);
        } catch (err) {
            console.error("Error resending OTP:", err);
        } finally {
            setIsResending(false);
        }
    };

    const handleEditPhone = () => {
        router.push("/login");
    };

    return (
        <Box>
            <Box mb={3.5} textAlign="center">
                <Typography variant="h6" fontWeight={700} mb={1}>
                    OTP Verification
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    The verification code has been sent to your phone number
                </Typography>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt={1.1}
                >
                    <Typography
                        variant="h6"
                        color="primary"
                        fontWeight={700}
                        component="span"
                        letterSpacing={0.02}
                    >
                        {phone || "0914xxxxxx"}
                    </Typography>
                    <IconButton
                        size="small"
                        onClick={handleEditPhone}
                        sx={{
                            ml: 1,
                            borderRadius: 1.5,
                            bgcolor: "#f6f9fc",
                            transition: "background .14s",
                            "&:hover": { bgcolor: "#edeef3" }
                        }}
                    >
                        <EditIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            <form onSubmit={handleSubmit}>
                <BazaarTextField
                    mb={2.5}
                    fullWidth
                    name="phone"
                    size="medium"
                    variant="outlined"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter the OTP"
                    required
                    autoFocus
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <VerifiedOutlinedIcon color="primary" fontSize="medium" />
                            </InputAdornment>
                        ),
                    }}
                />

                <Button
                    fullWidth
                    type="submit"
                    color="primary"
                    variant="contained"
                    size="medium"
                    disabled={isVerifying || !otp}
                    sx={{
                        mb: 2,
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                        "&:hover": {
                            bgcolor: "primary.dark"
                        }
                    }}
                >
                    {isVerifying ? "Verifying..." : "Continue"}
                </Button>

                <Button
                    fullWidth
                    color="primary"
                    variant="outlined"
                    size="medium"
                    disabled={timeLeft > 0 || isResending}
                    onClick={handleResendOtp}
                    sx={{
                        borderColor: "primary.main",
                        color: "primary.main",
                        fontWeight: 600,
                        "&:hover": {
                            borderColor: "primary.dark",
                            color: "primary.dark",
                            bgcolor: "#f6f9fc"
                        }
                    }}
                >
                    {isResending
                        ? "Resending..."
                        : timeLeft > 0
                            ? `Resend after ${formatTime(timeLeft)}`
                            : "Resend OTP"}
                </Button>

                {error && (
                    <Typography
                        color="error"
                        mt={2}
                        textAlign="center"
                        fontSize={15}
                        fontWeight={500}
                    >
                        {error}
                    </Typography>
                )}
            </form>
        </Box>
    );
};

const OtpVerifyPageView = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <OtpVerifyContent />
        </QueryClientProvider>
    );
};

export default OtpVerifyPageView;
