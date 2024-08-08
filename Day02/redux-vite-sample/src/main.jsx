import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { myStore } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
    <App />
    </Provider>
  </StrictMode>,
)
