import React, { useEffect, useState } from 'react'
import { User } from '../type/type'
import { getAllUsers } from '../services/api';
import AddUser from './AddUser';

const UserList = () => {

    const [user, setUser] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchUser = async () => {
            try {
                setLoading(true);
                const res = await getAllUsers();
                setUser(res)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false)
            }
        }

        fetchUser()







    }, []);

    return (
        <div>
            <div className='bg-white shadow rounded-lg overflow-hidden px-4 py-4 my-4 ' >
                <h1 >All user</h1>
            </div>
            <div className='' >
                <ul className="divide-y divide-red-700 bg-white shadow rounded-lg overflow-hidden px-4 py-4 ">
                    {user.map((item, i) => (
                        <li key={i} className="py-4  bg-white shadow rounded-lg overflow-hidden px-4 my-2 ">
                                <div className='flex justify-between items-center  ' >
                                    <div>
                                        <h1>{item.name}</h1>
                                        <p>{item.email}</p>
                                    </div>
                                    <div className=' flex gap-3 ' >
                                        <button className=' bg-red-200 px-3 py-1 rounded font-semibold ' >Delete</button>
                                        <button className=' bg-red-200 px-3 py-1 rounded font-semibold ' >Update</button>
                                    </div>
                                </div>
                        </li>
                    ))}
                </ul>
            </div>
            <AddUser data = {setUser} prevUser = {user} />
        </div>
    )
}

export default UserList