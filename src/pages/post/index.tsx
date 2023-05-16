/* eslint-disable react-hooks/exhaustive-deps */

import Head from "../../components/core/head"
import Header from "../../components/core/header"
import { IPost } from "../../interfaces/IPost"
import Image from 'next/image'
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react";

interface Props { posts: IPost[] }

export default function PostsPage({ posts }: Props) {
  const [postsList, setPosts] = useState<IPost[]>([])
  const [search, setSearch] = useState<string>('')


  useEffect(() => {
    setPosts(posts)
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


      <main className="pt-4 grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 justify-items-center gap-2">
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
      </main>
    </div>
  </div>
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/post')
  const data = await response.json()
  const posts = []
  if (data.posts) posts.push(...data.posts)

  return {
    props: {
      posts: posts
    }
  }
}

