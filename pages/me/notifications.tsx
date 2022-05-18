import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import NotificationUser from '../../components/Notification/NotificationUser';
import DividerButton from '../../components/Ui/DividerButton';
import SectionDivider from '../../components/Ui/SectionDivider';
import SectionHeading from '../../components/Ui/SectionHeading';

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
    <>
      <Head>
        <title>Notifications - Medium</title>
        <meta name="description" content="Medium Blog" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section>
        <div className="container mt-24 lg:mt-12 mb-5 ml-3 sm:ml-auto">
          <SectionHeading>Notifications</SectionHeading>
          <SectionDivider>
            <DividerButton active className="mr-10">
              all
            </DividerButton>
            <DividerButton>responses</DividerButton>
          </SectionDivider>
          <div className="py-4  md:pl-3 md:py-8">
            {/* <NotificationUser {...DUMMY_DATA} /> */}
            {DUMMY_ARRAY.map((item, index) => (
              <NotificationUser key={index} {...item} />
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
    </>
  );
};

export default notifications;
