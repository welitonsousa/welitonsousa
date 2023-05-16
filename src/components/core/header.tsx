import { Tooltip } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/router"

interface Props {
  title: string
  action: string | null
  children?: React.ReactNode
}

export default function Header(props: Props) {
  const router = useRouter()
  function goTo (path: string | null) {
    if (path) router.push(path) 
  }

  return <header className='flex justify-between items-center pb-4'>
    <Tooltip title="Voltar a página inicial">
      <div className='flex items-center cursor-pointer h-12' onClick={() => goTo('/')}>
        <Image src='/logo.png' width={48} height={48} alt="logotipo do site" />
        <h3 className='pl-4 max-sm:hidden text-[20px]'>Weliton Sousa</h3>
      </div>
    </Tooltip>

    <h1 className='max-sm:text-[20px] h-12 text-[30px] cursor-pointer'
      onClick={() => goTo(props.action)}>{props.title}
    </h1>
    {props.children}
  </header>
}