import NextAuth from 'next-auth/next';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import connectToDb from '../../../lib/connectToDb';
import User from '../../../models/user';

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
        const existingUser = await User.findOne({ userId: user.id });
        if (existingUser) {
          return token;
        }

        const newUser = new User({
          username: user.name,
          email: user.email,
          image: user.image,
          userId: user.id,
        });

        try {
          await newUser.save();
        } catch (err) {
          throw new Error('Something went wrong, please try again later.');
        }
        return token;
      }
      return token;
    },
  },
});
