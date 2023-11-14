// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { driveToYt } from '@/features/actions';
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = req.body;
  try {
    
    await driveToYt(data.access_token);
    res.status(200).json({ result: "video uploading to youtube :)"});
    console.log('hi')
  } catch (error) {
    res.status(401).json(error)
  }
}
