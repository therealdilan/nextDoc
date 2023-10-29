import Link from 'next/link'

export default function newDoc() {
    return (
    <>
        <header className='flex justify-between items-center mb-4'>
            <h1 className='text-2xl font-semibold'>New Document</h1>
            <Link 
                className="border border-red-700 text-red-700 px-2 py-1 rounded hover:bg-red-700 hover:text-slate-100 focus-within:bg-red-100 outline-none font-medium" href="/">Cancel
            </Link>
        </header>
    </>
    )
}