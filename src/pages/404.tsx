import Link from "next/link";


export default function NotFoundPage() {
  return <div className="grid justify-center content-center">
    <main className="text-center">
      <h1 className="text-4xl pb-10">Página não encontrada</h1>
      <Link href={'/'} className="button-primary border px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white">
        Voltar ao início
      </Link>
    </main>
  </div>
}