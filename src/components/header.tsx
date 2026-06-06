import { useState } from 'react';

import Link from 'next/link';
import { Menu, MoonStar, SunMedium, X } from 'lucide-react';

import { useTheme } from '@/components/theme-provider';
import Image from 'next/image';

export function Header() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/70">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900 transition-colors hover:text-sky-600 dark:text-slate-50 dark:hover:text-sky-400"
            >
              <Image src="https://github.com/welitonsousa.png" width={32} height={32} alt="Welitonsousa" className="rounded-full" />
              Welitonsousa
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden items-center gap-2 sm:flex">
              <Link
                href="/projects"
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                Projetos
              </Link>
              <Link
                href="/posts"
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                Posts
              </Link>
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
              <span className="hidden sm:inline">{isDark ? 'Claro' : 'Escuro'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 sm:hidden dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`sm:hidden  transition-all duration-300 ease-out ${
            isMenuOpen
              ? 'mt-4 max-h-80 opacity-100 translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col gap-2 rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-950">
            <Link
              href="/projects"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              Projetos
            </Link>
            <Link
              href="/posts"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              Posts
            </Link>
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              Início
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}