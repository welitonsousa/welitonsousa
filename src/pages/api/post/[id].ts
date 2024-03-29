import { NextApiHandler } from "next";
import { Prisma } from "../../../lib/prisma";

const handler: NextApiHandler = async (req, res) => {
  try {
    const id = req.query.id
    if (!id) throw new Error("");

    const post = await Prisma.instance.cliente.post.findFirst({
      where: { title: id as string },
      include: {
        descriptions: {
          orderBy: {id: 'desc'}
        }
      },
    })
    if (!post) return res.status(404).json({ message: 'Post não encontrado' })
    return res.json({
      message: "Post encontrado",
      post
    })


  } catch (e) {
    return res.status(500).json({ message: "Não foi possível retornar este post" })
  }
}
export default handler