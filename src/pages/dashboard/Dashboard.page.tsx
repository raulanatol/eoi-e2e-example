import React, { FC } from 'react';
import { Link } from '../../components/Link/Link';

const DashboardPage: FC = () => {


  return <div className="Container">
    <h1>Dashboard</h1>


    <Link href="/src/pages">home</Link>
  </div>;
};

export default DashboardPage;
