import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ProShop from "@/public/ProShop.png";
import PropertyPulse from "@/public/PropertyPulse.png"
import ProPizza from "@/public/ProPizza.png"

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
    title: "BSc IT",
    location: "M.L. Dahanukar College of Commerce, Mumbai University",
    description:
      "Completed a Bachelor of Science in Information Technology from Mumbai University, gaining foundational knowledge in IT and software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2022",
  },
  {
    title: "MCA",
    location: "LATE BHAUSAHEB HIRAY S.S. Trust's Institute of Computer Application, Mumbai University",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Front-End Developer",
    location: "Vile Parle, Mumbai",
    description:
      "I'm now a front-end developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "ProShop",
    description:
      "In the ProShop project, I developed an eCommerce platform with product listings, shopping cart functionality, and payment gateway integration.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "JavaScrpt"],
    imageUrl: ProShop,
    link:"https://proshop-d8k5.onrender.com",
  },
  {
    title: "PropertyPulse",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: PropertyPulse,
    link:"https://proshop-d8k5.onrender.com",
  },
  {
    title: "Pro Pizza",
    description:
      "A seamless and interactive pizza ordering application built for a delightful user experience.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: ProPizza,
    link:"https://propizza.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Java",
  "MongoDB",
  "Redux",
  "GraphQL",
  "AWS",
  "Express",
  "PostgreSQL",
  "Python",
  "SQL",
  "Framer Motion",
] as const;
