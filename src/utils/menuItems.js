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
    icon: <MdDashboard size={25} />,
    link: '/dashboard',
  },
  {
    id: 2,
    title: 'View Transaction',
    icon: <MdSend size={25} />,
    link: '/dashboard',
  },
  {
    id: 3,
    title: 'Incomes',
    icon: <MdBalance size={25} />,
    link: '/dashboard',
  },
  {
    id: 4,
    title: 'Expenses',
    icon: <MdWallet size={25} />,
    link: '/dashboard',
  },
  {
    id: 5,
    title: 'Savings',
    icon: <MdSavings size={25} />,
    link: '/dashboard',
  },
];
