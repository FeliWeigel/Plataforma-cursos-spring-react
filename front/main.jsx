import { createRoot } from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./src/App"
import React from "react"

const router = createBrowserRouter([
  {
    path: "*",
    element: <App/>
  }
])

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
