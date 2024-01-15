import React from 'react'

const Background = () => {
  return (
    <>
        <div className='fixed z-[2] w-full h-full '>
            <div className="relative top-[50px] flex justify-center text-2xl text-gray-600 font-semibold">Documents</div>
            <h1 className="absolute text-[13vw] text-zinc-900 top-1/2 left-1/2 leadind-none tracking-tighter -translate-x-[50%] -translate-y-[50%]">SmartDocs.</h1>
        </div>
    </>
  )
}

export default Background
