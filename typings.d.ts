import { Session } from 'next-auth';

export interface Session extends Session {
  user: {
    name: string;
    email: string;
    image: string;
  };
  expires: string;
}
