import Image from 'next/image';
import Link from 'next/link';

interface TodayPostsItemProps {
  className?: string;
  topic: string;
  author: string;
  title: string;
  src: string;
  slug: string;
}

const TodayPostsItem: React.FC<TodayPostsItemProps> = ({
  className,
  topic,
  author,
  title,
  src,
  slug,
}) => {
  return (
    <li className={`${className && className} mt-4`}>
      <div className="flex mb-1">
        <div className="-ml-1 mr-2">
          <Image
            src={src}
            height="25"
            width="25"
            className="rounded-full -ml-5"
          />
        </div>
        <p className="capitalize">
          {author} <span className=" font-light">In</span> {topic}
        </p>
      </div>
      <Link href={slug}>
        <a className="font-bold">{title}</a>
      </Link>
    </li>
  );
};

export default TodayPostsItem;
