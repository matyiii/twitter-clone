import React, { useEffect, useState } from 'react'
import { Comment, Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import { HeartIcon, ChatBubbleLeftIcon, ArrowUpTrayIcon, ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'
import { fetchComments } from '../utils/fetchComments'


interface Props {
  tweet: Tweet
}

function Tweet({ tweet }: Props) {
  const [comments, setComments] = useState<Comment[]>([])

  const refreshComments = async () =>{
    const comments: Comment[] = await fetchComments(tweet._id)
    setComments(comments)
  }

  useEffect(() => {
    refreshComments();
  }, [])
  console.log(comments);
  
  return (
    <div className='flex flex-col p-5 space-x-3 border-gray-100 border-y'>
      <div className='flex space-x-3'>
        {/* fix IMG not showing */}
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
          {/* Comment Box */}
          {comments?.length > 0 && (
            <div>
              {comments.map(comment => (
                <div key={comment._id} className='relative flex space-x-2'>
                  <img src={comment.profileImg} className='' alt="Image error" />
                  <div>
                    <div className='flex items-center space-x-1'>
                      <p className='mr-1 font-bold'>{comment.username}</p>
                      <p className='hidden text-sm text-gray-500 lg:inline'>@{comment.username.replace(' ', '').toLowerCase()} ·</p>
                      <TimeAgo className='text-sm text-gray-500'
                      date={comment._createdAt} />
                    </div>
                  </div>
                  <p>{comment.comment}</p>
                </div>
              ))}
            </div>
          )}
    </div>
  )
}

export default Tweet