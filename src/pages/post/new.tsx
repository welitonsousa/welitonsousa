import { Button, Card, IconButton, TextField } from "@mui/material";
import Footer from "../../components/core/footer";
import Head from "../../components/core/head";
import Header from "../../components/core/header";
import { Delete, Add } from '@mui/icons-material/';
import { useState } from "react";
import { initDescription, initPostDefault, IPost } from "../../interfaces/IPost";
import { toast } from "react-toastify";
import { api } from "../../lib/axios";
import { useRouter } from "next/router";

export default function NewPostPage() {
  const [post, setPost] = useState<IPost>(initPostDefault)
  const [key, setKey] = useState("")

  const router = useRouter()

  async function saveImage(file: File | string | undefined | null): Promise<string | null | undefined> {
    if (!file || typeof (file) === "string") return
    try {
      const body = new FormData()
      body.set('image', file)
      body.set('key', key)
      const response = await api.post('/api/send-file', body)
      return response.data.url
    } catch (e) {
      return
    }
  }

  async function saveNewPost() {
    try {
      const urls = await Promise.all([
        saveImage(post.image),
        ...post.descriptions.map((e) => saveImage(e.image))
      ])
      const data = { ...post } 
      
      data.image = urls[0]
      data.descriptions = data.descriptions.map((e, index) => (
        { ...e, image: urls[index + 1] }
      ))
      await api.post('/api/post', {key, ...data})
      router.push('/post')
      toast("Post criado com sucesso")
    } catch (e) {
      const message = (e as any).response?.data?.message
      toast(message || "Erro ao cadastrar este post", { type: "error" })
    }
  }

  function addDescription() {
    setPost({ ...post, descriptions: [...post.descriptions, {...initDescription}] })
  }

  function changeDescriptionValue(key: string, value: string | File | undefined, index: number) {
    const descriptions = [...post.descriptions] as any
    descriptions[index][key] = value
    setPost({ ...post, descriptions })
  }

  function removeDescription(index: number) {
    const descriptions = post.descriptions
    descriptions.splice(index, 1)
    setPost({ ...post, descriptions })
  }

  return (
    <div className="flex row justify-center">
      <Head content="Adicione uma nova publicação" image={null} title="Novo post" />
      <div className="p-10 max-w-5xl w-full">
        <Header
          title="Ver posts"
          action="/post"
        />
        <main className="flex flex-col">
          <hr className='py-4' />
          <section >
            <form className="grid gap-4">

              <TextField
                className="col-span-4"
                label="Key"
                value={key}
                onChange={e => setKey(e.target.value)}
              />
              <TextField
                className="col-span-2"
                label="Título"
                value={post.title}
                onChange={(v) => setPost({ ...post, title: v.target.value })}
              />
              <div className="col-span-2 border rounded-md flex flex-col justify-center content-center border-gray-500 hover:border-white">
                <input
                  type="file"
                  className="mx-1"
                  onChange={(v) => setPost({ ...post, image: v.target.files ? v.target.files[0] : null })}

                />
              </div>
              <TextField
                className="col-span-4"
                label="Link externo"
                value={post.externalLink}
                onChange={(v) => setPost({ ...post, externalLink: v.target.value })}
              />
              <TextField
                className="col-span-4"
                label="Pequena descrição"
                multiline
                rows={4}
                value={post.smallDescription}
                onChange={(v) => setPost({ ...post, smallDescription: v.target.value })}
              />

              <span className="col-span-4 flex">
                <h3 className=" text-2xl">Conteúdo</h3>
                <IconButton onClick={addDescription}><Add /></IconButton>
              </span>
              {post.descriptions.map((e, index) => {
                return <Card
                  key={index}
                  className="col-span-4 grid-cols-8 p-4 grid gap-4">
                  <TextField
                    className="col-span-4"
                    label="Título"
                    value={e.title}
                    onChange={v => changeDescriptionValue("title", v.target.value, index)}
                  />
                  <div className="col-span-3 border justify-center rounded-md flex flex-col content-center border-gray-500 hover:border-white">
                    <input
                      type="file"
                      className="mx-1"
                      onChange={v => changeDescriptionValue("image", v.target.files![0], index)}
                    />
                  </div>
                  <Button onClick={() => removeDescription(index)}>
                    <Delete />
                  </Button>
                  <TextField
                    className="col-span-8"
                    label="Pequena descrição"
                    multiline
                    rows={4}
                    value={e.description}
                    onChange={v => changeDescriptionValue("description", v.target.value, index)}
                  />

                  <TextField
                    className="col-span-4"
                    label="Linguagem"
                    value={e.lang}
                    onChange={v => changeDescriptionValue("lang", v.target.value, index)}
                  />
                  <TextField
                    className="col-span-4"
                    label="Link"
                    value={e.link}
                    onChange={v => changeDescriptionValue("link", v.target.value, index)}
                  />
                  <TextField
                    className="col-span-8"
                    label="Código"
                    multiline
                    rows={4}
                    value={e.code}
                    onChange={v => changeDescriptionValue("code", v.target.value, index)}
                  />
                </Card>
              })}


              <div className="col-span-4 flex justify-end pl-4">
                <Button
                  className="w-1/2"
                  variant="outlined"
                  onClick={saveNewPost}>
                  Salvar
                </Button>
              </div>
            </form>
          </section>
        </main>
        <Footer />
      </div>

    </div>
  )
}