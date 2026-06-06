import Link from 'next/link';
import { MoonStar, SunMedium } from 'lucide-react';

import { useTheme } from '@/components/theme-provider';
import Image from 'next/image';

export function Header() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 transition-colors hover:text-sky-600 dark:text-slate-50 dark:hover:text-sky-400"
          >
            <Image src="https://github.com/welitonsousa.png" width={32} height={32} alt="Welitonsousa" className="rounded-full" />
            Welitonsousa
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-2 sm:flex">
            <Link
              href="/"
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              Início
            </Link>
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition-transform hover:-translate-y-0.5 hover:bg-slate-800 dark:border-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
            aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            title={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
          >
            {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            <span>{isDark ? 'Claro' : 'Escuro'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}