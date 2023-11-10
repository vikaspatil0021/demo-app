// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import gdrive from '@/features/drive';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = req.body;
  const result = await gdrive(data.access_token);

  res.status(200).json({ result});
}
