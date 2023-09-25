import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className='flex bg-slate-200 p-5'>
            <Link className='text-black mr-5' href='/'>Next.js</Link>
            <Link className='text-black' href='/users'>User</Link>
        </nav>
    )
}

export default NavBar;