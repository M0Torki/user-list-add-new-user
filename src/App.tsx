import UserList from './components/userList'
import AddUserForm from './components/addUserForm'
import type { User } from './types/user'
import { useState } from 'react'

function App(): React.JSX.Element {
  const [user, setUser] = useState<User[]>([
    {id: 1, avatar: '/Images/avatar1.png', name: 'Ali', email: 'ali@gmail.com', bio: 'Im a Frontend developer', age: 12, joined: '', moreInfo:"", role:"Admin"},
    {id: 2, avatar: '/Images/avatar2.png', name: 'Mohammad', email: 'mohammad@gmail.com', bio: '', age: 12, joined: '', moreInfo:"", role:"Admin"},
    {id: 3, avatar: '/Images/avatar3.png', name: 'Saman', email: 'Saman@gmail.com', bio: 'Im a Frontend developer', age: 12, joined: '', moreInfo:"", role:"Admin"},
    {id: 4, avatar: '/Images/avatar4.png', name: 'Sajjaad', email: 'Sajjaad@gmail.com', bio: '', age: 12, joined: '', moreInfo:"", role:"Admin"}
  ]);

  const [showForm, setShowForm] = useState<boolean>(false);

  const addUser = (newUser: User) => {
    setUser(prev => [...prev, newUser]);
    setShowForm(false); // بعد از submit برگردیم به صفحه لیست
  }

  return (
    <main className='w-full min-h-screen bg-gray-100 flex py-10 items-center justify-center'>
      {showForm ? (
        <AddUserForm AddUserList={addUser} />
      ) : (
        <UserList user={user} onAddClick={() => setShowForm(true)} />
      )}
    </main>
  )
}

export default App
