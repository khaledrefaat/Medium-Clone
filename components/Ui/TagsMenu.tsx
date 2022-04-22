import React, { useEffect, useState } from 'react';
import TagItem from './TagItem';

const TagsMenu = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log('working');
      window.addEventListener('scroll', () => {
        const offset = window.scrollY;
        if (offset > 850) setIsScrolling(true);
        else setIsScrolling(false);
      });
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <ul
      className={`list-none flex justify-center flex-wrap lg:ml-3 ${
        isScrolling ? 'lg:w-1/3 lg:fixed lg:z-10 top-28' : ''
      }`}
    >
      <h3 className="w-full text-center font-semibold uppercase">
        discover more of what matters
      </h3>
      <TagItem title="self" link="/tag/self" />
      <TagItem title="relationships" link="/tag/relationships" />
      <TagItem title="data science" link="/tag/data-science" />
      <TagItem title="programming" link="/tag/programming" />
      <TagItem title="productivity" link="/tag/productivity" />
      <TagItem title="javascript" link="/tag/javascript" />
      <TagItem title="machine learning" link="/tag/machine-learning" />
      <TagItem title="politics" link="/tag/politics" />
      <TagItem title="health" link="/tag/health" />
    </ul>
  );
};

export default TagsMenu;
