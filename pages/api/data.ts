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
        fileId:"1OZgdY60b3b5cUWsc1UEwxIqiroM6Dngc"
        
    });
  } catch (error) {
    res.status(401).json(error)
  }
}
