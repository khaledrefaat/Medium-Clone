import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import AuthModal from '../components/modal/AuthModal';
import PostList from '../components/post/PostList';
import TagsMenu from '../components/Ui/TagsMenu';
import { Post } from '../typings';

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModal() {
    setIsModalVisible(true);
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <Head>
        <title>Medium</title>
        <meta name="description" content="Medium Blog" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className="bg-yellow-400 pt-32 pb-10 border-b border-black">
        <div className="container flex justify-between items-center ">
          <div className="flex-1 mx-auto text-center md:ml-4 md:text-left ">
            <h2 className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-medium mb-7">
              Stay curious
            </h2>
            <h3 className="text-xl max-w-sm font-medium mb-7 mx-auto md:mx-0">
              Discover stories, and expertise from writers on any topic
            </h3>
            <button className="bg-black rounded-full px-10 py-2 text-white text-xl">
              Start reading
            </button>
          </div>
          <div className="hidden md:block">
            <Image src="/medium-hero.png" height={400} width={400} />
          </div>
        </div>
      </section>
      <section className="border-t border-black">
        <div className="container flex flex-col lg:flex-row-reverse my-10">
          <div className="w-full lg:w-1/3 mt-5">
            <TagsMenu />
          </div>
          <div className="px-1 lg:px-0 w-full lg:w-2/3">
            <PostList onBookmark={showModal} />
          </div>
        </div>
      </section>
      {isModalVisible && <AuthModal signIn hideModal={hideModal} />}
    </>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps = async () => {
//   const query = `*[_type == 'post'] {
//     _id,
//     title,
//     author -> {name, image},
//     description,
//     body,
//     mainImage,
//     slug
//   }`;

//   const posts = await sanityClient.fetch(query);

//   return {
//     props: { posts },
//   };
// };
