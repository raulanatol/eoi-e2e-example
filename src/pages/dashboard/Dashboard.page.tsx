import { FC, useState, useEffect } from 'react';
import { Link } from '../../components/Link/Link';
import { API } from '../../network/API';

const DashboardPage: FC = () => {
  const [events, setEvents] = useState<any>([{ name: 'playa Las Canteras' }]);

  useEffect(() => {

    API.getEvents()
      .then((newEvents) => setEvents(newEvents))
      .catch(() => setEvents([]));

  }, []);

  return <div className="Container">
    <h1>Dashboard</h1>
    <ul>
      {events.map((event) => (<li>{event.name}</li>))}
    </ul>
    <Link href="/src/pages">home</Link>
  </div>;
};

export default DashboardPage;
