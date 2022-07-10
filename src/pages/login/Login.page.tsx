import React, { FC } from 'react';
import { Link } from '../../components/Link/Link';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import './Login.css';

const LoginPage: FC = () => {
  return <div className="Container">
    <h1>LoginPage</h1>
    <LoginForm/>
    <Link href="/src/pages">home</Link>
  </div>;
};

export default LoginPage;
