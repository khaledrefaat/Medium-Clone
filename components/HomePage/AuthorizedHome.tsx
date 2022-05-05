import Image from 'next/image';
import { useState } from 'react';
import AuthorizedPostItem from '../post/AuthorizedPostItem';
import Divider from '../Ui/Divider';
import UserItem from './UserItem';

const UnAuthorizedHome = () => {
  const [showMoreMenu, setShowMoreMenu] = useState(true);

  const showMore = () => setShowMoreMenu(true);
  const hideMore = () => setShowMoreMenu(false);

  console.log(showMoreMenu);

  return (
    <>
      <section onClick={hideMore} className="pt-14 lg:pt-0 h-auto">
        <div className="container mt-10">
          <div className="flex items-center">
            <div className="p-1 rounded-full bg-gray-100 flex items-center mr-2">
              <Image src="/icons/add.svg" height="28" width="28" />
            </div>
            <p>Keep up with the latest in any topic</p>
          </div>
          <ul className="flex mt-7">
            <UserItem
              href="/user/nicolas"
              src="/nicolas.jpg"
              userName="nicolas Vora"
              followers="1.8k"
              description="Senior software developer. Currently teaching 200,000+ developers around the world modern skills. Say hi @andreineagoie or"
              className="mr-3"
              isFirst
            />
            <UserItem
              href="/user/sigmund"
              src="/sigmund.jpg"
              userName="sigmund zheng"
              followers="1.3k"
              description="Senior software developer. Currently teaching 200,000+ developers around the world modern skills. Say hi @andreineagoie or"
              className="mr-3"
            />
            <UserItem
              href="/user/jake"
              src="/jake.jpg"
              userName="jake maslov"
              followers="3.1k"
              description="Senior software developer. Currently teaching 200,000+ developers around the world modern skills. Say hi @andreineagoie or"
            />
          </ul>
        </div>
      </section>

      <section onClick={hideMore}>
        <div className="container">
          <div>
            <button className="mr-10 text-gray-600">Following</button>
            <button className=" text-gray-600">Recommended</button>
          </div>

          <Divider className="my-5" />

          <div>
            <AuthorizedPostItem
              showMore={showMore}
              showMoreMenu={showMoreMenu}
            />
            <Divider className="my-3" />
            <AuthorizedPostItem
              showMore={showMore}
              showMoreMenu={showMoreMenu}
            />
            <Divider className="my-3" />
            <AuthorizedPostItem
              showMore={showMore}
              showMoreMenu={showMoreMenu}
            />
            <Divider className="my-3" />
            <AuthorizedPostItem
              showMore={showMore}
              showMoreMenu={showMoreMenu}
            />
            <Divider className="my-3" />
            <AuthorizedPostItem
              showMore={showMore}
              showMoreMenu={showMoreMenu}
            />
            <Divider className="my-3" />
            <AuthorizedPostItem
              showMore={showMore}
              showMoreMenu={showMoreMenu}
            />
            <Divider className="my-3" />
            <AuthorizedPostItem
              showMore={showMore}
              showMoreMenu={showMoreMenu}
            />
            <Divider className="my-3" />
            <AuthorizedPostItem
              showMore={showMore}
              showMoreMenu={showMoreMenu}
              isLast
            />
            <Divider className="my-3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default UnAuthorizedHome;
