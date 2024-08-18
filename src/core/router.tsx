import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Marvel } from '../heroes/pages/Marvel';
import { Dc } from '../heroes/pages/Dc';
import { Login } from '../auth/pages/Login';
import { Navbar } from '../ui/components/Navbar';
import { Search } from '../heroes/pages/Search';
import { Hero } from '../heroes/pages/Hero';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/marvel',
        element: <Marvel />,
      },
      {
        path: '/dc',
        element: <Dc />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/hero/:id',
        element: <Hero />,
      },
      {
        path: '/*',
        element: <Navigate to={'/marvel'} />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
