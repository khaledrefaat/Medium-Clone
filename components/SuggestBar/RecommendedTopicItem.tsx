import Link from 'next/link';

const RecommendedTopicItem: React.FC<{ topic: string }> = ({ topic }) => {
  return (
    <li className="px-3 py-1 rounded-3xl bg-gray-200 hover:bg-gray-300 transition mr-3 mt-3">
      <Link href={`/tag/${topic.toLowerCase()}`}>
        <a className="capitalize">{topic}</a>
      </Link>
    </li>
  );
};

export default RecommendedTopicItem;
