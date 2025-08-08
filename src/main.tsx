import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import './index.scss'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    element: (
      <ChakraProvider>
        <App />
      </ChakraProvider>
    ),
    children: [
      {
        path: '/',
        
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
