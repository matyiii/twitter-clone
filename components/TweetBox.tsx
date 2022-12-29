import React, { useState } from 'react'
import { CalendarIcon, FaceSmileIcon, MagnifyingGlassCircleIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'

function TweetBox() {
    const [input,setInput] = useState<string>('')

  return (
    <div className='flex p-5 space-x-2'>
        <img className='object-cover mt-4 rounded-full h-14 w-14'
        src='https://links.papareact.com/gll' alt='' />
        
        <div className='flex items-center flex-1 pl-2'>
            <form className='flex flex-col flex-1'>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Placeholder' className='w-full h-24 outline-none placeholder:text-xl'/>
                <div className='flex items-center'>
                    <div className='flex flex-1 space-x-2 text-twitter'>
                        {/* Icons */}
                        <PhotoIcon className='w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150'/>
                        <MagnifyingGlassCircleIcon className='w-5 h-5'/>
                        <FaceSmileIcon className='w-5 h-5'/>
                        <CalendarIcon className='w-5 h-5'/>
                        <MapPinIcon className='w-5 h-5'/>
                    </div>
                    <button  disabled={!input} className='px-5 py-2 font-bold text-white rounded-full disabled:opacity-30 bg-twitter'>Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox