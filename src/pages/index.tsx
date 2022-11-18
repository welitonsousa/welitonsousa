import Head from 'next/head'
import Image from 'next/image'
import AppCard from '../components/AppCard'
import Divider from '../components/Divider'
import ProjectCard from '../components/ProjectCard'
import { Project } from '../interfaces/IProject'
import { Social } from '../interfaces/ISocial'
import { Tec } from '../interfaces/ITec'
import { toast } from 'react-toastify';


interface Props {
  description: string[]
  image: string
  projects: Project[]
  social: Social[]
  tecs: Tec[]
}

const handleClickSocialMedia = (social: Social) => {
  if (social.link.includes('@')) {
    navigator.clipboard.writeText(social.link)
    toast(`Email copiado para area de transferência\n${social.link}`)
  }else {
    window.open(social.link, '_blank');
  }
  
}

export default function Home(props: Props) {
  return (
    <div className='flex row justify-center'>

      <Head>
        <title>Weliton Sousa</title>
        <meta name="description" content="Weliton Sousa - portfolio" />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='p-10 max-w-5xl '>
        <main  >
          <div className='grid justify-items-center'>
            <Image
              src='https://github.com/welitonsousa.png'
              alt="foto do github de weliton sousa"
              className='rounded-full'
              priority={true}
              width={200} height={200}
            />
            <h1 className='text-center text-[30px]'>Weliton Sousa</h1>
            <div className='text-center leading-6'>
              <h2>Olá, meu nome é Weliton de Sousa Araújo👋</h2><br />
              <p> Sou aluno da universidade federal do Piauí e Desenvolvedor de software (sites e aplicativos)</p><br />
              <p>Apaixonado por programação e fascinado em descobrir novas tecnologias. Atualmente estou trabalhando com Flutter e VueJs em um chat online, e levo muito a sério o paradigma de orientação a objetos</p>
            </div>
          </div>
        </main>

        <section className='divide-red-100 py-5'>
          <Divider title='Tecnologias' />
          <div className='grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-5 justify-items-center pt-4 gap-2'>
            {props.tecs.map((e, index) => (<AppCard
              title={e.name}
              key={index}
              onClick={undefined}
              backgroundColor={e.bg}
            />)
            )}
          </div>
        </section>

        <section className='divide-red-100 py-5'>
          <Divider title='Projetos' />
          <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 justify-items-center pt-4 gap-2'>
            {props.projects.map((e, index) => (<ProjectCard
              project={e}
              key={index}
            />)
            )}
          </div>
        </section>

        <footer className='pt-20'>
          <Divider title='Sociais' />
          <span>Entre em contato comigo através de uma de minhas redes sociais 😄</span>
          <div className='grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-5 justify-items-center pt-4 gap-2'>
            {props.social.map((e, index) => (
              <AppCard
                key={index}
                onClick={() => handleClickSocialMedia(e)}
                title={e.name}
                backgroundColor={e.bg}
              />
            ))}
          </div>
        </footer>
      </div>

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://raw.githubusercontent.com/welitonsousa/welitonsousa/master/profile.json')
  const data = await res.json()

  return {
    props: data
  }
}
