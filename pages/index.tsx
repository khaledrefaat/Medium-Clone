import type { GetServerSideProps, NextPage } from 'next';
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
      {isLoggedIn ? (
        <AuthorizedHome posts={posts} />
      ) : (
        <UnAuthorizedHome posts={posts} />
      )}
    </>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getSession(ctx);
  let posts;

  const query = `*[_type == 'post'] {
    _id,
     title,
     author -> {name, image},
   description,
   body,
   mainImage,
   slug,
   categories,
   _createdAt
   }`;

  try {
    posts = await sanityClient.fetch(query);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      isLoggedIn: !!session,
      posts,
    },
  };
};
