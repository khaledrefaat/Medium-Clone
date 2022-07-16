import Image from 'next/image';
import { useEffect, useState } from 'react';
import { urlFor } from '../../lib/sanity';
import { formatDate } from '../../lib/util';
import { Following, Post } from '../../typings';
import AuthorizedPostItem from '../post/AuthorizedPostItem';
import DividerButton from '../Ui/DividerButton';
import SectionDivider from '../Ui/SectionDivider';
import UserItem from './UserItem';

const AuthorizedHome: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const [showMoreMenu, setShowMoreMenu] = useState(true);
  const [followingList, setFollowingList] = useState<Following[]>([]);

  const fetchFollowing = async () => {
    let followingList;
    try {
      const data = await fetch('http://localhost:3000/api/user/following');
      followingList = await data.json();
    } catch (err) {
      console.log(err);
    }

    if (followingList) {
      setFollowingList(followingList);
    }
  };

  useEffect(() => {
    fetchFollowing();
  }, []);

  const showMore = () => setShowMoreMenu(true);
  const hideMore = () => setShowMoreMenu(false);

  // learn how to make following list in react context

  return (
    <>
      <section onClick={hideMore}>
        <div className="container mt-10 pt-14 ml-2 sm:ml-auto lg:pt-0 h-auto">
          <div className="flex items-center">
            <div className="p-1 rounded-full bg-gray-100 flex items-center mr-2">
              <Image
                src="/icons/add.svg"
                height="28"
                width="28"
                alt="start to follow people"
              />
            </div>
            <p>Keep up with the latest in any topic</p>
          </div>
          <ul className="flex mt-7">
            {/* <UserItem
              href="/user/nicolas"
              src="/nicolas.jpg"
              userName="nicolas Vora"
              followers="1.8k"
              description="Senior software developer. Currently teaching 200,000+ developers around the world modern skills. Say hi Jake Maslov or"
              className="mr-3"
              isFirst
            />
            <UserItem
              href="/user/sigmund"
              src="/sigmund.jpg"
              userName="sigmund zheng"
              followers="1.3k"
              description="Senior software developer. Currently teaching 200,000+ developers around the world modern skills. Say hi Jake Maslov or"
              className="mr-3"
            />
            <UserItem
              href="/user/jake"
              src="/jake.jpg"
              userName="jake maslov"
              followers="3.1k"
              description="Senior software developer. Currently teaching 200,000+ developers around the world modern skills. Say hi Jake Maslov or"
            /> */}
            {/* {followingList.length > 0 &&
              followingList.map(item => (
                <UserItem
                  href={`/user/${item._id}`}
                  src={item.image.asset._ref}
                  userName={item.name}
                  key={item._id}
                  followers="3.1k"
                  description={item.bio[0].children[0].text}
                />
              ))} */}
          </ul>
        </div>
      </section>

      <section onClick={hideMore}>
        <div className="container ml-2 sm:ml-auto pb-10">
          <SectionDivider>
            <DividerButton active className="mr-8">
              following
            </DividerButton>
            <DividerButton>recommended</DividerButton>
          </SectionDivider>
          {posts.map(post => (
            <AuthorizedPostItem
              key={post._id}
              showMore={showMore}
              showMoreMenu={showMoreMenu}
              title={post.title}
              author={post.author.name}
              description={post.description}
              category="programming"
              tag="coding"
              readingTime={8}
              date={formatDate(post._createdAt)}
              id={post._id}
              // split('?rect') because i found that this rect is making a problem with nextImage (i did'nt find this rect with all images)
              authorImage={urlFor(post.author.image).url().split('?rect')[0]}
              mainImage={urlFor(post.mainImage).url().split('?rect')[0]}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AuthorizedHome;
