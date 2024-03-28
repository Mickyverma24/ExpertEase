import React from 'react'
import SearchConversation from './SearchConversation'
import Conversations from './Conversations'
import LogOutButton from './LogOutButton'

const SideBar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchConversation/>
        <div className='divider mx-3'></div>
        <Conversations/>
        <LogOutButton/>
    </div>
  )
}

export default SideBar