import '../css/app.css';
import './bootstrap';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

// Material UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useMemo } from 'react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#1976d2',
      },
    },
    typography: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    },
  });

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob('./Pages/**/*.jsx')
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    const Main = () => {
      const [mode, setMode] = useState('dark');

      const theme = useMemo(() => getTheme(mode), [mode]);

      const toggleTheme = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      };

      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App {...props} themeMode={mode} toggleTheme={toggleTheme} />
        </ThemeProvider>
      );
    };

    root.render(<Main />);
  },
  progress: {
    color: '#4B5563',
  },
});