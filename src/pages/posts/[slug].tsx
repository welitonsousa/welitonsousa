import Head from 'next/head';
import {getPost} from '@/lib/posts';

interface Props {
  post: {
    title: string;
    description?: string;
    contentHtml: string;
  };
}

export async function getServerSideProps({
  params
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) return { notFound: true };
  return { props: { post } };
}

export default function PostPage({
  post,
}: Props) {
  return (
    <>
      <Head>
        <title>{post.title}</title>

        <meta
          name="description"
          content={post.description ?? ''}
        />
      </Head>
     
      <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-slate-900/5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/10 sm:p-10">
        <div
          className="prose prose-slate mt-6 max-w-none prose-headings:scroll-mt-24 prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline dark:prose-invert dark:prose-a:text-sky-400"
          dangerouslySetInnerHTML={{
            __html: post.contentHtml,
          }}
        />
      </article>
    </>
  );
}
