import Head from 'next/head';

const newPost = () => {
  return (
    <>
      <Head>
        <title>New post - Medium</title>
        <meta name="description" content="Adding new post" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );
};

export default newPost;
