"use client";

import { LampContainer } from "@/components/ui/lamp";
import { FloatingDock } from "@/components/ui/floating-dock";
import { experiences, links, stacks } from "@/lib/constant";
import { motion } from "motion/react";
import { ExpandableCardDemo } from "@/components/ui/expandable-card";
import { IconBuildings } from "@tabler/icons-react";

export default function Home() {
  return (
    <main>
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
          I&apos;m a software engineer with a passion for building products that
          help people live better lives.
        </motion.p>
      </LampContainer>
      <div className="flex items-center justify-center h-auto w-full fixed bottom-10 -mt-20">
        <FloatingDock
          mobileClassName="hidden"
          items={links.map((link) => ({
            ...link,
            icon: <link.icon className="h-full w-full text-neutral-500 dark:text-neutral-300"/>,
          }))}
        />
      </div>
      <div id="my-stacks" className="flex flex-col lg:flex-row gap-10 items-center justify-center h-auto w-full px-4 lg:px-40 lg:py-20 pb-10">
        <p className="text-justify text-lg sm:text-xl text-[#cad5e2] lg:max-w-[50%]">
          Hey there! I&apos;m a passionate software developer specializing in crafting dynamic
          frontend applications using React.js, Next.js and Tailwind CSS. With a keen eye for detail,
          I&apos;ve honed my skills in developing robust
          servers using Node.js and Nest.js. My expertise extends to designing software
          architecture and managing databases, where I&apos;ve adeptly worked with MySQL and MongoDB.
          Additionally, I&apos;m well-versed in leveraging  cloud services like AWS for seamless deployment -
          from setting up servers on AWS EC2  through GitHub Actions and Docker to harnessing AWS storage
          solutions such as RDS for SQL  data storage and S3 for efficient file management.
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
    </main>
  );
}
