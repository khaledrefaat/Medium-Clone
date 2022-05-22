import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import UnAuthorizedHome from '../components/HomePage/UnAuthorizedHome';
import AuthorizedHome from '../components/HomePage/AuthorizedHome';
import { getSession } from 'next-auth/react';
import { Post } from '../typings';
import { sanityClient } from '../lib/sanity.server';

interface HomeProps {
  isLoggedIn: boolean;
  posts: Post[];
}

const Home: NextPage<HomeProps> = ({ isLoggedIn, posts }) => {
  return (
    <>
      <Head>
        <title>Medium</title>
        <meta name="description" content="Medium Blog" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {isLoggedIn ? <AuthorizedHome /> : <UnAuthorizedHome />}
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx);

  const query = `*[_type == 'post'] {
    _id,
     title,
     author -> {name, image},
   description,
   body,
   mainImage,
   slug,
   categories
   }`;

  const posts: Post = await sanityClient.fetch(query);

  return {
    props: {
      isLoggedIn: !!session,
      posts: posts,
    },
  };
};
