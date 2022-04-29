import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import AuthorizedHome from '../components/HomePage/AuthorizedHome';
import UnAuthorizedHome from '../components/HomePage/UnAuthorizedHome';
import { Post } from '../typings';

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = () => {
  return (
    <>
      <Head>
        <title>Medium</title>
        <meta name="description" content="Medium Blog" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <AuthorizedHome /> */}
      <UnAuthorizedHome />
    </>
  );
};

export default Home;
