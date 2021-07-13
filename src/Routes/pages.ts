import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders';

const pages = [
  {
    exact: true,
    path: '/',
    auth: false,
    component: Dashboard,
  },
  {
    exact: true,
    path: '/orders',
    auth: false,
    component: Orders,
  },
];

export default pages;
