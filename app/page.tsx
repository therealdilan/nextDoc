import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-semibold'>nextDoc</h1>
        <Link 
          className="border border-slate-900 px-2 py-1 rounded hover:bg-slate-700 hover:text-slate-100 focus-within:bg-slate-100 outline-none font-medium" href="/new">New Document
        </Link>
      </header>
    </>
  )
}
