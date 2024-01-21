import { Tooltip } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/router"

interface Props {
  title: string
  action: string | null
  children?: React.ReactNode
}

export default function Header(props: Props) {  
  return <header className='flex justify-between items-center pb-4'>
    <Tooltip title="Voltar a página inicial">
      <a href="./">
        <div className='flex items-center cursor-pointer h-12'>
          <Image src='/logo.png' width={48} height={48} alt="logotipo do site" className="pr-2" />
          <h3 className='pl-4 max-sm:hidden text-[20px]'>Weliton Sousa</h3>
        </div>
      </a>
    </Tooltip>

    <a href={(props.action) ?? ""}>

      <h1 className='max-sm:text-[15px] text-[30px] cursor-pointer'>
        {props.title}
      </h1>
    </a>
  { props.children }
  </header >
}