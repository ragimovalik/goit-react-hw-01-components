import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import FriendList from './pages/FriendList';
import Statistics from './pages/Statistics';
import TransactionHistory from './pages/TransactionHistory';

export const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true,
    label: 'Home Page',
  },
  {
    path: '/profile',
    component: Profile,
    // exact: true,
    label: 'Profile',
  },
  {
    path: '/friend-list',
    component: FriendList,
    // exact: true,
    label: 'Friend List',
  },
  {
    path: '/statistics',
    component: Statistics,
    // exact: true,
    label: 'Statistics',
  },
  {
    path: '/transaction-history',
    component: TransactionHistory,
    // exact: true,
    label: 'Transaction History',
  },
];
