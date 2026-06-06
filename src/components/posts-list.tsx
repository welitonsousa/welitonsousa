import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Search,
  X,
} from 'lucide-react';

interface Post {
  slug: string;
  title: string;
  description?: string | null;
}

interface PostsListProps {
  posts: Post[];
  title?: string;
  description?: string;
  endpoint?: string;
}

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export default function PostsList({ posts, title, description, endpoint }: PostsListProps) {
  const [search, setSearch] = useState('');

  const filteredPosts = useMemo(() => {
    const term = normalizeText(search.trim());

    if (!term) return posts;

    return posts.filter((post) =>
      normalizeText(`${post.title} ${post.description ?? ''}`).includes(term)
    );
  }, [posts, search]);

  const hasSearch = search.trim().length > 0;

  return (
    <section>
      <div className="
      relative rounded-[2rem] 
      border border-slate-200/80 bg-white/75 px-6 py-10 
      shadow-2xl shadow-slate-900/5 backdrop-blur-xl
    dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:px-10 sm:py-14">
        <div className="absolute -top-24 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/10" />
        <div className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-500/10" />

        <div className="relative max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700 dark:border-sky-900 dark:bg-sky-950/70 dark:text-sky-300">
            <BookOpen className="h-3.5 w-3.5" />
            Leituras e ideias
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            {title || 'Posts e anotações'}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            {
              description ||
              'Uma coleção de posts, anotações e aprendizados sobre desenvolvimento, tecnologia e outros assuntos relacionados.'
            }
          </p>

          <div className="relative mt-8 max-w-2xl">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Busque por título ou assunto..."
              aria-label="Buscar posts"
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-12 text-sm text-slate-900 shadow-lg shadow-slate-900/5 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 dark:border-slate-700 dark:bg-slate-950/80 dark:text-white dark:shadow-black/10 dark:focus:border-sky-500"
            />
            {hasSearch && (
              <button
                type="button"
                onClick={() => setSearch('')}
                aria-label="Limpar busca"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mb-5 mt-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-400">
            Biblioteca
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            {hasSearch ? 'Resultados da busca' : 'Todos os posts'}
          </h2>
        </div>
        <p className="shrink-0 text-sm text-slate-500 dark:text-slate-400">
          {filteredPosts.length}{' '}
          {filteredPosts.length === 1 ? 'post encontrado' : 'posts encontrados'}
        </p>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={endpoint ? `/${endpoint}/${post.slug}` : `/posts/${post.slug}`}
              className="group flex min-h-[230px] flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-900/[0.03] transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-900/10 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-black/10 dark:hover:border-sky-700 dark:hover:shadow-black/20"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-950 dark:text-sky-400 dark:group-hover:bg-sky-500 dark:group-hover:text-white">
                  <FileText className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold tabular-nums text-slate-400 dark:text-slate-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold leading-snug tracking-tight text-slate-950 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                {post.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {post.description ||
                  'Uma nova leitura com ideias e aprendizados para compartilhar.'}
              </p>

              <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-semibold text-sky-600 dark:text-sky-400">
                Ler post
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white/50 px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900/40">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            <Search className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">
            Nenhum post encontrado
          </h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Tente buscar usando outro título ou assunto.
          </p>
          <button
            type="button"
            onClick={() => setSearch('')}
            className="mt-6 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600 dark:bg-white dark:text-slate-950 dark:hover:bg-sky-400"
          >
            Limpar busca
          </button>
        </div>
      )}
    </section>
  );
}
