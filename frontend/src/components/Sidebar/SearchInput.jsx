import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaSearch } from "react-icons/fa";
import useGetConversation from '../../hooks/useGetConversation';
import useConversation from '../../zustand/useConversation';

const SearchInput = () => {

  const [search,setSearch] = useState("")
  const {conversation,setConversation} = useGetConversation()
  const {setSelectedConversation} = useConversation()

  const handleSearchSubmit = (e) =>{
    e.preventDefault()
    console.log("conversation",conversation)
    if(!search) return
    if(search.length<3){
      return toast("Atleast proivde more than 3 characers for searching")
    }
    const searchResult = conversation.find((c) => {
      // Ensure that `c` and `c.userName` are defined before accessing their properties
      if (c && c.userName) {
        return c.userName.toLowerCase().includes(search.toLowerCase());
      }
      return false; // Return false if `c` or `c.userName` is undefined
    });
    if(searchResult){
      setSelectedConversation(searchResult)
    }else{
      toast("Couldn't find that user")
    }
  }

  return (
    <form onSubmit={handleSearchSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder="Search" className='input input-bordered rounded-full w-72 p-2' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <FaSearch />
        </button>
    </form>
  )
}

export default SearchInput