import { GetStaticPaths, GetStaticProps } from 'next'
import { Project } from '../../interfaces/IProject'
import { profileData } from '../../constants/profile'
import { Formatters } from '../../utils/formatters'
import Image from 'next/image'
import Footer from '../../components/core/footer'
import AppHead from '../../components/core/head'
import Header from '../../components/core/header'

interface Props { project: Project }

export default function ProjectPage({ project }: Props) {
  return (
    <div className='flex row justify-center'>
      <AppHead
        content={project.small}
        image={project.image}
        title={project.name}
      />
      <div className='p-10 max-w-5xl '>
        <Header title={project.name} action={null}/>
        <main className='flex flex-col'>
          <hr className='py-4' />
          <Image
            src={project.image}
            width={500}
            height={500}
            alt={`imagem do projeto ${project.name}`}
            className="self-center py-4"
          />

          <section className='text-justify'>
            {project.description.flatMap((e, index) =>
              (<p key={index} dangerouslySetInnerHTML={{__html: e}} className='w-full py-2'></p>)
            )}
            <a href={project.link} target="_blank" rel="noreferrer">
              <button className='button-primary'>Acessar projeto</button>
            </a>
          </section>

          
          <section className='grid max-sm:grid-cols-1 grid-cols-3 gap-4 pt-10'>
            {project.screenshots.flatMap((e, index) => (
              <Image
                src={e.link}
                width={1000}
                height={1000}
                key={index}
                className={`col-span-${e.proportion}`}
                alt={`captura de imagem - ${index + 1}`}
              />
            ))}
          </section>
        </main>
        <Footer />
      </div>
    </div>)
}


export const getStaticPaths: GetStaticPaths = async () => {
  return {

    paths: profileData.projects.map((e) => {
      return { params: { id: Formatters.replaceAll(e.name.toLowerCase()) } }
    }),

    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id as string | undefined
  const project = profileData.projects.find((e) => Formatters.replaceAll(e.name) === Formatters.replaceAll(id  || ''))
  return {
    revalidate: 60,
    props: { project: project }
  }
}