import { useRouter } from "next/router";
import Head from "../components/core/head";

export default function NotFoundPage() {
  const router = useRouter()
  function goToHome() {
    router.push('/')
  }

  return <div className="h-screen grid justify-center content-center">
    <Head image={null} content={null} title="Página não encontrada"/>
    <main className="text-center">
      <h1 className="text-4xl pb-10">Página não encontrada</h1>
      <button className="button-primary" onClick={goToHome}>Voltar ao início</button>
    </main>
  </div>
}