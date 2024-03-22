import { motion } from 'framer-motion';
import React  from 'react'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import type { SectionName } from './types';


export  function useSectionInView(
    sectionName: SectionName, 
    threshold=0.75
        ) {
    const{ref, inView } = useInView({
        threshold:threshold
      }); 

      const { setActiveSection } = useActiveSectionContext();
  
      useEffect ( () =>{
        if (inView)
        {
          setActiveSection(sectionName)
        }
      },[inView]);

      return {ref};
}