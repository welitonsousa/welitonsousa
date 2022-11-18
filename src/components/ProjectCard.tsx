import { Project } from "../interfaces/IProject";
import Image from 'next/image'

interface Props {
  project: Project
}

export default function ProjectCard({project}: Props) {
  return (
    <div className="text-center bg-gray-800 rounded-lg w-full p-4 h-64 cursor-pointer">
      
      <div className="h-1/3 flex justify-center">
        <Image src={project.image} alt="imagem representativa do projeto" width={200} height={200} className="self-center"/>
      </div>
      
      <div className="flex flex-col h-2/3 justify-center">
        <span className="font-bold text-[20px]">{project.name}</span>
        <span className="text-[14px]">{project.small}</span>
      </div>
    </div>
  )
}