import NextAuth from 'next-auth/next';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import connectToDb from '../../../lib/connectToDb';
import User from '../../../models/user';
import { Session, User as UserType } from '../../../typings';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID as string,
      clientSecret: process.env.FACEBOOK_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        await connectToDb();
        const existingUser: UserType | null = await User.findOne({
          socialId: user.id,
        });
        if (existingUser) return token;
        const newUser = new User({
          username: user.name,
          email: user.email,
          image: user.image,
          // to check if this account was registered before or not
          /* note that the check is based on the social id not the email so if the user have registered himself with same email in facebook and google and github can still register here with 3 different accounts */
          socialId: user.id,
          following: [],
        });

        try {
          await newUser.save();
          console.log(user);
          console.log(newUser);
        } catch (err) {
          throw new Error('Something went wrong, please try again later.');
        }
      }
      return token;
    },
    async session({ session, user, token }) {
      let existingUser;
      try {
        existingUser = await User.findOne({ email: session?.user?.email });
        return {
          expires: session.expires,
          user: { ...session.user, _id: existingUser._id },
        };
      } catch (err) {
        console.log(err);
      }
      return session;
    },
  },
});
