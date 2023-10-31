import { useState } from 'react';
import { useClient } from 'next/data-client';
import Link from 'next/link';

export default function newDoc() {
    useClient();
    const [content, setContent] = useState('');

    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = event.target;
        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px';
        setContent(target.value);
    };

    return (
        <>
            <header className='flex justify-between items-center mb-4'>
                <h1 className='text-2xl font-semibold'>New Document</h1>
                <Link
                    className='border border-red-700 text-red-700 px-2 py-1 rounded hover:bg-red-700 hover:text-slate-100 focus-within:bg-red-100 outline-none font-medium'
                    href='/'
                >
                    Cancel
                </Link>
            </header>
            <form className='flex gap-2 flex-col'>
                <input
                    type='text'
                    name='documentTitle'
                    className='border-b border-slate-900 bg-transparent px-2 py-1 focus-within:outline-none font-medium focus-within:border-b-2'
                    placeholder='Title'
                />
                <textarea
                    placeholder='Start writing your document here...'
                    name='documentContent'
                    className='border-none border-slate-900 bg-transparent px-2 py-1 focus-within:outline-none font-medium focus-within:border-b-2'
                    onInput={handleInput}
                    value={content}
                />
            </form>
        </>
    );
}