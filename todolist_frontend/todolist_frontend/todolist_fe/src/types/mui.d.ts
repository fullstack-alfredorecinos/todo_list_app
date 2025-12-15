// src/types/mui.d.ts
import '@mui/material/styles';
import '@mui/system';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
    }

    // Para agregar custom properties al tema (Opción 4)
    interface Theme {
        custom?: {
            containerMaxWidth?: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
            };
            spacing?: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
            };
        };
    }

    interface ThemeOptions {
        custom?: {
            containerMaxWidth?: {
                xs?: string;
                sm?: string;
                md?: string;
                lg?: string;
                xl?: string;
                xxl?: string;
            };
            spacing?: {
                xs?: string;
                sm?: string;
                md?: string;
                lg?: string;
                xl?: string;
                xxl?: string;
            };
        };
    }
}

declare module '@mui/system' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
    }
}