// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import gdrive from '@/features/drive';
import uploadVideo from '@/features/youtube';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = req.body;
  const {videoBlob}:any = await gdrive(data.access_token);

  const result  = await uploadVideo(data.access_token,videoBlob);
  res.status(200).json({ result});
}
