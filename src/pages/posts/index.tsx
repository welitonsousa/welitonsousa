import PostsList from "@/components/posts-list";
import { getPosts } from "@/lib/posts";
import Head from 'next/head';


export default function PostsPage({ posts }: { posts: { slug: string; title: string; description: string }[] }) {
  return (
    <>
      <Head>
        <title>Posts</title>

        <meta
          name="description"
          content="Uma coleção de posts, anotações e aprendizados sobre desenvolvimento, tecnologia e outros assuntos relacionados."
        />
      </Head>
     
      <PostsList posts={posts} endpoint="posts"/>
    </>
  );
  
}
export async function getServerSideProps({
}: { params: { slug: string }}) {
  const posts = await getPosts();
  return { props: { posts } };
}