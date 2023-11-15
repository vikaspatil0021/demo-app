// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ 
        title:"Zero to Hero",
        description:"First : 0 to1 and then : 1 to 100 in the journey of software developemnt",
        tags:["youtube","sdk","sooftware","aws"],
        fileId:"1_hhvGhU21jdB_gtzQ-xDkWILSMHmcQ_n"
    });
  } catch (error) {
    res.status(401).json(error)
  }
}
