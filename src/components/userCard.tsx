import type{User} from '../types/user'
type UserListProps = {
        user : User
    }
function UserCard({user} : UserListProps) : React.JSX.Element {
    return <>
        <section className='w-full h-fit py-1 rounded-md flex justify-between items-center bg-white ring-1 ring-gray-200 group'>
          <div className='w-2/3 h-full flex px-2 gap-x-2'>
            <div className='w-fit h-full flex py-2'>
                <span className='w-12 h-12 bg-gray-100 rounded-full overflow-hidden'>
                    <img src={user.avatar} alt="" className='w-12 h-12 object-cover ' />
                </span>
            </div>
            <div className='w-fit h-full grid grid-cols-1'>
                <span className='grid grid-cols-1 justify-center py-2'>
                    <h5 className='font-sans font-semibold text-slate-800'>{user.name}</h5>
                    <h6 className='font-sans font-medium text-md text-slate-600'>{user.email}</h6>
                </span>
                <span className='w-fit h-fit flex'>
                    <h6 className='font-sans font-medium text-sm text-slate-600 text-wrap'>{user.bio}</h6>
                </span>
            </div>
          </div>
          <div className='w-1/2 h-full flex items-center justify-end px-3'>
            <span className='w-28 h-8 cursor-pointer rounded-full bg-gray-300 flex items-center justify-around px-2 opacity-0 group-hover:opacity-100 transition-all duration-150 delay-75'>
                <h6 className='font-sans font-medium text-gray-800 text-sm'>Show more</h6>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-gray-800 icon icon-tabler icons-tabler-outline icon-tabler-chevron-right' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
            </span>
          </div>  
        </section>
    </>
}

export default UserCard