import { NextApiHandler } from 'next'
import { IPost } from '../../../interfaces/IPost'
import { prisma } from '../../../lib/prisma'

const _get: NextApiHandler = async (_, res) => {
  try {
    const response = await prisma.post.findMany({
      orderBy: {createdAt: 'desc'},
      include: {
        descriptions: {
          orderBy: {
            id: 'desc'
          }
        }
      }
    })

    return res.send({
      posts: response
    })

  } catch (e) {

    return res.status(500).json({ message: "Erro ao retornar os posts" })
  }
}

const _post: NextApiHandler = async (req, res) => {
  try {
    const post = req.body as IPost
    if (req.body.key != process.env.POST_KEY) return res.status(401).end()

    const response = await prisma.post.create({
      data: {
        image: post.image as string,
        title: post.title,
        smallDescription: post.smallDescription,
        descriptions: {
          createMany: {
            data: post.descriptions.map((e) => ({
              code: e.code,
              link: e.link,
              lang: e.lang,
              title: e.title,
              description: e.description,
              image: e.image as string | undefined | null,
            }))
          }
        }
      }
    })
    return res.json({ message: "Novo post cadastrado", data: response })
  } catch (e) {
    return res.status(500).json({ message: "Não foi possível cadastrar este post" })
  }
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    _post(req, res)
  } else if (req.method === 'GET') {
    _get(req, res)
  } else {
    return res.status(404).end()
  }
}

export default handler;

