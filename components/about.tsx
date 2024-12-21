"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing my HSC in <span className="font-medium">Commerce</span>, I discovered my passion for technology and pursued a B.Sc. in Information Technology at Dahanukar College, followed by a Master's in Computer Applications at Hiray College. Along the way, I honed my skills in{" "}
        <span className="font-medium">full-stack web development</span> at RST coding classes, focusing on my core stack:{" "}
        <span className="font-medium">React, Node.js, and MongoDB</span>.{" "}
        <span className="italic">What excites me most about programming</span> is the problem-solving aspect—the thrill of finding solutions to complex challenges keeps me motivated. I'm always eager to explore new technologies and expand my skill set. Currently, I&apos;m seeking a{" "}
        <span className="font-medium">full-time position</span> as a software developer where I can contribute my expertise and grow professionally.
      </p>
      <p className="mb-3">
        When I&apos;m not coding, you&apos;ll find me playing video games, enjoying movies, or spending time with my dog. I also have a curious mind and enjoy learning about{" "}
        <span className="font-medium">history</span>,{" "}
        <span className="font-medium">philosophy</span>, and even picking up new skills like{" "}
        <span className="font-medium">playing the guitar</span>. Let&apos;s connect and create something amazing together!
      </p>
    </motion.section>
  );
}
