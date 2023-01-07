import React from 'react'
import {HomeIcon,BellIcon, HashtagIcon, BookmarkIcon,
    EnvelopeIcon, QueueListIcon, UserIcon, EllipsisHorizontalCircleIcon} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'
import { signOut, signIn, useSession } from 'next-auth/react'

function Sidebar(){
    const {data: session} = useSession()
    return(
        <div className='flex flex-col items-center col-span-2 px-4 md:items-start'>
            <img className='w-10 h-10 m-3' src='images/twitter_logo_blue.png' alt=''/>
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={HashtagIcon} title="Explore" />
            <SidebarRow Icon={BellIcon} title="Notifications" />
            <SidebarRow Icon={EnvelopeIcon} title="Messages" />
            <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
            <SidebarRow Icon={QueueListIcon} title="Lists" />
            <SidebarRow onClick={session ? signOut : signIn} Icon={UserIcon} title={session ? 'Sign Out' : 'Sign In'} />
            <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
        </div>
    )
}

export default Sidebar