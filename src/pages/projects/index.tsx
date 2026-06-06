import PostsList from "@/components/posts-list";
import Head from "next/head";
import { getPosts } from "@/lib/posts";


export default function PostsPage({ posts }: { posts: { slug: string; title: string; description: string }[] }) {
  return (
    <>
      <Head>
        <title>Projetos</title>

        <meta
          name="description"
          content="Uma coleção de projetos desenvolvidos ao longo do tempo."
        />
      </Head>
      <PostsList posts={posts} title="Projetos" description="Uma coleção de projetos desenvolvidos ao longo do tempo." endpoint="/projects" />
    </>
  );
  
}
export async function getServerSideProps({
}: { params: { slug: string }}) {
  const posts = await getPosts("projects");
  return { props: { posts} };
}