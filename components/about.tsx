"use client"

import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
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
            I&apos;m a{" "}
            <span className="font-medium">Software Engineer at Amazon</span>{" "}
            building systems at scale — currently focused on{" "}
            <span className="font-medium">Gen AI initiatives</span> and real-time
            data pipelines using <span className="font-medium">Apache Flink</span>.
            I enjoy the challenge of taking ambiguous problems and turning them into
            clean, reliable systems that just work.
          </p>

          <p className="mb-3">
            I hold a Master&apos;s in{" "}
            <span className="font-medium">Computer Science</span> from the{" "}
            <span className="font-medium">University of Washington</span>, where I
            also had the privilege of being named a{" "}
            <span className="font-medium underline">
              <a href="https://www.washington.edu/husky100/" target="_blank" rel="noopener noreferrer">Husky 100</a>
            </span>{" "}
            — a recognition of students making an impact beyond the classroom.
            Before Amazon, I spent time as a{" "}
            <span className="font-medium">Research Assistant</span> working
            alongside linguists to help preserve endangered languages through
            open-source software.
          </p>

          <p className="mb-3">
            My{" "}
            <span className="italic">core stack</span> is{" "}
            <span className="font-medium">Java, Spring Boot, and Apache Kafka</span>,
            and I&apos;ve picked up{" "}
            <span className="font-medium">React</span> and{" "}
            <span className="font-medium">Next.js</span> along the way — enough
            to build things like this portfolio.
          </p>

          <p>
            <span className="italic">Outside of work</span>, you&apos;ll find me
            on a cricket field or a football pitch, or out for a run trying to
            clear my head.
          </p>
        </motion.section>
      );
}
