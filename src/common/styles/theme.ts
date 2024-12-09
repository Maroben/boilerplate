import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(24, 97, 70)',
    },
    secondary: {
      main: 'rgb(20, 74, 117)',
    },
  },
  typography: {
    h1: {
      fontSize: '48px',
      fontWeight: '300',
      lineHeight: '1.5',
    },
    h2: {
      fontSize: '32px',
      fontWeight: '500',
      lineHeight: '1.5',
    },
    h3: {
      fontSize: '28px',
      fontWeight: '500',
      lineHeight: '1.5',
    },
    h4: {
      fontSize: '26px',
      fontWeight: '450',
      lineHeight: '1.5',
    },
    h5: {
      fontSize: '24px',
      fontWeight: '450',
      lineHeight: '1.5',
    },
    h6: {
      fontSize: '20px',
      fontWeight: '450',
      lineHeight: '1.5',
    },
    body1: {
      fontSize: '18px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
})
