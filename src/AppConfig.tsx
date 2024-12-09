import { CssBaseline, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { selectLocale } from '@store/slice/coreSlice'
import '@styles/styles.css'
import { theme } from '@styles/theme'
import { useSelector } from 'react-redux'

interface AppConfigProps {
  children: React.ReactNode
}

export function AppConfig({ children }: AppConfigProps) {
  const locale = useSelector(selectLocale)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale={locale}>
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  )
}
