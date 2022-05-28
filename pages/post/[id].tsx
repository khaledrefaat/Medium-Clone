import PortableText from 'react-portable-text';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import MoreItem from '../../components/Ui/MoreItem';
import UserImage from '../../components/Ui/UserImage';
import { urlFor } from '../../lib/sanity';
import { sanityClient } from '../../lib/sanity.server';
import { formatDate, imageLoader } from '../../lib/util';
import { Post } from '../../typings';
import classes from './post.module.css';
import Comment from '../../components/comment/Comment';

import More from '../../components/icons/more.svg';
import FaceBook from '../../components/icons/facebook-gray.svg';
import Twitter from '../../components/icons/twitter.svg';
import AddBookmark from '../../components/icons/add-bookmark.svg';
import Linkedin from '../../components/icons/linkedin.svg';
import CommentIcon from '../../components/icons/comment.svg';
import Like from '../../components/icons/like.svg';

interface PostProps {
  post: Post;
}

const Post: NextPage<PostProps> = ({ post }) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [isCommentVisible, setIsCommentVisible] = useState(false);

  const hideMoreMenu = () => setShowMoreMenu(false);

  const toggleMore = (e: MouseEvent) => {
    e.stopPropagation();
    setShowMoreMenu(showMoreMenu => !showMoreMenu);
  };

  const showComment = () => setIsCommentVisible(true);

  const hideComment = () => setIsCommentVisible(false);

  const protableTextSerializer = {
    h1: (props: any) => <h1 className="text-2xl font-bold my-5" {...props} />,

    h2: (props: any) => <h2 className="text-xl font-bold my-5" {...props} />,
    li: ({ children }: any) => <li className="ml-4 list-disc"> {children} </li>,
    link: ({ href, children }: any) => (
      <a className="text-blue-500 hover-underline" href={href}>
        {children}
      </a>
    ),
  };

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section onClick={hideMoreMenu}>
        <div className="container mx-1 sm:mx-auto mt-10 mb-20 lg:mb-10 pt-14 lg:pt-0">
          <div className="w-full flex justify-between">
            <div className="flex items-center">
              <UserImage
                loader
                src={urlFor(post.author.image).url()}
                height={50}
                width={50}
              />
              <div className="ml-4">
                <Link href={`/user/${post.author._id}`}>
                  <a>{post.author.name}</a>
                </Link>
                <div>
                  <span className=" text-gray-600 text-xs md:text-sm capitalize">
                    {formatDate(post._createdAt)} &#xB7;
                  </span>
                  <span className="mx-2 text-gray-600 text-xs md:text-sm">
                    8min read .
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="https://www.facebook.com">
                <a target="_blank" className="mr-3">
                  <FaceBook className="w-5 h-5 fill-slate-500 hover:fill-slate-900" />
                </a>
              </Link>
              <Link href="https://www.twitter.com">
                <a target="_blank" className="mr-3">
                  <Twitter className="w-5 h-5 fill-slate-500 hover:fill-slate-900" />
                </a>
              </Link>
              <div className="mr-3 cursor-pointer">
                <AddBookmark className="w-5 h-5 fill-slate-500 hover:fill-slate-900" />
              </div>
              <Link href="https://www.linkedin.com">
                <a target="_blank" className="mr-3">
                  <Linkedin className="w-5 h-5 fill-slate-500 hover:fill-slate-900" />
                </a>
              </Link>
              <div
                className="cursor-pointer relative z-20 flex items-center"
                onClick={toggleMore}
              >
                <Image
                  alt="icon"
                  src="/icons/more.svg"
                  height={18}
                  width={18}
                />
                {showMoreMenu && <MoreItem />}
              </div>
            </div>
          </div>
          <article className="mt-10 w-full">
            <h1 className="font-black text-lg sm:text-xl md:text-2xl">
              {post.title}
            </h1>
            <div className={`${classes.image} my-8`}>
              <Image
                loader={imageLoader}
                src={urlFor(post.mainImage).url().split('?rect')[0]}
                alt="topic background"
                height="400"
                width="800"
                className="w-full"
              />
            </div>
            <div>
              <PortableText
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                content={post.body}
                serializers={protableTextSerializer}
              />
            </div>
          </article>
          <div className="flex justify-between w-full mt-10 items-center">
            <div className="flex items-center">
              <div className="flex items-center mr-8 cursor-pointer">
                <Like className="w-5 h-5 fill-slate-500 hover:fill-slate-800" />
                <span className="ml-1">295</span>
              </div>
              <div
                className="flex items-center cursor-pointer"
                onClick={showComment}
              >
                <CommentIcon className="w-5 h-5 fill-slate-500 hover:fill-slate-800" />
                <span className="ml-1">3</span>
              </div>
            </div>

            <div className="flex">
              <div className="mr-3 cursor-pointer">
                <More className="w-5 h-5 fill-slate-500 hover:fill-slate-800" />
              </div>
              <div className="cursor-pointer">
                <AddBookmark className="w-5 h-5 fill-slate-500 hover:fill-slate-800" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {isCommentVisible && <Comment hideComment={hideComment} />}
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == 'post'] {
    _id
   }`;

  const ids: { _id: string }[] = await sanityClient.fetch(query);

  const paths = ids.map(({ _id }) => ({ params: { id: _id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == 'post' && _id == '${params?.id}'][0] {
    title,
    author -> {name, image, _id},
    description,
    body,
    mainImage,
    slug,
    categories,
    _createdAt,
    _id
   }`;

  const post: Post = await sanityClient.fetch(query);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: post },
    revalidate: 60,
  };
};
