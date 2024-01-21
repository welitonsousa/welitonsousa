import Link from "next/link"
import { MouseEventHandler } from "react"

interface Props {
  title: string
  backgroundColor: string
  navigate: string
}

export default function AppCard(props: Props) {
  if (props.navigate) {
    return <Link
      className="rounded-lg py-4 w-full text-center cursor-pointer"
      target={!!props.navigate ? "_blank" : ""}
      style={{ backgroundColor: props.backgroundColor }}
      href={props.navigate}>
      <div>
        <span className="text-[20px]">{props.title}</span>
      </div>
    </Link>
  }
  return <div
    className="rounded-lg py-4 w-full text-center cursor-pointer"
    style={{ backgroundColor: props.backgroundColor }}
  >
    <div>
      <span className="text-[20px]">{props.title}</span>
    </div>
  </div>


}