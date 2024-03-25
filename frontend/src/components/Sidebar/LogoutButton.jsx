import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {

  const {loading,logout} = useLogout()

  return (
    <div className='mt-auto w-6 h-6 text-white cursor-pointer'><RiLogoutBoxLine onClick={logout}/></div>
  )
}

export default LogoutButton