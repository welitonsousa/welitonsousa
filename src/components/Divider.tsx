interface Props {
  title: string
}

export default function Divider({title}: Props) {
  return (<div className="flex row pt-20 pb-6">
    <div className="h-1 rounded-lg w-full bg-gray-600 self-center"/>
    <p className="px-4 text-[20px]">{title}</p>
    <div className="h-1 rounded-lg w-full bg-gray-600 self-center"/>
  </div>)
}