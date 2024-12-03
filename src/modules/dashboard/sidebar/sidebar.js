"use client";
import React from 'react'
import { FaLock } from "react-icons/fa6";

function Sidebar() {

//Function to handle btn click
const handlebtnclick =()=>{
    alert("Open Microsoft Store");
}
  return (
    <div className='bg-sidebg flex flex-col gap-[40px] justify-center items-center min-h-screen w-full'>
       <div className='flex flex-col justify-center items-center px-[10px]'>
          <div>
            <img src='/sidesection/wa669aeJeom.png ' className='max-w-[320px] max-h-[188px]'></img>
          </div>
          <div className='mt-[30px]'>
             <h1 className='font-sfpro text-white text-[36px] font-[300] text-center'>Download WhatsApp for Windows</h1>
          </div>
          <div className='mt-[20px]'>
           <p className='text-sidepara text-[14px] font-[400] max-w-[560px] text-center'>Make calls, share your screen and get a faster experience when you download the Windows app.</p>
          </div>
          <div className='mt-[30px] '>
            <button
            onClick={handlebtnclick}
            className='px-[24px] py-[10px] bg-sidebtn rounded-[24px]'>Get from Microsoft Store</button>
          </div>
       </div>
       <div className='flex justify-center items-center px-[10px] gap-[5px]'>
        <FaLock className='text-sidepara1 text-[12px]'/>
         <p className='text-sidepara1 text-[14px]  text-center'>Your personal messages are end-to-end encrypted </p>
       </div>
    </div>
  )
}

export default Sidebar
