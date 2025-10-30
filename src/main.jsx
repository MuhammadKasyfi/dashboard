import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Dashboard from './routes/Dashboard.jsx';
import Layout from './components/Layout';
import NotFoundPage from './routes/NotFoundPage.jsx';

const router = createBrowserRouter([
  { path: "/", element: ( <App /> ) },
  { path: "/dashboard", element: ( <Layout><Dashboard /></Layout> ) },
  { path: "*", element: ( <NotFoundPage /> ) },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
