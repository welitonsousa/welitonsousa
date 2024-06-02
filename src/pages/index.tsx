import { Project } from '../interfaces/IProject'
import { Social } from '../interfaces/ISocial'
import { Tec } from '../interfaces/ITec'
import { profileData } from '../constants/profile'
import { Formatters } from '../utils/formatters'
import { useRouter } from 'next/router'
import Image from 'next/image'
import AppCard from '../components/AppCard'
import Divider from '../components/Divider'
import ProjectCard from '../components/ProjectCard'
import AppHead from '../components/core/head'
import Footer from '../components/core/footer'
import Link from 'next/link'


export interface HomeProps {
  description: string[]
  image: string
  projects: Project[]
  social: Social[]
  tecs: Tec[]
}


export default function Home(props: HomeProps) {

  return (
    <div className='flex row justify-center'>

      <AppHead image={null} content={null} />

      <div className='p-10 max-w-5xl'>
        <main>
          <div className='grid justify-items-center'>
            <Image
              src='https://github.com/welitonsousa.png'
              alt="foto do github de weliton sousa"
              className='rounded-full'
              priority={true}
              width={200} height={200}
            />
            <h1 className='text-center text-[30px]'>Weliton Sousa</h1>
            <div className='text-justify leading-6 flex flex-col gap-4'>
              <p>Graduado em Sistemas de Informações pela Universidade Federal do Piauí (UFPI)</p>
              <p>Sou um Software developer e trabalho criando, refatorando e desenvolvendo novas features em sites e aplicativos desde 2018.</p>
              <p>Apaixonado por programação e fascinado em descobrir novas tecnologias. Atualmente estou trabalhando com <strong>Flutter e VueJs</strong> em um chat online em tempo real e integrado com WhatsApp na <Link className='text-[#0969da]' target='_blank' href={'https://www.fastzap.chat'}>Fastzap</Link>.</p>
              <p>Umas das coisas que mais amo na programação é o orientação a objetos, e levo muito a sério este paradigma.</p>
              <p>Sou um programador experiente e 
                gosto de trabalhar em equipe, sempre estou disposto a aprender e ensinar.
                Também conto com diversos projetos no portfólio, onde já publiquei apps construídos para IOS, Android, Windows, MacOS e IPadOS</p>
            </div>
            <Link className='w-full' href={'/post'}>
              <button className='button-primary'>Veja os meus artigos</button>
            </Link>
          </div>
        </main>

        <section className='divide-red-100 py-5'>
          <Divider title='Tecnologias' />
          <div className='grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-5 justify-items-center pt-4 gap-2'>
            {props.tecs.flatMap((e, index) => (<AppCard
              title={e.name}
              key={index}
              navigate=''
              backgroundColor={e.bg}
            />)
            )}
          </div>
        </section>

        <section className='divide-red-100 py-5'>
          <Divider title='Projetos' />
          <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 justify-items-center pt-4 gap-2'>
            {props.projects.flatMap((e, index) => (
              <Link
                href={'/project/' + Formatters.replaceAll(e.name)}
                key={index}
                className="w-full">
                <ProjectCard project={e} />
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>

    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: profileData
  }
}
