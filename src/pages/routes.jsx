
import { lazy } from 'react';


const Home = lazy(() => import('pages/home/components'));
const Register = lazy(() => import('pages/register/components'));

export const routes = [
  // {
  //   path: '/',
  //   element: <Home />
  // },
  // {
  //   path: `home`,
  //   element: <Home />
  // },
  // {
  //   path: '*',
  //   element: <Home/>
  // },
  // {
  //   path: 'ui/join-meds/register',
  //   element: <Register/>
  // }
];
