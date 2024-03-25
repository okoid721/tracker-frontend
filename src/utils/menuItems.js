import {
  MdBalance,
  MdDashboard,
  MdSavings,
  MdSend,
  MdWallet,
} from 'react-icons/md';
export const menuItems = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <MdDashboard />,
    link: '/dashboard',
  },
  {
    id: 2,
    title: 'View Transaction',
    icon: <MdSend />,
    link: '/dashboard',
  },
  {
    id: 3,
    title: 'Incomes',
    icon: <MdBalance />,
    link: '/dashboard',
  },
  {
    id: 4,
    title: 'Expenses',
    icon: <MdWallet />,
    link: '/dashboard',
  },
  {
    id: 5,
    title: 'Savings',
    icon: <MdSavings />,
    link: '/dashboard',
  },
];
