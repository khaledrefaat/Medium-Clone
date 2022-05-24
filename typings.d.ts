import { Session } from 'next-auth';

export interface Session extends Session {
  user: {
    name: string;
    email: string;
    image: string;
    id: string;
  };
  expires: string;
}

interface Author {
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  name: string;
}

interface Category {
  _key: string;
  _ref: string;
  _type: string;
}

interface Body {
  _key: string;
  _type: string;
  children: { _key: string; _type: string; marks: []; text: string }[];
  markDefs: [];
  style: string;
}

interface MainImage {
  _type: string;
  asset: { _ref: string; _type: string };
  crop: {
    _type: string;
    bottom: string | number;
    left: string | number;
    right: string | number;
    top: string | number;
  };
  hotspot: {
    _type: string;
    height: string;
    width: string;
    x: string;
    y: string;
  };
}

export interface Post {
  _id: string;
  author: Author;
  categories: Category[];
  body: Body;
  description: string;
  mainImage: MainImage;
  slug: { _type: string; current: string };
  title: string;
  _createdAt: string;
}
