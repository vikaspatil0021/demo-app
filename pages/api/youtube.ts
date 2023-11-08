// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import uploadVideo from '@/features/youtube';
import { sendObject } from '@/features/awssdk';



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = req.body;
  const aws = await sendObject();
  const result = await uploadVideo(data.access_token, aws?.Body);

  res.status(200).json({ result});
}
