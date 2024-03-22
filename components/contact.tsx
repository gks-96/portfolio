"use client";
import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';
import SectionHeading from './section-heading'
// import toast from "react-hot-toast";
import ContactFormEmail from "@/email/contact-form-email"
import { useFormStatus } from 'react-dom';
import SubmitBtn from './submit-btn';
import toast from "react-hot-toast";

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    const{ pending} = useFormStatus();
    
  return (
    <motion.section  ref ={ref} id="contact" 
     className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
     initial={{
        opacity:0,
     }}
     whileInView={{
        opacity:1,
     }}
     transition={{
        duration:1,
     }} 
     viewport={{
        once:true,
     }}>
    <SectionHeading> Contact Me</SectionHeading>
    <p className ="text-gray-700  dark:text-white/80 "> Please contact me directly at 
        <a className="underline" 
          href="mailto:gurkiratguliani@gmail.com"> gurkiratguliani@gmail.com 
        </a> {" "}
        or through this form 
    </p>

      <form className="mt-10 flex flex-col dark:text-black "
      // 
      action={async( formData)  =>{
         console.log(formData);
         const {data,error} = await sendEmail(formData);

         if ( error)
         {
            toast.error(error);
            return; 
         }
         toast.success("Email sent successfully");

      }}>
        <input  className="h-14 px-4 rounded-lg borderBlack
         dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity:100 transition-all dark:outline-none"
        type="email"
        name="senderEmail"
        required 
        maxLength={500}
         placeholder="Your email" /> 
        <textarea className="h-52 my-3 rounded-lg borderBlack p-4
        dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity:100 transition-all dark:outline-none"
        name="senderMessage"
        required 
        maxLength={5000}
        placeholder="Your message"/>
      <SubmitBtn /> 
    </form>
    </motion.section>
  )
}
