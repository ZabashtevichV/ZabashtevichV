import 'src/global.css';

import { ruRU } from '@mui/x-date-pickers/locales';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { Router } from 'src/routes/sections';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import { ThemeProvider } from 'src/theme/theme-provider';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <LocalizationProvider
        localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
        dateAdapter={AdapterDayjs}
      >
        <Router />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
