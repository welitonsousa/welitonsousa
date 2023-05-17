/* eslint-disable react-hooks/exhaustive-deps */

import Head from "../../components/core/head"
import Header from "../../components/core/header"
import { IPost } from "../../interfaces/IPost"
import Image from 'next/image'
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react";
import { Prisma } from "../../lib/prisma"
import Visibility from "../../components/visibility"

interface Props { posts: IPost[] }

export default function PostsPage({ posts }: Props) {
  const [postsList, setPosts] = useState<IPost[]>([])
  const [search, setSearch] = useState<string>('')


  useEffect(() => {
    setPosts(posts ?? [])
  }, [])

  const router = useRouter()
  function gotoPost(post: IPost) {
    router.push('/post/' + encodeURI(post.title))
  }
  function filterPosts(e: IPost) {
    return e.title?.toLowerCase().includes(search.toLowerCase()) || e.smallDescription?.toLowerCase().includes(search.toLowerCase())
  }

  return <div className="flex row justify-center">
    <div className="max-w-5xl w-full p-4">
      <Head image={null} title="Posts" content="Veja os posts disponíveis neste site" />
      <Header title="" action="" >
        <input value={search} onChange={v => setSearch(v.target.value)} type="text" placeholder="Pesquisar..." className="border-white bg-slate-800 px-4 py-2 rounded-full" />

      </Header>
      <hr />

      <Visibility if={!postsList.length}>
        <div className="w-full flex justify-center pt-[20%]">

          <Image
            src="/empty.png"
            alt="not found post"
            width={200}
            height={200}
            className="rounded-t-md"
          />
        </div>
        <h2 className="text-center">Nenhum post encontrado</h2>
      </Visibility>
      <main className="pt-4 grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 justify-items-center gap-2">


        <Visibility if={!!postsList.length}>
          {postsList.filter(filterPosts).flatMap((post: IPost, index) => {
            return <div
              className="w-full h-96 bg-slate-800 rounded-md hover:bg-slate-700 cursor-pointe"
              onClick={() => gotoPost(post)}
              key={index}>

              <Image
                src={post.image as string}
                alt={post.title}
                width={100}
                height={100}
                className="rounded-t-md w-full h-1/2 object-cover"
              />
              <div className="h-1/2 p-2 overflow-hidden">
                <h4 className="text-[1.5rem]">{post.title}</h4>
                <p>{post.smallDescription} {post.smallDescription} </p>
              </div>
            </div>
          })}
        </Visibility>

      </main>
    </div>
  </div>
}

export async function getStaticProps() {
  const posts = await Prisma.instance.cliente.post.findMany({
    orderBy: { id: 'desc' },
    include: {
      descriptions: {
        orderBy: { id: 'desc' }
      }
    },
  })

  return {
    props: {
      posts: posts.map((e) => ({ ...e, createdAt: '' }))
    }
  }
}

