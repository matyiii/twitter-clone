import React from 'react'
import {HomeIcon,BellIcon, HashtagIcon, BookmarkIcon,
    EnvelopeIcon, QueueListIcon, UserIcon, EllipsisHorizontalCircleIcon} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'

function Sidebar(){
    return(
        <div className='flex flex-col items-center col-span-2 px-4 md:items-start'>
            <img className='w-10 h-10 m-3' src='images/twitter_logo_blue.png' alt=''/>
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={HashtagIcon} title="Explore" />
            <SidebarRow Icon={BellIcon} title="Notifications" />
            <SidebarRow Icon={EnvelopeIcon} title="Messages" />
            <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
            <SidebarRow Icon={QueueListIcon} title="Lists" />
            <SidebarRow Icon={UserIcon} title="Sign In" />
            <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
        </div>
    )
}

export default Sidebar