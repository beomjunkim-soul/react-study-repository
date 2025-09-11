import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Bootstrap CSS를 전역으로 import 
import 'bootstrap/dist/css/bootstrap.min.css'
// 커스텀 CSS는 Bootstrap 다음에 import
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
