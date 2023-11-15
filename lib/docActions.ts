'use server'

import { prisma } from '@/lib/db';
import { redirect } from 'next/navigation';

export async function createNewDoc(data: FormData) {
  const title = data.get('documentTitle') as string;
  const content = data.get('documentContent') as string;

  await prisma.docitem.create({
    data: {
      title: title,
      content: content,
    },
  });

  console.log(data)

  redirect('/');
}

export async function editThisDoc(id: string) {
  return (data: FormData) => {
    console.log({id} + ' edited')
  }
}

export async function removeThisDoc(id: string) {
  return (data: FormData) => {
    console.log({id} + ' remove')
  }
}