"use client"

import { useState } from 'react';
import Link from 'next/link';
import { createNewDoc } from '@/lib/newdoc';

export default function setTextField() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleContentInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = event.target;
        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px';
        setContent(target.value);
    };

    const hasInput = title.trim() === '' ||  content.trim() === '';

    return (
        <>
        <form action={createNewDoc}>
            <header className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl font-semibold'>New Document</h1>
                <div className='flex gap-2'>
                    <button
                        id='newDocSubmit'
                        type='submit'
                        className={`bg-green-600 text-slate-100 px-2 py-1 rounded hover:bg-green-900 outline-none font-medium ${hasInput ? 'opacity-20 bg-slate-900 text-slate-100 hover:bg-slate-900 cursor-not-allowed' : ''}`}
                        disabled={hasInput}>
                        Save
                    </button>
                    <Link
                        className='border border-red-700 text-red-700 px-2 py-1 rounded hover:bg-red-700 hover:text-slate-100 focus-within:bg-red-100 outline-none font-medium'
                        href='/'>
                        Cancel
                    </Link>
                </div>
            </header>
            <div className='flex gap-2 flex-col'>
                <input
                    type='text'
                    name='documentTitle'
                    className='border-b border-slate-900 bg-transparent px-2 py-1 focus-within:outline-none font-medium focus-within:border-b-2'
                    placeholder='Title'
                    onInput={handleTitleInput}
                    value={title}
                />
                <textarea
                    placeholder='Start writing your document here...'
                    name='documentContent'
                    className='border-none border-slate-900 bg-transparent px-2 py-1 focus-within:outline-none font-medium focus-within:border-b-2 resize-none'
                    onInput={handleContentInput}
                    value={content}
                />
            </div>
        </form>
    </>
    );
}