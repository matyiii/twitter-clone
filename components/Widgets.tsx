import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='hidden col-span-2 px-2 mt-2 lg:inline'>
        {/* Search box */}
        <div className='flex items-center p-3 my-2 space-x-2 bg-gray-100 rounded-full'>
            <MagnifyingGlassIcon className='w-5 h-5 text-gray-500'/>
            <input type="text" placeholder="Search Twitter" className='flex-1 bg-transparent outline-none'/>
        </div>
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="reactjs"
            options={{height: 500}}
        />
    </div>
  )
}

export default Widgets