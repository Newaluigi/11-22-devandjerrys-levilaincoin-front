import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import reportWebVitals from './reportWebVitals'

import ScrollToTop from './components/ScrollToTop'

export { default as Landing } from './screens/Google Auth/Landing'
export { default as Login } from './screens/Google Auth/Login'
export { default as Signup } from './screens/Google Auth/Signup'
export { default as UserPage } from './screens/Google Auth/UserPage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
