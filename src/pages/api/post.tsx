import { NextApiHandler } from 'next'
import { prisma } from '../../lib/prisma'

const handler: NextApiHandler = async (req, res) => {


  if (req.method === 'POST') return res.status(404).end()

  const key = (process.env.POST_KEY);
  const count = await prisma.post.count()
 
  return res.status(200).json({
    date: key,
    count,
  })
}

export default handler;