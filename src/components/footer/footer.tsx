"use client"
import React, { useRef } from 'react'
import { IoIosSend } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { usePathname } from 'next/navigation';
export default function Footer() {
    const year = new Date().getFullYear()
    const ref  = useRef<HTMLFormElement>(null) 
   const path = usePathname()
   const Url:string[] = ["/","/newsLetter","/about","/projects"]
    function submitComment(evt:any) {
      evt.preventDefault();
      ref.current?.reset();
      toast.success("Your comment has been submitted!");
    }
     
  return (
    <div className={`flex flex-col ${Url.includes(path) ? "" : "hidden"}`}>
      <footer className="flex gap-5 text-[20px] dark:text-gray-100 sm:flex-row flex-col items-center text-[#1A1A1A] pb-8 sm:px-7 px-5 lg:px-10 sm:order-1 order-2 ">
        <div className="sm:block hidden ">©{year}</div>
        <div>Twitter</div>
        <div>LinkedIn</div>
        <div>Email</div>
        <div>RSS feed</div>
        <div>Add to Feedly</div>
        <div className="sm:hidden">©{year}</div>
      </footer>
      <form ref={ref} onSubmit={submitComment} className="sm:order-2 order-1">
        <div className="customP dark:text-[#7F56D9] font-medium max-w-[568px] text-center mx-auto">
          Share Your comments
        </div>
        <div className="flex gap-3 pb-10 w-full justify-center sm:gap-5 mt-4">
          <div className="flex gap-3 flex-col items-end">
            <textarea
              autoComplete="off"
              required
              className="w-[85vw] py-2 dark:text-slate-500 sm:w-[560px] h-[88px] px-5  border-[1.5px]  dark:placeholder:text-slate-500 rounded-[8px] outline-none text-sm sm:text-base "
              placeholder="Comments"
            />
            <button
              onClick={submitComment}
              className=" w-[25vw] gap-1  px-10 flex justify-center items-center text-sm sm:text-base sm:w-[100px] text-white  h-[45px] rounded-[8px] bg-[#7f56d9]"
            >
              <IoIosSend className="shrink-0 " /> Submit
            </button>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
