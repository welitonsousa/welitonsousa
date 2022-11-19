import Image from 'next/image'
import AppCard from '../components/AppCard'
import Divider from '../components/Divider'
import ProjectCard from '../components/ProjectCard'
import { Project } from '../interfaces/IProject'
import { Social } from '../interfaces/ISocial'
import { Tec } from '../interfaces/ITec'
import { profileData } from '../constants/profile'
import AppHead from '../components/core/head'
import Footer from '../components/core/footer'
import { Formatters } from '../utils/formatters'


export interface HomeProps {
  description: string[]
  image: string
  projects: Project[]
  social: Social[]
  tecs: Tec[]
}

function goToProject(id: string) {
  window.open('/project/' + id, '_self')
}

export default function Home(props: HomeProps) {
  return (
    <div className='flex row justify-center'>

      <AppHead title='Weliton Sousa' image={null} content={null} />

      <div className='p-10 max-w-5xl '>
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
            <div className='max-sm:text-justify text-center leading-6'>
              <h2>Olá, meu nome é Weliton de Sousa Araújo👋</h2><br />
              <p> Sou aluno da universidade federal do Piauí e Desenvolvedor de software (sites e aplicativos)</p><br />
              <p>Apaixonado por programação e fascinado em descobrir novas tecnologias. Atualmente estou trabalhando com Flutter e VueJs em um chat online, e levo muito a sério o paradigma de orientação a objetos</p>
            </div>
          </div>
        </main>

        <section className='divide-red-100 py-5'>
          <Divider title='Tecnologias' />
          <div className='grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-5 justify-items-center pt-4 gap-2'>
            {props.tecs.flatMap((e, index) => (<AppCard
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
            {props.projects.flatMap((e, index) => (
              <div
                key={index}
                onClick={() => goToProject(Formatters.replaceAll(e.name))} className="w-full">
                <ProjectCard project={e} />
              </div>
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
