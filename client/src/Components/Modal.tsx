import React from 'react'
import '../css/app.css'

const Modal = (props:any) => {
    const {open, setOpen} = props

    if(open[0] == true) {
        let timeout = setTimeout(() => {
            setOpen([false])
            clearTimeout(timeout)
      }, 1500)   
    }

  return (
    <>
    {open[1] == 1? <div className='fixed bg-green-300 w-[75%] h-[5rem] rounded-xl fade-in-modal text-center font-boldest text-3xl py-5'>Great job!</div>: 
        <div className='fixed bg-red-300 w-[75%] h-[5rem] rounded-xl fade-in-modal text-center font-boldest text-3xl py-1'>Oops! Give it another shot!</div>
    }
    </>
  )
}

export default Modal