import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ProShop from "@/public/ProShop.png";
import PropertyPulse from "@/public/PropertyPulse.png"
import ProPizza from "@/public/ProPizza.png"
import Chatty from "@/public/Chatty.png"

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
      "Completed Master of Computer Applications (MCA), gaining solid knowledge of full-stack web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Junior Software Developer",
    location: "Andheri, Mumbai",
    description:
      "I'm now a Full Stack developer. My stack includes React, Next.js, Nest.js, TypeScript, Tailwind, TypeORM and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2025 - Present",
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
  {
    title: "Chatty",
    description:
      "A real-time chat application built with the MERN stack and Socket.io, enabling seamless messaging with instant updates. It features user authentication, live conversations, and a responsive UI for smooth communication.",
    tags: ["React", "Node", "Socket.io", "Tailwind", "Daisy UI"],
    imageUrl: Chatty,
    link:"https://github.com/dafale-gaurav/CHAT_APP",
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
  "TypeORM",
  "Nest.js",
  "Python",
  "SQL",
  "Framer Motion",
  "Socket.io",
  "Daisy UI",
] as const;
