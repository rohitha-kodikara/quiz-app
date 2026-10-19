import React from 'react'
import ContentBox from '../ContentBox'

const Error = () => {
  return (
     <ContentBox>
       <div className="mx-auto mb-8 flex size-28 items-center justify-center rounded-full bg-linear-to-br from-rose-500 to-orange-400 text-white shadow-[0_14px_28px_rgba(244,63,94,0.3)]">
         <svg
           aria-hidden="true"
           className="size-14"
           fill="none"
           stroke="currentColor"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           viewBox="0 0 24 24"
         >
           <path d="M12 9v4" />
           <path d="M12 17h.01" />
           <path d="M10.3 3.8 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3l-7.7-13.2a2 2 0 0 0-3.4 0Z" />
         </svg>
       </div>
       <h1 className="mb-4 text-4xl font-bold text-orange-950">
         Something went wrong
       </h1>
       <p className="text-lg text-orange-800/80">
         We could not load this page. Please try again later.
       </p>
       <button
         type="button"
         className="mx-auto mt-8 block rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-8 py-3 text-lg font-semibold text-white shadow-[0_10px_20px_rgba(79,70,229,0.25)]"
       >
         Refresh page
       </button>
     </ContentBox>
  )
}

export default Error
