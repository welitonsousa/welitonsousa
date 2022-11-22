import { GetStaticPaths, GetStaticProps } from 'next'

export default function PostPage () {
  return <div>
    post especifico
  </div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {params: {id: '2'}}
    ],
  }
}


export const getStaticProps: GetStaticProps = (context) => {
  return {
    props: { id: '2' }
  }
}