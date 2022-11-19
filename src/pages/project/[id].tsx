import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { profileData } from '../../../profile'
import Footer from '../../components/core/footer'
import AppHead from '../../components/core/head'
import { Project } from '../../interfaces/IProject'

interface Props { project: Project }

export default function ProjectPage({ project }: Props) {
  return (<>
    <AppHead
      content={project.small}
      image={project.image}
      title={project.name}
    />

    <main>
      <h1>{project.name}</h1>
      <Image src={project.image} width={200} height={200} alt="asd" />
      <section className='grid max-sm:grid-cols-1 grid-cols-3 gap-4'>
        {project.description.flatMap((e) => (<p>{e}</p>))}
      </section>
      <p>{project.description}</p>
      <section className='grid max-sm:grid-cols-1 grid-cols-3 gap-4'>
        {project.screenshots.flatMap((e) => (
          <Image src={e} width={100} height={100} alt="asd" />
        ))}
      </section>
    </main>
    <Footer />
  </>)
}


export const getStaticPaths: GetStaticPaths = async () => {


  return {
    paths: profileData.projects.map((e) => {
      return { params: { id: replaceAll(e.name.toLowerCase()) } }
    }),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id
  const project = profileData.projects.find((e) => replaceAll(e.name) === id)
  // console.log(project, 'asd\n\n\n');


  return {
    props: { project: project }
  }
}

function replaceAll(sentence: string) {
  return (sentence.replace(/[" "]/g, "-")).toLowerCase();
}