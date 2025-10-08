import '@mui/material/styles';
import '@mui/material/Button';
import {blue} from "./theme-colors";

declare module '@mui/material/styles' {
    interface Palette {
        green: Palette['primary'];
    }
    interface PaletteOptions {
        green?: PaletteOptions['primary'];
    }

}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        green: true;
    }

}