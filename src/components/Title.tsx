import React from 'react'

const Title = ({children, id}:any) => {
  return (
    <div>
        <h1 className='text-2x1 font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-white'  id={id && id} >{children}
        </h1></div>
  )
}


export default Title