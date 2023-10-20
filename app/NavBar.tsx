'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    const { data: session, status } = useSession();
    return (
        <nav className='flex bg-slate-200 p-5 space-x-3'>
            <Link className='text-black mr-5' href='/'>Next.js</Link>
            <Link className='text-black' href='/users'>User</Link>
            {status === 'loading' && <div>Loading...</div>}
            {status === 'authenticated' &&
                <div>
                    {session?.user?.name}
                    <Link href='/api/auth/signout' className='ml-3'>Sign Out</Link>
                </div>
            }
            {status === 'unauthenticated' && <Link href='/api/auth/signin' className='text-black'>Login</Link>}
        </nav>
    )
}

export default NavBar;