"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const forminput = () => {
    const form = useRef();

    const sendEmail = (e) => {
       
      e.preventDefault();
  
      emailjs
        .sendForm(process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_SERVICE_ID2, process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_TEMPLATE_ID2, form.current, {
          publicKey: process.env.NEXT_PUBLIC_REACT_APP_EMAILJS_PUBLIC_KEY,
        })
        .then(
            () => {
              form.current.reset()
              toast("Form submitted successfully")
            },
            (error) => {
              toast('FAILED...', error.text)
            },
        );
    };
  return (
    <form 
     ref={form} onSubmit={sendEmail}
     className="w-full lg:w-[50%] bg-[#d3d3d30e] lg:h-[460px] rounded-[4px] shadow-sm  p-[0.5rem] lg:p-[2rem]">
        <input
          type="text"
          name="email"
          placeholder="Email address"
          className="w-full h-[32px] lg:h-[51px] bg-[#03345F1F] border-[1.3px] border-[#03345F] outline-none rounded-[4px] p-[0.5rem] lg:p-[1rem] text-white font-medium text-[10px] lg:text-[14px]"
        />
        <textarea
          name="message"
          placeholder='Type your message here...'
          className="w-full h-[175px] lg:h-[222px] bg-[#03345F1F] border-[1.3px] border-[#03345F] outline-none rounded-[4px] p-[0.5rem] lg:p-[1rem] text-white font-medium mt-[0.5rem] lg:mt-[1rem] text-[10px] lg:text-[14px] resize-none"
        />
        <button type='submit' className="w-full h-[40px] lg:h-[67px] bg-[#03345F] mt-[0.5rem] lg:mt-[1rem] rounded-[4px] flex justify-center items-center font-semibold text-white text-[10px] lg:text-[16px]">
          Submit
        </button>
        <ToastContainer/>
      </form>
  )
}

export default forminput