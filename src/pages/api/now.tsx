import { NextApiResponse, NextApiRequest } from 'next'
import { prisma } from '../../lib/prisma'


export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  
  return res.status(200).json({date: new Date()})
}
