import type { User } from '../types/user'
import React from 'react'
import UserCard from './userCard'

type UserListProps = {
  user: User[];
  onAddClick: () => void;
};

function UserList({ user, onAddClick }: UserListProps): React.JSX.Element {
    return (
        <section className='w-[480px] h-fit py-6 px-8 bg-white flex gap-y-3 flex-col justify-center items-center ring-1 ring-gray-300 rounded-lg'>
            <div className='w-full h-10 flex justify-between items-center'>
                <h2 className='font-sans text-xl text-slate-900'>User list</h2>
                <button
                    type="button"
                    className='w-36 h-11 bg-[#3B82F6] hover:bg-[#2563EB] rounded-md font-semibold text-white'
                    onClick={onAddClick}
                >
                    Add user
                </button>
            </div>

            {user.map(item => (
                <UserCard key={item.id} user={item} />
            ))}
        </section>
    )
}

export default UserList
