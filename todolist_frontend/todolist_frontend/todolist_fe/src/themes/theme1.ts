import { createTheme } from "@mui/material/styles";

const temaPersonalizadoNaranja = createTheme({
    palette: {
        primary: {
            main: '#ff7300ff',
        },
        secondary: {
            main: '#0d0d0d',
            light: '#0d0d0d',
            dark: '#0d0d0d',
            contrastText: '#ff7300ff',
        },
        error: {
            main: '#EA2424',
        },
        warning: {
            main: '#FB9B2A',
        },
        info: {
            main: '#4589FF',
        },
        success: {
            main: '#16C410',
        },
        background: {
            default: '#FAFAFC',
        },
        text: {
            primary: '#1C1C1F',
        },
        action: {
            active: '#ff7300ff',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1440,
        }
    },
    custom: {
        containerMaxWidth: {
            xs: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%',
            xxl: '1440px',
        },
        spacing: {
            xs: '8px',
            sm: '16px',
            md: '24px',
            lg: '32px',
            xl: '40px',
            xxl: '48px',
        },
    },
});

export default temaPersonalizadoNaranja;
