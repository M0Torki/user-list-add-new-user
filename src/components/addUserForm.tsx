import type React from "react";
import { useState } from "react";
import type{User} from '../types/user'

type props = {
    AddUserList : (user : User) => void ;
}

function AddUserForm({AddUserList} : props) : React.JSX.Element {
    const [name , setName] = useState<string>('') ;
    const [avatar , setAvatar] = useState<string>('') ;
    const [email , setEmail]= useState<string>('') ;
    const [bio , setBio] = useState<string>('') ;
    const [age , setAge] = useState<number | ''>(0);
    const [joined , setJoined] = useState<string>('') ;
    const [role , setRole] = useState<string>('User');
    const [moreInfo , setMoreInfo] = useState<string>('') ;

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;

    switch (name) {
        case "name": setName(value); break;
        case "avatar": setAvatar(value); break;
        case "email": setEmail(value); break;
        case "bio": setBio(value); break;
        case "moreInfo": setMoreInfo(value); break;
        case "role": setRole(value); break;
        case "age": setAge(Number(value)); break;
    }
}
    const handleAddUserToList = (e: React.FormEvent) => {
    e.preventDefault();

    const AddNewUser: User = {
      id: Date.now(),
      name,
      avatar,
      email,
      bio,
      age: age === "" ? 0 : age,
      joined,
      role,
      moreInfo,
    };

    AddUserList(AddNewUser);

    // ریست فرم
    setName('');
    setAvatar('');
    setEmail('');
    setBio('');
    setAge(0);
    setJoined('');
    setRole('User');
    setMoreInfo('');
  };

    return <>
        <section className="w-fit px-8  h-2/3 py-4  rounded-md flex flex-col justify-center items-start bg-white">
           <form action="" className="w-full h-full" onSubmit={handleAddUserToList}>
                <div className="flex flex-col items-start gap-y-3 justify-center w-full h-full">
                   <div className="w-full h-fit flex  items-center gap-x-3">
                        <label htmlFor="name" className="grid grid-cols-1 items-start justify-center w-fit h-fit gap-y-2">
                        Name
                        <input onChange={e => setName(e.target.value)} name="name" value={name} className="bg-gray-100 w-80 h-12 rounded-md font-sans text-md text-gray-700 px-3 outline-none ring-1 ring-gray-300 focus:ring-4" type="text" />
                        </label>
                        <label htmlFor="password" className="grid grid-cols-1 items-start justify-center w-fit h-fit gap-y-2">
                        age
                        <input onChange={handleChange} name="age" value={age} className="bg-gray-100 w-20 h-12 rounded-md font-sans text-md text-gray-700 px-3 outline-none ring-1 ring-gray-300 focus:ring-4" type="number" />
                    </label>
                   </div>
                    <div className="w-full h-fit flex  items-center gap-x-3">
                        <label  htmlFor="email" className="grid grid-cols-1 font-sans text-gray-800  items-start justify-center w-w-fit h-fit gap-y-2">
                            Email
                            <input onChange={e => setEmail(e.target.value)} name="email" value={email} className="bg-gray-100 w-80 h-12 rounded-md font-sans text-md text-gray-700 px-3 outline-none ring-1 ring-gray-300 focus:ring-4" type="email"  />
                        </label>
                        <label htmlFor="select-role" className="grid grid-cols-1 font-sans text-gray-800  items-start justify-center w-fit h-fit gap-y-2">
                            Role 
                            <select name="role"  onChange={handleChange} value={role} className="w-20 h-12 rounded-md px-2 bg-gray-100 outline-none ring-1 ring-gray-300 focus:ring-4">
                                <option value="Admin">Admin</option>
                                <option value="Editor">Editor</option>
                                <option value="User">User</option>
                            </select>
                        </label>
                    </div>
                    <label  htmlFor="avatar" className="grid grid-cols-1 font-sans text-gray-800  items-start justify-center w-full h-fit gap-y-2">
                            Avatar
                            <input onChange={handleChange} name="avatar" value={avatar} className="bg-gray-100 w-full h-12 rounded-md font-sans text-md text-gray-700 px-3 outline-none ring-1 ring-gray-300 focus:ring-4" type="text"  />
                        </label>
                    <label htmlFor="bio" className="grid grid-cols-1 font-sans text-gray-800  items-start justify-center w-full h-fit gap-y-2">
                        Bio
                        <textarea onChange={handleChange} value={bio}  name="bio" id="" className="bg-gray-100 w-full h-24 rounded-md font-sans text-md text-gray-700 px-3 outline-none ring-1 ring-gray-300 focus:ring-4"></textarea>
                    </label>
                    <label htmlFor="more-than-about-me" className="grid grid-cols-1 font-sans text-gray-800  items-start justify-center w-full h-fit gap-y-2">
                        About Me more
                        <textarea onChange={handleChange} value={moreInfo}  name="moreInfo" id="" className="bg-gray-100 w-full h-28 rounded-md font-sans text-md text-gray-700 px-3 outline-none ring-1 ring-gray-300 focus:ring-4"></textarea>
                    </label> 
                    <button type="submit" className='w-full h-11 bg-[#3B82F6] hover:bg-[#2563EB] rounded-md font-semibold text-white'>Add User</button>
                </div> 
            </form> 
        </section>
    </>
}

export default AddUserForm