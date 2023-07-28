import { NextApiHandler } from 'next'
import { IPost } from '../../../interfaces/IPost'
import { Prisma } from '../../../lib/prisma'



const _get: NextApiHandler = async (_, res) => {
  try {
    const posts = await Prisma.instance.cliente.post.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        descriptions: {
          orderBy: { id: 'desc' }
        }
      }
    })
    return res.json({ posts })
  } catch (e) {
    return res.status(500).json({ message: "Erro ao retornar os posts" })
  }
}

const _post: NextApiHandler = async (req, res) => {
  try {
    const post = req.body as IPost
    if (req.body.key != process.env.POST_KEY) return res.status(401).end()

    const response = await Prisma.instance.cliente.post.create({
      data: {
        image: post.image as string,
        title: post.title,
        domain: post.domain,
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
    console.log(e)
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

