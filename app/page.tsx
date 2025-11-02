"use client";

import { LampContainer } from "@/components/ui/lamp";
import { FloatingDock } from "@/components/ui/floating-dock";
import { experiences, links, stacks } from "@/lib/constant";
import { motion } from "motion/react";
import { ExpandableCardDemo } from "@/components/ui/expandable-card";
import { IconBuildings, IconMapPin, IconMail, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  const yearsOfExperience = year - 2020;
  return (
    <main className="relative">
      <LampContainer>
        <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-[#cad5e2] to-[#62748e] py-4 bg-clip-text text-center text-2xl sm:text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Hi, I&apos;m Iyin
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 text-center text-lg sm:text-2xl text-[#cad5e2] py-4"
        >
          {`I'm a software engineer with ${yearsOfExperience} years of experience building scalable, responsive, and user-focused web and mobile applications`}
        </motion.p>
      </LampContainer>
      <div className="flex items-center justify-center h-fit w-full sticky top-15 -mt-28 sm:-mt-20">
        <FloatingDock
          mobileClassName="hidden"
          items={links.map((link) => ({
            ...link,
            icon: <link.icon className="h-full w-full text-neutral-500 dark:text-neutral-300"/>,
          }))}
        />
      </div>
      <div id="my-stacks" className="flex flex-col lg:flex-row gap-10 items-center justify-center h-auto w-full px-4 lg:px-40 lg:py-20 pt-10 sm:pt-0 pb-10">
        <p className="text-justify text-lg sm:text-xl text-[#cad5e2] lg:max-w-[50%]">
          Hey there! I&apos;m a passionate software engineer skilled in React.js, Next.js, Flutter, Node.js, GraphQL, and AWS,
          with proven expertise in designing intuitive UIs, integrating payments, and delivering end-to-end solutions across
          healthcare, insurance, and SaaS platforms. Adept at collaborating with cross-functional teams to ship features that
          improve user experience, boost retention, and drive product adoption. Seeking opportunities in forward-thinking organizations
          to contribute technical expertise and innovation.
        </p>
        <div className="">
          <div className="grid gap-4 grid-cols-4">
            {stacks.map((stack) => (
              <div key={stack.title} className="flex flex-col items-center text-neutral-500 dark:text-neutral-300">
                <stack.icon className="h-10 w-10" />
                <span className="text-center">{stack.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="my-experiences" className="flex flex-col items-center h-auto w-full px-4 lg:px-40 pb-40">
        <div className="lg:max-w-[80%] w-full flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-medium bg-gradient-to-br from-[#cad5e2] to-[#62748e] py-4 bg-clip-text tracking-tight text-transparent">Experiences</h2>
          {experiences.map((experience, index) => (
              <div key={index} className="flex flex-col text-slate-300 mb-5">
                <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-4">
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <IconBuildings className="w-4 h-4" />
                    {experience.company}
                  </h3>
                  <div className="flex gap-2">
                    <span className="text-slate-300 text-center md:text-left text-xs px-2 py-1 h-fit rounded-full bg-slate-700">{experience.location}</span>
                    <span className="text-slate-300 text-center md:text-left text-xs px-2 py-1 h-fit rounded-full bg-slate-700">{experience.type}</span>
                  </div>
                </div>
                <div className="flex my-1 gap-2 items-center">
                  <h3 className="text-base font-medium">{experience.title}</h3>
                  <div className="w-px h-4 bg-slate-300" />
                  <p className="text-sm">{experience.duration}</p>
                </div>
                <ul className="list-disc list-outside pl-5">
                  {experience.description.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
      <div id="my-projects" className="flex flex-col items-center h-auto w-full px-4 lg:px-40 pb-40">
        <div className="lg:max-w-[80%] w-full flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-medium bg-gradient-to-br from-[#cad5e2] to-[#62748e] py-4 bg-clip-text tracking-tight text-transparent">Projects</h2>
          <ExpandableCardDemo />
        </div>
      </div>
      <footer className="flex flex-col sm:flex-row justify-between gap-1 sm:items-center w-full px-4 lg:px-40 py-5 sm:py-10 border-t border-neutral-800">
        <div className="flex flex-col sm:items-center">
          <p className="sm:text-center text-sm sm:text-base text-white">
            © {new Date().getFullYear()} Iyin Bilewu. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-2" id="contact">
          <div className="flex gap-1 items-center">
            <IconMapPin className="inline-block h-5 w-5 mr-2 text-white" />
            <p className="text-white text-sm sm:text-base">Lisbon, Portugal</p>
          </div>
          <div className="flex gap-1 items-center">
            <IconPhone className="inline-block h-5 w-5 mr-2 text-white" />
            <Link href="tel:+351920617404" className="text-white text-sm sm:text-base">+351 920 617 404</Link>
          </div>
          <div className="flex items-center gap-1">
            <IconMail className="inline-block h-5 w-5 mr-2 text-white" />
            <Link href="mailto:p2iyinoluwa@gmail.com" className="text-white text-sm sm:text-base">p2iyinoluwa@gmail.com</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
