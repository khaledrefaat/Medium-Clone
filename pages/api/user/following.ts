import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import connectToDb from '../../../lib/connectToDb';
import User from '../../../models/user';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const secret = process.env.JWT_SECRET;

  const token = await getToken({ req, secret });

  const serverErrorMessage = 'Something went wrong, please try again later.';

  if (!token) {
    return res.status(500).json({ msg: serverErrorMessage });
  }
  await connectToDb();

  if (req.method === 'GET') {
    try {
      const user = await User.findOne({ email: token.email });
      return res.status(200).json({ followingList: user.following });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: serverErrorMessage });
    }
  }

  if (req.method === 'POST') {
    const { userId } = req.body;

    return res.status(201).json({ msg: userId });
  }
}
