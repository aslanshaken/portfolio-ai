import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { useAppSelector } from '@/app/store';
import { PaletteMode } from '@mui/material';
import * as React from 'react';
type Props = {
  children?: React.ReactNode;
};

declare module '@mui/material/styles' {
  // index signature typegradients

  interface TypeGradient {
    [key: string]: string;
  }

  interface Palette {
    gradient: TypeGradient;
    text: TypeText2;
  }
  interface TypeColor {
    Darkest?: string;
    Darker?: string;
    Dark?: string;
    Base?: string;
    Light?: string;
    Lighter?: string;
    Lightest?: string;
    White?: string;
  }
  interface TypeText2 {
    primary: string;
    secondary: string;
    disabled: string;
  }
  interface PaletteOptions {
    gradient: TypeGradient;
    Ink: TypeColor;
    Sky: TypeColor;
    Red: TypeColor;
    Green: TypeColor;
  }

  interface TypeBackground {
    opposite: string;
  }
}
export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const mode = useAppSelector((state) => state.user.mode);
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        mode: mode as PaletteMode,
        primary: {
          main: '#1c9c7c',
        },
        secondary: {
          main: '#9DF3C4',
        },
        Ink: {
          Darkest: '#000000',
          Darker: '#222222',
          Dark: '#303437',
          Base: '#404446',
          Light: '#6C7072',
          Lighter: '#72777A',
        },
        Sky: {
          Dark: '#979C9E',
          Base: '#CDCFD0',
          Light: '#E3E5E5',
          Lighter: '#F2F4F5',
          Lightest: '#F7F9FA',
          White: '#FFFFFF',
        },

        Red: {
          Darkest: '#6B0206',
          Base: '#E8282B',
          Light: '#F94739',
          Lighter: '#FF9898',
          Lightest: '#FFE5E5',
        },

        Green: {
          Darkest: '#0A4C0A',
          Base: '#0F8B0F',
          Light: '#1EB01E',
          Lighter: '#7FF77F',
          Lightest: '#E5FFE5',
        },
        background: {
          default: mode === 'dark' ? '#000000' : '#FCFBFA',
          opposite: mode === 'dark' ? '#FCFBFA' : '#000000',
          paper: mode === 'dark' ? '#131313' : '#FCFCFC',
        },
        text: {
          primary: mode === 'dark' ? '#FFFFFF' : '#000000',
          secondary: '#999999',
          disabled: '#C3C1BD',
        },

        grey: {
          50: mode === 'dark' ? 'hsl(0, 0%, 10%)' : 'hsl(0, 5%, 95%)',
          100: mode === 'dark' ? 'hsl(0, 0%, 20%)' : 'hsl(0, 0%, 90%)',
          200: mode === 'dark' ? 'hsl(0, 0%, 30%)' : 'hsl(0, 0%, 80%)',
          300: mode === 'dark' ? 'hsl(0, 0%, 40%)' : 'hsl(0, 0%, 70%)',
          400: mode === 'dark' ? 'hsl(0, 0%, 50%)' : 'hsl(0, 0%, 60%)',
          500: mode === 'dark' ? 'hsl(0, 0%, 60%)' : 'hsl(0, 0%, 50%)',
          600: mode === 'dark' ? 'hsl(0, 0%, 70%)' : 'hsl(0, 0%, 40%)',
          700: mode === 'dark' ? 'hsl(0, 0%, 80%)' : 'hsl(0, 0%, 30%)',
          800: mode === 'dark' ? 'hsl(0, 0%, 90%)' : 'hsl(0, 0%, 20%)',
          900: mode === 'dark' ? 'hsl(0, 5%, 95%)' : 'hsl(0, 0%, 10%)',
        },
        gradient: {
          primary: 'linear-gradient(137deg, #41635C 0%, #528177 100%)',
          warning: 'linear-gradient(137deg, #F9CF3D 0%, #FF9B3F 100%)',
        },
      },

      typography: {
        fontFamily: 'Roboto, sans-serif',

        h1: {
          fontSize: '2.5rem',
          fontWeight: '900',
          '@media (max-width:1200px)': {
            fontSize: '2rem !important',
          },
        },
        h2: {
          fontSize: '2.188rem',
          fontWeight: '700',
          '@media (max-width:1200px)': {
            fontSize: '1.5rem !important',
          },
        },
      },

      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              backgroundColor: '#2B2C28',
              color: '#fff',
              '& .MuiContainer-maxWidthLg': {
                maxWidth: 1320,
              },
              '& .TextGradientPrimary': {
                background: 'linear-gradient(137deg, #41635C 0%, #528177 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              },
            },
          },
        },
        MuiLink: {
          styleOverrides: {
            root: {
              cursor: 'pointer',
              textDecoration: 'none',
              lineHeight: '16px',
              transition: 'all 0.1s ease-in-out',
              '&:hover': {
                opacity: 0.8,
              },
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              aspectRatio: '1/1',
            },
          },
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              color: '#fff',
            },
          },
        },
      },
    }),
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
