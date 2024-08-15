import { createBrowserRouter } from 'react-router-dom';
import { Marvel } from '../heroes/pages/Marvel';
import { Dc } from '../heroes/pages/Dc';
import { Login } from '../auth/pages/Login';
import { Navbar } from '../ui/components/Navbar';

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
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);
