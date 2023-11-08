// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { putImage } from '@/features/awssdk';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { Key,ContentType} = req.body;
  

    const url   = await putImage(Key,ContentType);

    res.status(200).json({url});

}
