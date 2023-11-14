// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { driveToYt } from '@/features/actions';
import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = req.body;
  try {
    
    driveToYt(data.access_token);
    res.status(200).json({ result: "video uploading to youtube :)"});
  } catch (error) {
    res.status(401).json(error)
  }
}
