
"use client"

import React  from 'react'
import SectionHeading from './section-heading'
import { projectsData} from "@/lib/data";
import Image from "next/image";
import {useScroll} from "framer-motion"
import Project from "@/components/project"
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {

  const {ref} = useSectionInView("Projects",0.5)
    

  return (
   <section ref ={ref} id="projects" className="scroll-mt-28 mb-28" >
    <SectionHeading> My Projects</SectionHeading>
    <div>
        {
        projectsData.map((project,index)=>(
            <React.Fragment key={index}>
            <Project {...project} />
            </ React.Fragment>
        )) 
        }
    </div>
    <li>
        
    </li>
    </section>
  )
}
