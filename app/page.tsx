import Link from 'next/link'
import DocItem from '@/component/DocItem';
import { getDocList } from '@/lib/db'
import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient()

export default async function Home() {
  const docsList = await getDocList()
  console.log(docsList);

  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-semibold'>nextDoc</h1>
        <Link 
          className="bg-slate-700 px-4 py-2 text-slate-50 rounded hover:bg-slate-500 hover:text-slate-100 focus-within:bg-slate-100 outline-none font-medium" href="/new">New Document
        </Link>
      </header>
      <div className='pt-8 font-medium space-y-12'>{docsList.map(
        docitem => (
          <DocItem key={docitem.id} {...docitem} />
        )
      )}
      </div>
    </>
  )
}
