import { MouseEventHandler } from "react"

interface Props {
  title: string
  backgroundColor: string
  onClick: MouseEventHandler | undefined
}

export default function AppCard(props: Props) {
  return <div 
  onClick={props.onClick}
  style={{ background: props.backgroundColor }}
  className="rounded-lg py-4 w-full text-center cursor-pointer">
    {props.title}
  </div>
}