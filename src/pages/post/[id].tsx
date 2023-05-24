import { GetStaticPaths, GetStaticProps } from 'next'
import { IPost } from '../../interfaces/IPost'
import { dracula } from '../../styles/dracula'
import { Prisma } from '../../lib/prisma'
import Head from '../../components/core/head'
import Header from '../../components/core/header'
import Image from 'next/image'
import Footer from '../../components/core/footer'
import Visibility from '../../components/visibility'
import SyntaxHighlighter from "react-syntax-highlighter";

interface Props { post: IPost }

export default function PostPage({ post }: Props) {
  if (!post) return <div className='flex justify-center p-4'>
    <h2>Post não encontrado</h2>
  </div>

  return <div className='flex justify-center p-4'>
    <Head content={post.smallDescription} title={post.title} image={post.image as string | null | undefined} />
    <div className='max-w-5xl w-full'>
      <Header action='/post' title="Ver outros posts"></Header>
      <hr />
      <main className='flex flex-col pt-4 text-justify'>
        <Image
          src={post.image as string}
          alt={post.title}
          width={100}
          height={100}
          className="rounded-md w-full h-80 object-cover"
        />
        <h1 className='text-[2rem] pt-4'>{post.title}</h1>
        <h2 className='text-[1.4rem] pb-2'>{post.smallDescription}</h2>
        <hr className='py-4' />

        {post.descriptions.map((desc, index) => (
          <div key={index}>
            <Visibility if={!!desc.title}>
              <h3 className='text-[1.4rem] pt-4 font-bold '>{desc.title}</h3>
            </Visibility>
            <Visibility if={!!desc.description}>
              <p className='py-2' dangerouslySetInnerHTML={{__html: desc.description!}}></p>
            </Visibility>

            <Visibility if={!!desc.image}>
              <Image
                src={desc.image as string}
                alt={post.title}
                width={200}
                height={200}
                className="rounded-t-md"
              />
            </Visibility>

            <Visibility if={!!desc.code}>
              <div className='py-4'>
                <SyntaxHighlighter language={desc.lang!} style={dracula as any} >
                  {desc.code!}
                </SyntaxHighlighter>
              </div>
            </Visibility>

            <Visibility if={!!desc.link}>
              <a href={desc.link!}
                target="_blank"
                className='text-blue-300 underline'
                rel="noreferrer">
                {desc.link}
              </a>
            </Visibility>


          </div>
        ))}

        <Visibility if={!!post.externalLink}>
          <div>
            <button className='button-primary'>
              Acesse este projeto
            </button>
          </div>
        </Visibility>

        <Footer />
      </main>
    </div>
  </div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await Prisma.instance.cliente.post.findMany({
    orderBy: { id: 'desc' },
    include: {
      descriptions: {
        orderBy: { id: 'desc' }
      }
    },
  })
  const ids = posts.map((e) => ({
    params: { id: e.title }
  }))

  return {
    fallback: false,
    paths: ids,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id
  const title = decodeURI(id?.toString() ?? '')
  const post = await Prisma.instance.cliente.post.findFirst({
    where: { title },
    include: {
      descriptions: {
        orderBy: { id: 'asc' }
      }
    },
  })
  return {
    props: {post: {...post, createdAt: post?.createdAt.toISOString() }},
    revalidate: 60,
  }
}