type DocItemProps = {
    id: string
    title: string
    content: string
}

export default function DocItem({ id, title, content }: DocItemProps ){
    return <p>{title}</p>
}