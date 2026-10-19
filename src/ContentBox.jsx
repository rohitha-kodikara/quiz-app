import React from 'react'

const ContentBox = ({children, maxWidth = "max-w-165", bgColor ="border-blue-300 bg-linear-to-br from-blue-100 via-sky-100 to-blue-200"}) => {
  return (
     <div
        className={`w-full ${maxWidth}  rounded-3xl  ${bgColor} px-7 py-16 text-center shadow-[0_24px_60px_rgba(0,0,0,0.3)] sm:px-10`}
      >
      {children}
    </div>
  )
}

export default ContentBox
