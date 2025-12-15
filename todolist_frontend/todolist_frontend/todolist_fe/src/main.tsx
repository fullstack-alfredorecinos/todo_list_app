import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
// import temaPersonalizadoAzul from './themes/theme2.ts';
import temaPersonalizadoNaranja from './themes/theme1.ts';



createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={temaPersonalizadoNaranja}>
    <App />
  </ThemeProvider>
);
