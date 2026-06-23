import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import nasaImg from "@/public/NASACompetition.png";
import metilda from "@/public/MeTILDA.png"
import portfolioImg from "@/public/Portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer, Amazon",
    location: "Bellevue, WA",
    description:
      "Working on Gen AI intitatives, designed Flink application,Oncall :)",
    icon: React.createElement(CgWorkAlt),
    date: "Oct, 2024 - Present",
  },
  {
    title: "Research Assistant",
    location: "Bothell,WA",
    description:
      "Responsible for cross colalboration with linguist researchers and leading project development",
    icon: React.createElement(CgWorkAlt),
    // LuGraduationCap
    date: "May,2023- Jun,2024",
  },
  {
    title: "Software Developer, EdgeVerve",
    location: "Bangalore,Karnataka",
    description:
      "Worked as a Backend Developer in microservice based architecture.My stack included Spring Boot,Spring Batch, Apache Kafka",
    icon: React.createElement(CgWorkAlt),
    date: "Nov,2020 - Sep,2022",
  },
  {
    title: "Software Engineer Intern, PayPal",
    location: "Chennai, Tamil Nadu",
    description:
      "Responsible for analyzing the risk actions and developing monitoring tools in Tableau",
    icon: React.createElement(CgWorkAlt),
    date: "Jan,2020 - Jun,2020",
  },
  {
    title: "Software Developer Intern, IDfy",
    location: "Mumbai, Maharashtra",
    description:
      "Worked on developing a product that can ease the process of assisted Video KYC. My tech stack included React, Google Analytics. ",
    icon: React.createElement(CgWorkAlt),
    date: "Jun,2019 - Dec,2020",
  },
] as const;

export const projectsData = [
  {
    title: "MeTILDA",
    description:
      "Contributed to Open Source software, MeTILDA that researchers can use to study and preserve endangered languages like Blackfoot",
    tags: ["React", "Python", "Django", "PostgreSQL", "Firebase","Heroku"],
    imageUrl: metilda,
  },
  {
    title: "NASA's Wildfire Climate Tech Challenge",
    description:
      "Proposed a solution to better manage wildfire by analyzing the region terrain which reduced the effective response time",
    tags: ["Python", "FIRMS", "WorldWind"],
    imageUrl: nasaImg,
  },
  {
    title: "Portfolio",
    description:
      "Personal portfolio project",
    tags: ["Framer", "Next.js", "React", "Tailwind", "Vercel"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "SpringBoot",
  "Apache Kafka",
  "Apache Flink",
  "Spring Batch",
  "React",
  "React Native",
  "NextJs",
  "AWS",
  "Docker",
  "Kubernetes",
  "Azure DevOps",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "RabbitMQ",
  "Firebase",
  "System Design",
  "REST APIs",
] as const;