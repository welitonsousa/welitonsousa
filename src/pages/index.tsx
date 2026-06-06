import Link from 'next/link';
import { ArrowRight, Layers3 } from 'lucide-react';
import Profile from '@/components/profile';
import { getPosts } from '@/lib/posts';
import Head from "next/head";

type Project = {
  slug: string;
  title: string;
  description?: string | null;
};

interface HomeProps {
  posts: Project[];
}

export async function getServerSideProps() {
  const projects = await getPosts('projects');

  return { props: { posts: projects } };
}


function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={[
        'group rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-900/[0.03] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/10 dark:hover:border-sky-700',
        featured ? 'md:col-span-2 md:p-8' : '',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-950 dark:text-sky-400 dark:group-hover:bg-sky-500 dark:group-hover:text-white">
          <Layers3 className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          Projeto
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
        {project.title}
      </h3>

      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
        {project.description ||
          'Um projeto pensado para evoluir com clareza técnica, boa experiência e uma base sólida para crescimento.'}
      </p>

      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400">
          Ver detalhes
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
        <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
          {String(project.slug).replace(/-/g, ' ')}
        </span>
      </div>
    </article>
  );
}

export default function Home({ posts }: HomeProps) {

  return (
    <div className="space-y-8 lg:space-y-10">
      <Head>
        <title>Weliton Sousa</title>

        <meta
          name="description"
          content="Desenvolvedor especializado em aplicações web, mobile e desktop, com experiência em Flutter, Vue.js, Node.js e arquiteturas escaláveis. Atualmente trabalho no desenvolvimento de uma plataforma de atendimento em tempo real integrada ao WhatsApp, utilizada por empresas para centralizar conversas, equipes e processos de relacionamento com clientes."
        />
      </Head>
      <Profile/>

      <section id="projects" className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
              Projetos
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Destaques do portfólio
            </h2>
          </div>
          
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          
          {posts?.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} className="block cursor-pointer">
              <ProjectCard  project={project} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
