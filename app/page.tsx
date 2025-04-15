"use client";

import { LampContainer } from "@/components/ui/lamp";
import { FloatingDock } from "@/components/ui/floating-dock";
import { links, stacks } from "@/lib/constant";
import { motion } from "motion/react";
import { ExpandableCardDemo } from "@/components/ui/expandable-card";

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
          className="mt-4 text-center text-lg sm:text-2xl bg-gradient-to-br from-[#cad5e2] to-[#62748e] py-4 bg-clip-text tracking-tight text-transparent"
        >
          I&apos;m a software engineer with a passion for building products that
          help people live better lives.
        </motion.p>
      </LampContainer>
      <div className="flex items-center justify-center h-auto w-full absolute bottom-30 sm:bottom-10">
        <FloatingDock
          mobileClassName="translate-y-20"
          items={links.map((link) => ({
            ...link,
            icon: <link.icon className="h-full w-full text-neutral-500 dark:text-neutral-300"/>,
          }))}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center h-auto w-full px-4 lg:px-40 py-40">
        <p className="text-justify text-lg sm:text-2xl bg-gradient-to-br from-[#cad5e2] to-[#62748e] bg-clip-text tracking-tight text-transparent lg:max-w-[50%]">
          Hey there! I&apos;m a passionate software developer specializing in crafting dynamic
          frontend applications using React.js, Next.js and Tailwind CSS. With a keen eye for detail,
          I&apos;ve honed my skills in developing robust
          servers using Node.js and Nest.js. My expertise extends to designing software
          architecture and managing databases, where I&apos;ve adeptly worked with MySQL and MongoDB.
          Additionally, I&apos;m well-versed in leveraging  cloud services like AWS for seamless deployment -
          from setting up servers on AWS EC2  through GitHub Actions and Docker to harnessing AWS storage
          solutions such as RDS for SQL  data storage and S3 for efficient file management.
        </p>
        <div id="my-stacks" className="">
          <div className="grid gap-4 grid-cols-4">
            {stacks.map((stack) => (
              <div key={stack.title} className="flex flex-col items-center text-neutral-500 dark:text-neutral-300">
                <stack.icon className="h-10 w-10" />
                <span>{stack.title}</span>
              </div>
            ))}
          </div>
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
