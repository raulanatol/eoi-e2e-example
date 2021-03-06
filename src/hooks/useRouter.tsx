import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home.page'));
const Login = lazy(() => import('../pages/login/Login.page'));
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard.page'));


const toComponent = (pathname: string) => {
  if (pathname === '/login') {
    return Login;
  }

  if (pathname === '/dashboard') {
    return Dashboard;
  }

  return Home;
};

export const useRouter = () => {
  const navigateTo = (newURL: string) =>
    window.location.replace(newURL);

  return {
    Page: toComponent(window.location.pathname),
    navigateTo
  };
};
