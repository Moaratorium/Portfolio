import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'dotenv-json';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import PDFView from "./routes/pdf-view";
import AboutMe from "./routes/about";
import '@fontsource-variable/jetbrains-mono';

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
