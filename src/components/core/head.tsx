import Head from "next/head"

interface Props {title: string, content: string | null, image: string | null | undefined}

export default function AppHead(props: Props) {
  return <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.content || 'portfolio'} />
    <meta property="og:image" content={props.image || '/logo.png'} />
    <link rel="icon" href="/favicon.ico" />
  </Head>

}