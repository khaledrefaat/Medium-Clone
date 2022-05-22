import React, { useState } from 'react';
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import UnAuthorizedHome from '../components/HomePage/UnAuthorizedHome';
import AuthorizedHome from '../components/HomePage/AuthorizedHome';
import { getSession } from 'next-auth/react';
import { Session } from '../typings';
import Editor from '../components/editor/Editor';

interface HomeProps {
  sess?: Session;
}

const Home: NextPage<HomeProps> = ({ sess }) => {
  return (
    <>
      <Head>
        <title>Medium</title>
        <meta name="description" content="Medium Blog" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {sess ? <AuthorizedHome /> : <UnAuthorizedHome />}
      <div className="w-96 h-96 bg-slate-100 mx-auto mb-5">
        <Editor />
      </div>
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
