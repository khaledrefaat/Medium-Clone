import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import UnAuthorizedHome from '../components/HomePage/UnAuthorizedHome';
import AuthorizedHome from '../components/HomePage/AuthorizedHome';
import { getSession } from 'next-auth/react';
import { Session } from '../typings';

interface HomeProps {
  sess?: Session;
}

const Home: NextPage<HomeProps> = ({ sess }) => {
  return (
    <>
      <Head>
        <title>Medium</title>
        <meta name="description" content="Medium Blog" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {sess ? <AuthorizedHome /> : <UnAuthorizedHome />}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx);

  return {
    props: {
      sess: session,
    },
  };
};
