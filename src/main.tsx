import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './i18n'

const root = document.getElementById('root')
if (!root) {
  throw Error('Root element not found')
}

ReactDOM.createRoot(root).render(<App />)
