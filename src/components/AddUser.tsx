import React, { useState } from 'react';
import { postUser } from '../services/api';
import { User } from '../type/type';

interface AddUserProps {
  data: (user: User) => void;
  prevUser: User[];
}

const AddUser: React.FC<AddUserProps> = ({ data, prevUser }) => {
  const [user, setUser] = useState<Omit<User, "id">>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await postUser(user);
      data(...prevUser,res); // pass the new user to parent
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='my-6'>
      <form onSubmit={createUser}>
        <div className='flex justify-between'>
          <div>
            <input
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className='border hover:outline-0 focus:outline-0 px-3 py-1 rounded-lg border-yellow-300'
              type="text"
              placeholder='Name'
            />
          </div>
          <div>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className='border hover:outline-0 focus:outline-0 px-3 py-1 rounded-lg border-yellow-300'
              type="text"
              placeholder='Username'
            />
          </div>
          <div>
            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className='border hover:outline-0 focus:outline-0 px-3 py-1 rounded-lg border-yellow-300'
              type="email"
              placeholder='Email'
            />
          </div>
          <div>
            <button type='submit' className='bg-red-300 px-3 py-1 shadow rounded font-semibold'>
              AddUser
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
