import React, { FC } from 'react';
import { Link } from '../components/Link/Link';

const Home: FC = () => {
  return <div>
    <h1>HomePage</h1>
    <Link href="/login">login</Link>
  </div>;
};

export default Home;
