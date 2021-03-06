import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import RecommendedTopicItem from './RecommendedTopicItem';
import TodayPostsItem from './TodayPostsItem';
import UserItem from './UserItem';
import { Author, Topic } from '../../typings';
import { sanityClient } from '../../lib/sanity.server';
import { urlFor } from '../../lib/sanity';

const SuggestBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      window.addEventListener('scroll', () => {
        const offset = window.scrollY;
        if (offset > 500) setIsScrolled(true);
        else setIsScrolled(false);
      });
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      // fetch just 3 authors
      const authorQuery = `
      *[_type == 'author'][0..2] {
        _id,
        bio,
        image,
        name
      }`;
      // fetch just 7 topics
      const topicQuery = `
      *[_type == 'category'][0..6] {
        _id,
        title
      }
      `;

      try {
        const authors = await sanityClient.fetch(authorQuery);
        const topics = await sanityClient.fetch(topicQuery);

        setAuthors([authors[0], authors[1]]);
        setTopics(topics);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={`hidden lg:block p-6 h-full xl:p-10 border-l relative`}>
      <div className="bg-black text-white font-medium rounded-full py-2 xl:px-20 w-full text-center">
        Get unlimited access
      </div>
      <div className="mt-7 border py-1 px-2 rounded-3xl relative pl-10">
        <input type="text" placeholder="Search" className="outline-none" />
        <div className=" absolute top-2 left-2 z-10">
          <Image src="/icons/search.svg" alt="search" height="20" width="20" />
        </div>
      </div>
      <div>
        <ul className="mt-7">
          <li className="relative">
            <Link href="/trending">
              <a className="capitalize font-medium ml-4">
                what we're reading today
              </a>
            </Link>
            <div className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-green-600" />
          </li>
          <TodayPostsItem
            title="It???s Time For ???Maximum Viable Product???"
            topic="Debugger"
            author="Jake Thompson"
            src="/jake.jpg"
            slug="/post/it-is-time-for-maximum-viable-product"
          />
          <TodayPostsItem
            title="It???s Time For ???Maximum Viable Product???"
            topic="Debugger"
            author="Jake Thompson"
            src="/jake.jpg"
            slug="/post/it-is-time-for-maximum-viable-product"
          />
          <TodayPostsItem
            title="It???s Time For ???Maximum Viable Product???"
            topic="Debugger"
            author="Jake Thompson"
            src="/jake.jpg"
            slug="/post/it-is-time-for-maximum-viable-product"
          />
          <li className="mt-5 cursor-pointer">
            <p className="text-green-600 text-sm">See the full list</p>
          </li>
        </ul>
        <h4 className="font-medium mt-7">Recommended Topics</h4>
        <div className={`${isScrolled && 'fixed top-0 w-full bottom-0'}`}>
          <div>
            <ul className="flex flex-wrap justify-start max-w-xs">
              {topics.map(({ _id, title }) => (
                <RecommendedTopicItem topic={title} key={_id} />
              ))}

              {/* <RecommendedTopicItem topic="Art" />
              <RecommendedTopicItem topic="Business" />
              <RecommendedTopicItem topic="Money" />
              <RecommendedTopicItem topic="Mindfulness" />
              <RecommendedTopicItem topic="Technology" /> */}
            </ul>
          </div>
          <div className="mt-7">
            <h3 className="font-medium">Who To Follow</h3>
            <ul>
              {authors.length > 0 &&
                authors.map(author => (
                  <UserItem
                    key={author._id}
                    user={author.name}
                    description={author.bio[0].children[0].text}
                    imageSrc={
                      urlFor(author.image.asset._ref).url().split('?rect')[0]
                    }
                  />
                ))}
              <li className="mt-5">
                <Link href="/post/trending">
                  <a className="text-green-600 text-sm ">
                    See more suggestions
                  </a>
                </Link>
              </li>
            </ul>
            <div className="max-w-xs mt-7">
              <h3 className="font-medium">Reading list</h3>
              <p className="text-large mt-3 text-sm font-medium text-gray-500">
                Click the
                <Image
                  src="/icons/add-bookmark.svg"
                  alt="bookmark"
                  height="15"
                  width="15"
                />
                on any story to easily add it to your reading list or a custom
                list that you can share.
              </p>
            </div>
            <div className="mt-5 mb-16 flex flex-wrap max-w-xs justify-start items-center">
              <p className="text-xs font-medium ml-1 text-gray-500">Help</p>
              <p className="text-xs font-medium ml-1 text-gray-500">Status</p>
              <p className="text-xs font-medium ml-1 text-gray-500">Writers</p>
              <p className="text-xs font-medium ml-1 text-gray-500">Blog</p>
              <p className="text-xs font-medium ml-1 text-gray-500">Careers</p>
              <p className="text-xs font-medium ml-1 text-gray-500">Privacy</p>
              <p className="text-xs font-medium ml-1 text-gray-500">Terms</p>
              <p className="text-xs font-medium ml-1 text-gray-500">About</p>
              <p className="text-xs font-medium ml-1 text-gray-500">Knowable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestBar;
