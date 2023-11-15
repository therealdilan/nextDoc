import { editThisDoc, removeThisDoc } from '@/lib/docActions'

type DocItemProps = {
    id: string
    title: string
    content: string
}

export default function DocItem({ id, title, content }: DocItemProps ){
    const edit = editThisDoc({id});
    const remove = removeThisDoc({id});
    
    return (
        <>
        <div className="gap-2 flex-auto space-y-2 p-2">
            <div className="flex justify-between items-center mb-4">
                <h5 className="text-2xl font-semibold">{title}</h5>
                <div className='flex gap-2'>
                    <button formAction={edit} className="border border-slate-900 px-2 py-1 rounded hover:bg-slate-700 hover:text-slate-100 focus-within:bg-slate-100 outline-none font-medium">Edit</button>
                    <button formAction={remove} className='border border-red-700 text-red-700 px-2 py-1 rounded hover:bg-red-700 hover:text-slate-100 focus-within:bg-red-100 outline-none font-medium'>Remove</button>
                </div>
            </div>
            <hr className="border-slate-900 border-2"></hr>
            <p>{content}</p>
        </div>
        </>
        
    )
}
