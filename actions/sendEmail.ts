"use server";

import { validateString,getErrorMessage } from "@/lib/util";
import { Resend }  from "resend"

import ContactFormEmail from "@/email/contact-form-email"
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async(formData: FormData) =>{
    // name from formData
        const senderEmail = formData.get('senderEmail');
        const message = formData.get('senderMessage');
       
        // simple server side validation 
        if ( !validateString(senderEmail,500) )
        {
            return {
                error:"invalid sender email"
            };
        }
        if ( !validateString(message,5000) )
        {
            return {
                error:"invalid message"
            };
        }
        let data; 
        try {
            
            data = await resend.emails.send({
                from:'Contact Form <onboarding@resend.dev>',
                to:'gurkiratguliani@gmail.com',
                subject:"Message from contact form",
                reply_to: senderEmail as string,
                // react: <ContactFormEmail message={message} senderEmail = {senderEmail} />
                react:React.createElement(ContactFormEmail,{
                    message:message as string ,
                    senderEmail:senderEmail as string 
                })
            });
        }
        catch(error:unknown)
        {
            return {
                error: getErrorMessage(error)
            }
        }  
        return {
            data
        } ;
  }



