import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

document.addEventListener('turbo:load', () => {
  const mainDiv = document.createElement("container")
  const root = ReactDOM.createRoot(document.body.appendChild(mainDiv))
  root.render(
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
  )
})
