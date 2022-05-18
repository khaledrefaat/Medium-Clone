import Image from 'next/image';
import React, { useState } from 'react';
import AuthModal from '../modal/AuthModal';
import PostItem from '../post/PostItem';
import TrendingPost from '../post/TrendingPost';
import TagsMenu from '../Ui/TagsMenu';

const Authorized = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  function showModal() {
    setIsModalVisible(true);
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  function showSignInModal() {
    setShowSignIn(true);
    showModal();
  }

  function showSignUpModal() {
    setShowSignIn(false);
    showModal();
  }

  return (
    <>
      <section className="bg-yellow-400 pt-32 pb-10 border-b border-black">
        <div className="container flex justify-between items-center ">
          <div className="flex-1 mx-auto text-center md:ml-4 md:text-left ">
            <h2 className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-medium mb-7">
              Stay curious
            </h2>
            <h3 className="text-xl max-w-sm font-medium mb-7 mx-auto md:mx-0">
              Discover stories, and expertise from writers on any topic
            </h3>
            <button
              onClick={showSignUpModal}
              className="bg-black rounded-full px-10 py-2 text-white text-xl"
            >
              Start reading
            </button>
          </div>
          <div className="hidden md:block">
            <Image src="/medium-hero.png" height={400} width={400} />
          </div>
        </div>
      </section>

      <section className="border-t border-black py-10 px-5 sm:px-0">
        <div className="container flex flex-col">
          <div className="mb-5 flex">
            <div className="border border-black rounded-full flex items-center">
              <Image src="/icons/trending.svg" height="12" width="22" />
            </div>
            <h3 className="ml-2 font-bold uppercase text-gray-800">
              trending on medium
            </h3>
          </div>
          <ul className="grid pl-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 list-none">
            <TrendingPost />
            <TrendingPost />
            <TrendingPost />
            <TrendingPost />
            <TrendingPost />
            <TrendingPost />
          </ul>
        </div>
      </section>

      <section className="border-t border-black">
        <div className="container flex flex-col lg:flex-row-reverse my-10">
          <div className="w-full lg:w-1/3 mt-5">
            <TagsMenu />
          </div>
          <div className="px-1 lg:px-0 w-full lg:w-2/3">
            <ul className="w-full flex flex-col">
              <PostItem
                onBookmark={showSignInModal}
                imageSrc="/jake.jpg"
                content="In the last couple of weeks, Russia withdrew its forces from around
          Kyiv and announced that its true goal is to “liberate” Donbas, which"
                title="Telegram Chronicles: Donbas and its War (a.k.a. “the last 8
            years”)"
                date="apr18"
                readingTime={8}
                tag="programming"
                userName="ellen litman"
              />
              <PostItem
                onBookmark={showSignInModal}
                imageSrc="/jake.jpg"
                content="In the last couple of weeks, Russia withdrew its forces from around
          Kyiv and announced that its true goal is to “liberate” Donbas, which"
                title="Telegram Chronicles: Donbas and its War (a.k.a. “the last 8
            years”)"
                date="apr18"
                readingTime={8}
                tag="programming"
                userName="ellen litman"
              />
              <PostItem
                onBookmark={showSignInModal}
                imageSrc="/jake.jpg"
                content="In the last couple of weeks, Russia withdrew its forces from around
          Kyiv and announced that its true goal is to “liberate” Donbas, which"
                title="Telegram Chronicles: Donbas and its War (a.k.a. “the last 8
            years”)"
                date="apr18"
                readingTime={8}
                tag="programming"
                userName="ellen litman"
              />
            </ul>
          </div>
        </div>
      </section>
      {isModalVisible && (
        <AuthModal signIn={showSignIn} hideModal={hideModal} />
      )}
    </>
  );
};

export default Authorized;
