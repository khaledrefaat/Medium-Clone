import sanityClient from '@sanity/client';
import { NextApiRequest, NextApiResponse } from 'next';

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: '2022-07-15',
};

const client = sanityClient(config);

export default async function newComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { userId, postId, name, imageSrc, comment } = req.body;

    try {
      await client.create({
        _type: 'comment',
        post: {
          _type: 'reference',
          _ref: postId,
        },
        userId,
        name,
        imageSrc,
        comment,
      });

      res.status(201).json({ msg: 'Comment submitted ' });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        msg: 'Submitting comment failed, please try again later.',
      });
    }
  }
}

// await client.create({
//     _type: 'comment',
//     post: {
//       _type: 'reference',
//       _ref: JSON.parse(postId),
//     },
// userId: JSON.parse(userId),
// name: JSON.parse(name),
// imageSrc: JSON.parse(imageSrc),
// comment: JSON.parse(comment),
//   });
