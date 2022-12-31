import React from 'react'
import { Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import { HeartIcon, ChatBubbleLeftIcon, ArrowUpTrayIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'


interface Props {
  tweet: Tweet
}

function Tweet({ tweet }: Props) {
  return (
    <div className='flex flex-col p-5 space-x-3 border-gray-100 border-y'>
      <div className='flex space-x-3'>
        <img className='object-cover w-10 h-10 rounded-full' src={tweet.profileImage} alt='' />
        <div>
          <div className='flex items-center space-x-1'>
            <p className='mr-1 font-bold'>{tweet.username}</p>
            <p className='hidden pr-1 text-sm text-gray-500 sm:inline'>
              @{tweet.username.replace(' ', '').toLowerCase()} ·
            </p>
            <TimeAgo className='text-sm text-gray-500'
              date={tweet._createdAt} />
          </div>
          <p className='pt-1'>{tweet.text}</p>
          {tweet.image &&
            <img src={tweet.image} alt='' className='object-cover m-5 mb-1 ml-0 rounded-lg shadow-sm max-h-60' />
          }
        </div>
      </div>
      <div className='flex justify-between mt-3'>
        <div className='flex items-center space-x-3 text-gray-400 cursor-pointer'>
          <ChatBubbleLeftIcon className='w-5 h-5' />
          <p>99</p> {/* TODO: Comment count */}
        </div>
        <div className='flex items-center space-x-3 text-gray-400 cursor-pointer'>
          <ArrowPathRoundedSquareIcon className='w-5 h-5' />
        </div>
        <div className='flex items-center space-x-3 text-gray-400 cursor-pointer'>
          <HeartIcon className='w-5 h-5' />
        </div>
        <div className='flex items-center space-x-3 text-gray-400 cursor-pointer'>
          <ArrowUpTrayIcon className='w-5 h-5' />
        </div>
      </div>
    </div>
  )
}

export default Tweet