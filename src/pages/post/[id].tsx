import { GetStaticPaths, GetStaticProps } from 'next'
import Head from '../../components/core/head'
import Header from '../../components/core/header'
import { IPost } from '../../interfaces/IPost'
import Image from 'next/image'
import Footer from '../../components/core/footer'
import Visibility from '../../components/visibility'
import SyntaxHighlighter  from "react-syntax-highlighter";
import { dracula } from '../../styles/dracula'
import { Formatters } from '../../utils/formatters'
interface Props { post: IPost }

export default function PostPage({ post }: Props) {
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
        <h3 className='pb-2'>{post.smallDescription}</h3>
        <hr className='py-4' />

        {post.descriptions.map((desc, index) => (
          <div key={index}>
            <h4 className='text-[1.2rem] font-bold '>{desc.title}</h4>
            <p className='py-2'>{desc.description}</p>

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
  const response = await fetch('http://localhost:3000/api/post/')
  const data = await response.json()
  const ids = data.posts.map((e: IPost) => ({
    params: { id: e.title }
  }))

  return {
    fallback: false,
    paths: ids,
  }
}


export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id
  const response = await fetch(`http://localhost:3000/api/post/${id}`)
  const data = await response.json()

  return {
    props: { post: data.post },
  }
}