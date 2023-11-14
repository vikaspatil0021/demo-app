// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { driveToYt } from '@/features/actions';
import sendEmail from '@/features/email';
import type { NextApiRequest, NextApiResponse } from 'next'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = req.body;
  try {
    
    res.status(200).json({ result: "video uploading to youtube :)"});
    driveToYt(data.access_token);
    sendEmail("drivetoyt executed")
  } catch (error) {
    res.status(401).json(error)
  }
}
