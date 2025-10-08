// =================================================================
interface CustomPaletteColor {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    600: string;
    700: string;
    800: string;
    900: string;
    main: string;
    contrastText: string;
}

declare module "@mui/material/styles" {
    interface Palette {
        dark: CustomPaletteColor;
        paste: CustomPaletteColor;
        marron: CustomPaletteColor;
        orange: CustomPaletteColor;
        bluish: CustomPaletteColor;
    }

    interface PaletteOptions {
        gold: CustomPaletteColor;
        dark: CustomPaletteColor;
        paste: CustomPaletteColor;
        marron: CustomPaletteColor;
        orange: CustomPaletteColor;
        bluish: CustomPaletteColor;
    }
}
// =================================================================

export const grey = {
    900: "#2B3445", // Main Text
    800: "#373F50", // Paragraph
    700: "#4B566B",
    600: "#7D879C", // Low Priority form Title/Text
    500: "#AEB4BE",
    400: "#DAE1E7", // Border
    300: "#E3E9EF",
    200: "#F3F5F9", // Line Stroke
    100: "#F6F9FC"
};

export const primary = {
    100: "#FCE9EC",
    200: "#F8C7CF",
    300: "#F07D90",
    400: "#EC6178",
    500: "#ec6c61",
    600: "#FF6363",
    700: "#ed8383",
    800: "#DF2E44",
    900: "#D91F33"
};

export const secondary = {
    100: "#e8e8ee",
    200: "#b9bacb",
    300: "#8a8ca8",
    400: "#5b5d85",
    500: "#141850",
    600: "#0F3460",
    700: "#101340",
    800: "#0e1138",
    900: "#0c0e30",
    main: "#0F3460",
    dark: "#0c0e30"
};

export const error = {
    100: "#FFEAEA",
    200: "#FFCBCB",
    300: "#FFA9A9",
    400: "#FF6D6D",
    500: "#FF5353",
    600: "#FF4C4C",
    700: "#FF4242",
    800: "#FF3939",
    900: "#FF2929",
    main: "#FF8686",
    contrastText: "#fff"
};

export const success = {
    100: "#E7F9ED",
    200: "#C2F1D1",
    300: "#99E8B3",
    400: "#52D77E",
    500: "#33D067",
    600: "#2ECB5F",
    700: "#27C454",
    800: "#20BE4A",
    900: "#0b7724",
    main: "rgb(51, 208, 103)"
};

export const blue = {
    50: '#f1f8fe',
    100: '#e2f0fc',
    200: '#bee0f9',
    300: '#84c7f5',
    400: '#43abed',
    500: '#1a90dd',
    600: '#0d72bc',
    700: '#0d63a5',
    800: '#0e4e7e',
    900: '#124268',
    950: '#0c2945',
    main: "#0D63A5",
    dark: "#3282B8",
    contrastText: "#fff",
};

export const marron = {
    50: "#f3f5f9",
    100: "#F6F2ED",
    200: "#F8DBD1",
    300: "#EBBCB3",
    400: "#D89C98",
    600: "#A3545C",
    700: "#883948",
    800: "#6E2438",
    900: "#5B162F",
    main: "#BE7374"
};

export const paste = {
    50: "#F5F5F5",
    100: "#DDFBF1",
    200: "#BDF7E8",
    300: "#97E8DA",
    400: "#76D2CA",
    600: "#36929A",
    700: "#257181",
    800: "#175368",
    900: "#0E3D56",
    main: "#4BB4B4",
    contrastText: "#FFFFFF"
};

export const orange = {
    50: "#FEE9D2",
    100: "#FDD8AF",
    200: "#FCC487",
    300: "#FCB05F",
    400: "#FB9C37",
    500: "#FA8C16",
    600: "#C86904",
    700: "#A05403",
    800: "#783F03",
    900: "#502A02",
    main: "#FA8C16",
    dark: "#C86904",
    light: "#FDD8AF"
};

export const bluish = {
    100: "#DDFBF1",
    200: "#BDF7E8",
    300: "#97E8DA",
    400: "#76D2CA",
    500: "#4BB4B4",
    600: "#36929A",
    700: "#257181",
    800: "#175368",
    900: "#0E3D56",
    main: "#4BB4B4",
    dark: "#36929A",
    light: "#BDF7E8"
};

export const warning = {
    100: "#FFF8E5",
    main: "#FFCD4E",
    dark: "#FA8C16",
    contrastText: "#FFFFFF"
};

export const gold = {
    main: "#BB9C36"
};

export const green = {
    main: "#29b474",
    dark: "#219964",
    light: "#61d69e",

    50: '#eefbf3',
    100: '#d6f5e1',
    200: '#b1e9c8',
    300: '#7dd8a8',
    400: '#48bf85',
    500: '#29b474',
    600: '#178454',
    700: '#136946',
    800: '#115438',
    900: '#0f4530',
    95: '#07271b',
    contrastText: "#fff",
};


export const dark = {main: "#1F2937"};
export const white = {main: "#fff"};

export const themeColors = {
    dark,
    grey,
    gold,
    paste,
    error,
    orange,
    marron,
    bluish,
    warning,
    success,
    secondary,
    green,
    info: blue,
    divider: grey[200],
    background: {default: grey[100]},
    text: {primary: grey[900], secondary: grey[800], disabled: grey[400]}
};
