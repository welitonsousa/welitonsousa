import { MouseEventHandler } from "react"

interface Props {
  title: string
  backgroundColor: string
  onClick: MouseEventHandler | undefined
}

export default function AppCard(props: Props) {
  return <div 
  onClick={props.onClick}
  style={{ backgroundColor: props.backgroundColor }}
  className="rounded-lg py-4 w-full text-center cursor-pointer">
    <span className="text-[20px]">{props.title}</span>
  </div>
}