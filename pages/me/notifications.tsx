import Link from 'next/link';
import React from 'react';
import NotificationUser from '../../components/Notification/NotificationUser';
import Divider from '../../components/Ui/Divider';

interface DummyDataInterface {
  title: string;
  userName: string;
  imageSrc: string;
  date: string;
}

const DUMMY_DATA = {
  title: 'started following you',
  userName: 'Juanita Magro',
  imageSrc: '/jake.jpg',
  date: 'Jan 8',
};

const DUMMY_ARRAY: DummyDataInterface[] = [];

for (let i = 0; i < 8; i++) {
  DUMMY_ARRAY.push(DUMMY_DATA);
}

const notifications = () => {
  return (
    <section>
      <div className="container mt-24 lg:mt-12 mb-5">
        <h1 className="text-4xl font-extrabold font-sans">Notifications</h1>

        <div className="flex mt-10 mb-2">
          <div className="mr-10 font-medium">All</div>
          <div className=" text-gray-500">Responses</div>
        </div>
        <Divider />
        <div className="p-8">
          {/* <NotificationUser {...DUMMY_DATA} /> */}
          {DUMMY_ARRAY.map(item => (
            <NotificationUser {...item} />
          ))}
          <div className="flex justify-between w-full">
            <Link href="/notifications/old">
              <a className="text-xs text-green-600 font-medium">
                Older notifications
              </a>
            </Link>
            <Link href="/stats">
              <a className="text-xs text-green-600 font-medium">Your stats</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default notifications;
