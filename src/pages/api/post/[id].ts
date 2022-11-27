import { NextApiHandler } from "next";
import { prisma } from "../../../lib/prisma";
import { Formatters } from "../../../utils/formatters";

const handler: NextApiHandler = async (req, res) => {
  try {
    const id = req.query.id
    if (!id) throw new Error("");

    const post = await prisma.post.findFirst({
      include: {
        descriptions: {
          orderBy: {
            id: 'asc'
          }
        }
      },
      where: {
        title: id as string,

      }
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