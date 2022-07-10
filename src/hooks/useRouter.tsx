import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home.page'));
const Login = lazy(() => import('../pages/Login.page'));

const toComponent = (pathname: string) => {
  if (pathname === '/login') {
    return Login;
  }

  return Home;
};

export const useRouter = () => {
  return {
    Page: toComponent(window.location.pathname)
  };
};
