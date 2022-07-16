import { Session } from 'next-auth';

export interface User {
  name: string;
  email: string;
  image: string;
  _id: string;
  socialId: string;
}

export interface Session extends Session {
  user: User;
  expires: string;
}

export interface Topic {
  _id: string;
  title: string;
}

export interface Comment {
  comment: string;
  userId: string;
  imageSrc: string;
  _updatedAt: string;
  _id: string;
  name: string;
}

export interface Author {
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  name: string;
  _id: string;
  bio: { children: { text: string }[] }[];
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
  body: Body[];
  description: string;
  mainImage: MainImage;
  slug: { _type: string; current: string };
  title: string;
  _createdAt: string;
  comment: Comment[];
}

export interface Following {
  _id: string;
  image: { asset: { _ref: string } };
  name: string;
  bio: { children: { text: string }[] }[];
}
