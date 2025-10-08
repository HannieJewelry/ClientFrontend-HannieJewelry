import { components } from "./components";
import { typography } from "./typography";
import {
  blue,
  marron,
  paste,
  primary,
  themeColors,
  orange,
  bluish,
  success,
  warning,
  gold
} from "./theme-colors";

// Theme keys
const THEMES = {
  GIFT: "GIFT",
  HEALTH: "HEALTH",
  DEFAULT: "DEFAULT",
  GROCERY: "GROCERY",
  PASTE: "PASTE",
  ORANGE: "ORANGE",
  GOLD: "GOLD",
  BLUISH: "BLUISH",
  GREEN: "GREEN",
  YELLOW: "YELLOW"
};

// Breakpoints
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1600,
    xxl: 1920
  }
};

// 🔧 Spinner override (ẩn mũi tên input[type=number])
const spinnerInputOverride = {
  MuiInputBase: {
    styleOverrides: {
      input: {
        '&::-webkit-outer-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
        '&::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
        '&[type=number]': {
          MozAppearance: 'textfield',
        },
      },
    },
  },
};

// 🎨 Danh sách theme gốc
const rawThemesOptionList = {
  [THEMES.DEFAULT]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...primary, light: primary[100] }, ...themeColors }
  },
  [THEMES.GROCERY]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...primary, light: primary[100] }, ...themeColors }
  },
  [THEMES.PASTE]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...paste, light: paste[100] }, ...themeColors }
  },
  [THEMES.HEALTH]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...blue, light: blue[100] }, ...themeColors }
  },
  [THEMES.GIFT]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...marron, light: marron[100] }, ...themeColors }
  },
  [THEMES.ORANGE]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...orange }, ...themeColors }
  },
  [THEMES.GOLD]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...gold }, ...themeColors }
  },
  [THEMES.BLUISH]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...bluish }, ...themeColors }
  },
  [THEMES.GREEN]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...success }, ...themeColors }
  },
  [THEMES.YELLOW]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...warning }, ...themeColors }
  }
};

// 🧠 Áp dụng override spinner cho toàn bộ themes
const themesOptionList = Object.fromEntries(
    Object.entries(rawThemesOptionList).map(([key, theme]) => [
      key,
      {
        ...theme,
        components: {
          ...theme.components,
          ...spinnerInputOverride,
        },
      },
    ])
);

// 🚀 Logic chọn theme theo pathname
const themeOptions = (pathname: string) => {
  let themeOption;

  const updateTheme = (themeName: string) => {
    themeOption = themesOptionList[themeName];
  };

  switch (pathname) {
    case "/":
      updateTheme(THEMES.DEFAULT);
      break;
    case "/furniture-1":
    case "/medical":
      updateTheme(THEMES.PASTE);
      break;
    case "/furniture-2":
      updateTheme(THEMES.ORANGE);
      break;
    case "/furniture-3":
      updateTheme(THEMES.GOLD);
      break;
    case "/health-beauty":
      updateTheme(THEMES.HEALTH);
      break;
    case "/gift-shop":
      updateTheme(THEMES.GIFT);
      break;
    default:
      if (pathname.startsWith("/grocery-4")) {
        themeOption = themesOptionList[THEMES.GREEN];
      } else if (pathname.startsWith("/gadget-3")) {
        themeOption = themesOptionList[THEMES.HEALTH];
      } else if (pathname.startsWith("/admin") || pathname.startsWith("/vendor")) {
        themeOption = themesOptionList[THEMES.HEALTH];
      } else {
        themeOption = themesOptionList[THEMES.DEFAULT];
      }
      break;
  }

  return themeOption;
};

export default themeOptions;
