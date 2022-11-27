interface Props {if: boolean, children: any}

export default function Visibility(props: Props) {
  if (props.if) return props.children
}