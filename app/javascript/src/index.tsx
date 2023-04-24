import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

document.addEventListener("turbo:load", () => {
  const root = ReactDOM.createRoot(
    document.body.appendChild(document.createElement("div"))
  )
  root.render(
    <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
)
})

