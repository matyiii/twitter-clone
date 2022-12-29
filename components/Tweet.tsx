import React from 'react'
import { Tweet } from '../typings'

interface Props{
    tweet: Tweet
  }

function Tweet({tweet}: Props) {
  return (
    <div>
        <img src={tweet.profileImage} alt=''/>
    </div>
  )
}

export default Tweet