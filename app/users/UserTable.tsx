import React from 'react';
import { sort } from 'fast-sort';
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder: 'name' | 'email';
}

const UserTable = async ({ sortOrder }: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();

    let sortedUsers = users;

    if (sortOrder === 'name') {
        sortedUsers = sort(users).asc(u => u.name)
    } else {
        sortedUsers = sort(users).asc(u => u.email)
    }

    return (
        <table className='table table-bordered text-black'>
            <thead>
                <tr>
                    <th><Link href={'/users?sortOrder=name'}>Name</Link></th>
                    <th><Link href={'/users?sortOrder=email'}>Email</Link></th>
                </tr>
            </thead>
            <tbody>
                {
                    sortedUsers.map((user) => (
                        <tr key={user.id}>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.email}
                            </td>
                        </tr>
                    )
                    )
                }
            </tbody>
        </table>
    )
}

export default UserTable