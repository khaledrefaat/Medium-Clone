import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import PostList from '../components/post/PostList';
import TagsMenu from '../components/Ui/TagsMenu';

const Home: NextPage = () => {
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
      <section>
        <div className="container flex flex-col lg:flex-row-reverse my-10 border-t border-black">
          <div className="w-full lg:w-1/3 mt-5">
            <TagsMenu />
          </div>
          <div className="px-1 lg:px-0 w-full lg:w-2/3">
            <PostList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
