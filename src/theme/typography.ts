// typography.ts

import { openSans } from "./fonts";
import { fontSizes } from "./sizes";

export const typography = {
    fontFamily: openSans.style.fontFamily,
    htmlFontSize: 16,
    fontSize: 14,

    body1: { fontSize: fontSizes.md },
    body2: { fontSize: fontSizes.sm },
    subtitle1: { fontSize: fontSizes.lg },
    subtitle2: { fontSize: fontSizes.md },
    caption: { fontSize: fontSizes.xs },

    // h1: { fontSize: fontSizes["3xl"], fontWeight: 700 },
    // h2: { fontSize: fontSizes["2xl"], fontWeight: 700 },
    // h3: { fontSize: fontSizes.xl, fontWeight: 600 },
    // h4: { fontSize: fontSizes.lg, fontWeight: 600 },
    // h5: { fontSize: fontSizes.md, fontWeight: 500 },
    // h6: { fontSize: fontSizes.sm, fontWeight: 500 },

    tableCell: { fontSize: fontSizes.sm, fontWeight: 400 },
    tableCellHeader: { fontSize: fontSizes.md, fontWeight: 600 },
};

// TypeScript augment
declare module "@mui/material/styles" {
    interface TypographyVariants {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        tableCell?: React.CSSProperties;
        tableCellHeader?: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
        "2xl"?: string;
        "3xl"?: string;
        tableCell?: React.CSSProperties;
        tableCellHeader?: React.CSSProperties;
    }
}
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        "2xl": true;
        "3xl": true;
        tableCell: true;
        tableCellHeader: true;
    }
}
