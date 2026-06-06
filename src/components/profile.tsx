import Link from 'next/link';
import {
  GitBranch,
  ListCheck,
  Mail,
} from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="
      border rounded-3xl bg-white
    dark:border-zinc-800 dark:bg-zinc-950"
    >
      <div
        className=" absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb20,transparent_50%)]"
      />

      <div
        className=" relative max-w-7xl mx-auto px-6 pt-8 pb-8"
      >
        <div
          className=" grid lg:grid-cols-[1fr_400px] gap-16 items-center"
        >
          <div>
            <div
              className=" inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-400"
            >
              Disponível para novos projetos
            </div>

            <h1
              className=" mt-8 text-5xl lg:text-7xl font-black tracking-tight text-zinc-900 dark:text-white"
            >
              Weliton Sousa
            </h1>

            <h2
              className=" mt-4 text-2xl font-semibold text-blue-600"
            >
              Desenvolvedor Full Stack
            </h2>

            <p
              className=" mt-8 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
            >
                Desenvolvedor especializado em
                aplicações web, mobile e desktop,
                com experiência em Flutter,
                Vue.js, Node.js e arquiteturas
                escaláveis. Atualmente trabalho
                no desenvolvimento de uma
                plataforma de atendimento em
                tempo real integrada ao WhatsApp,
                utilizada por empresas para
                centralizar conversas, equipes e
                processos de relacionamento com
                clientes.
            </p>

            <p
              className=" mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
            >
              Tenho forte interesse em
              arquitetura de software,
              orientação a objetos e boas
              práticas de desenvolvimento,
              buscando criar produtos modernos,
              escaláveis e fáceis de manter.
            </p>

            <div
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                'Flutter',
                'Vue.js',
                'Next.js',
                'Node.js',
                'TypeScript',
                'PostgreSQL',
              ].map((tech) => (
                <span
                  key={tech}
                  className=" px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div
              className=" mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="https://github.com/welitonsousa"
                target="_blank"
                className=" inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
              >
                <GitBranch size={18} />
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/welitonsousa/"
                target="_blank"
                className=" inline-flex items-center gap-2 px-5 py-3 rounded-xl border"
              >
                <ListCheck size={18} />
                LinkedIn
              </Link>

              <Link
                href="mailto:welitonubuntu@gmail.com"
                className=" inline-flex items-center gap-2 px-5 py-3 rounded-xl border"
              >
                <Mail size={18} />
                Contato
              </Link>
            </div>
          </div>

          <div
            className="flex justify-center"
          >
            <div
              className="relative"
            >
              <div
                className=" absolute -inset-8 bg-blue-500/20 blur-3xl rounded-full"
              />

              <Image
                width={320}
                height={320}
                src="https://avatars.githubusercontent.com/u/64853142?v=4"
                alt="Weliton Sousa"
                className=" relative w-80 h-80 object-cover rounded-full border-4 border-white dark:border-zinc-900 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}