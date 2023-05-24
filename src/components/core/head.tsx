import Head from "next/head"

interface Props {title?: string, content: string | null, image: string | null | undefined}

export default function AppHead(props: Props) {
  return <Head>
    <title>{props.title ? `welitonsousa.shop - ${props.title}`: 'welitonsousa.shop'}</title>
    <meta name="description" content={props.content || 'Weliton Sousa - Blog sobre tecnologias'} />
    <meta property="og:image" content={props.image || 'https://welitonsousa.shop/logo.png'} />
    <link rel="icon" href="/favicon.ico" />
  </Head>

}