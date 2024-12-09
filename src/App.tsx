import store from '@store/store'
import { Provider as ReduxProvider } from 'react-redux'
import { AppConfig } from './AppConfig'
import { Router } from './Router'

export function App() {
  return (
    <ReduxProvider store={store}>
      <AppConfig>
        <Router />
      </AppConfig>
    </ReduxProvider>
  )
}
