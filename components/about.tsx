"use client"

import { motion } from 'framer-motion';
import React  from 'react'
import SectionHeading from './section-heading';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import {useSectionInView} from "@/lib/hooks"

export default function About() {

    const {ref} = useSectionInView("About")
    
    return (
        <motion.section
          ref ={ref}
          className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          id="about"
        >
          <SectionHeading>About me</SectionHeading>
          <p className="mb-3">
            I am currently a graduate student pursuing {" "}
            <span className="font-medium">Computer Science </span> at the {" "}
            <span className="font-medium">University of Washington. </span>
            I am a passionate problem solver and a dedicated individual 
            who likes to take ownership of the tasks and get things done.{" "}
            My 
            <span className="italic"> core stack </span>
            is{" "}
            <span className="font-medium">
              Java, Spring Boot, Apache Kafka
            </span>
             {" "}along with some familarity with <span className="font-medium"> React </span> and <span className="font-medium"> NextJs</span>.
             Recently, I was recipient of the <span className="font-medium underline"> <a href="https://www.washington.edu/husky100/">Husky 100  </a></span> award. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a Software
            Developer.
          </p>
    
          <p>
            <span className="italic">When I am not coding</span>, I enjoy 
            outdoor activities like running, cricket and football {" "}
            <span className="font-medium"> </span>. I also create awareness
            regarding <span className="font-medium">Mental Health </span> on our campus through tabling events, social media posts.  
          </p>
        </motion.section>
      );
}
