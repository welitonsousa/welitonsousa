
import Head from "../../components/core/head"
import Header from "../../components/core/header"
import { IPost } from "../../interfaces/IPost"
import Image from 'next/image'
import { useRouter } from "next/router"
import { prisma } from "../../lib/prisma"
interface Props {posts: IPost[]}

export default function PostsPage({ posts }: Props) {

  const router = useRouter()
  function gotoPost(post: IPost) {
    router.push('/post/'+encodeURI(post.title))
  }

  return <div className="flex row justify-center">
    <div className="max-w-5xl w-full p-4">
      <Head image={null} title="Posts" content="Veja os posts disponíveis neste site" />
      <Header title="" action="" />
      <hr />
      <main className="pt-4 grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 justify-items-center gap-2">
        {posts.flatMap((post, index) => {
          return <div
            className="w-full h-96 bg-slate-700 rounded-md hover:bg-slate-800"
            onClick={() => gotoPost(post)}
            key={index}>
            <Image
              src={post.image as string}
              alt={post.title}
              width={100}
              height={100}
              className="rounded-t-md w-full h-52 object-cover"
            />
            <div className="p-2">
              <h4 className="text-[1.5rem]">{post.title}</h4>
              <p>{post.smallDescription}</p>
            </div>
          </div>
        })}
      </main>
    </div>
  </div>
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/post')
  const data = await response.json()

  console.log('================================================')
  console.log(data);
  console.log('================================================')
  return {
    props: {
      posts: [...data.posts]
    }
  }
}