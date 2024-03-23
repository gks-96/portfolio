import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header";
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from "react-hot-toast";
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gurkirat | Personal Portfolio',
  description: 'Gurkirat is a backend java developer with 3 years of experiencd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      {/* concatenating multiple classes */}
      <body className= { `${inter.className} bg-gray-50 text-gray-950 relative pt-28
      sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#e5cde6] -z-10 absolute top-[-6rem] right-[11rem]
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75] dark-bg-[#946263] "></div>
        <div className="bg-[#d4cef0] -z-10 absolute top-[-1rem] left-[-35rem]
        h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75]
        md:left-[-33rem]
        lg:left-[-28rem]
        x1:left-[-15rem]
        2xl:left-[-5rem] dark-bg-[#676394] "></div>
        <ThemeContextProvider>

       
        <ActiveSectionContextProvider>
          <Header/>
          {children}

          <Toaster position="top-right"/>
          <Footer/>
          <ThemeSwitch/>
        </ActiveSectionContextProvider>
          <Analytics />
          </ThemeContextProvider>

        </body>
    </html>
  )
}
