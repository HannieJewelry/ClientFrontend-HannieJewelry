"use client";
import { ReactNode } from "react";
import { GoogleAnalytics } from '@next/third-parties/google'
import { openSans } from "../theme/fonts";

// Providers
import ThemeProvider from "theme/theme-provider";
import CartProvider from "contexts/CartContext";
import SettingsProvider from "contexts/SettingContext";
import QueryClientProvider from "providers/query-client-provider";
import RTL from "components/rtl";
import ProgressBar from "components/progress";

// i18n
import "i18n";

import AuthCheckWrapper from "../components/AuthCheckWrapper";
import SnackbarProvider from "../components/SnackbarProvider";

export default function RootLayout({ children }: { children: ReactNode }) {

    return (
        <html lang="en" suppressHydrationWarning>
        <body className={openSans.className}>
        <QueryClientProvider>
            <CartProvider>
                <SettingsProvider>
                    <ThemeProvider>
                        <SnackbarProvider>
                            <AuthCheckWrapper>
                                <ProgressBar />
                                <RTL>{children}</RTL>
                            </AuthCheckWrapper>
                        </SnackbarProvider>
                    </ThemeProvider>
                </SettingsProvider>
            </CartProvider>
        </QueryClientProvider>
        <GoogleAnalytics gaId="G-XKPD36JXY0" />
        </body>
        </html>
    );
}
