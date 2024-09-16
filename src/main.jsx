import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import PDFView from "./routes/pdf-view";
import AboutMe from "./routes/about";
import config from '../config.json';

export function getTheme() {
  if(!localStorage.getItem("theme")) {
    console.log('no theme')
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      localStorage.setItem("theme", "light");
      console.log('setting light theme')
    }
    else {
      localStorage.setItem("theme", "dark")
      console.log('setting dark theme')
    }
  }
  let currentTheme = localStorage.getItem("theme");
  document.getElementById("body").classList.remove('light', 'dark')
  document.getElementById("body").classList.add(currentTheme);
  console.log('setting class')
}
getTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <Navigate to="/about" replace />
      },
      {
        path: "/pdf-view",
        element: <PDFView />
      },
      {
        path:"/about",
        element: <AboutMe />
      },
    ]
  },
]); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
