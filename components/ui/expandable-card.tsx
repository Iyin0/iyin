"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { projects } from "@/lib/constant";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof projects)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.name}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.image}
                  alt={active.name}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.name}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-lg"
                    >
                      {active.name}
                    </motion.h3>
                    <div className="flex gap-2 mt-1 mb-2 flex-wrap">
                    {active.stacks.map((stack) => (
                      <span key={stack} className="text-slate-300 text-center md:text-left text-xs w-fit h-fit px-2 py-1 rounded-full bg-slate-700">{stack}</span>
                    ))}
                  </div>
                    <motion.p
                      layoutId={`description-${active.info}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.info}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.link}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-slate-500 text-white"
                  >
                    Visit
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-base lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    <p>{active.about}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full grid grid-cols-1 md:grid-cols-1 items-start gap-4">
        {projects.map((project) => (
          <motion.div
            layoutId={`card-${project.name}-${id}`}
            key={project.name}
            onClick={() => setActive(project)}
            className="p-4 flex flex-col  hover:bg-neutral-700 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <motion.div layoutId={`image-${project.name}-${id}`}>
                <Image
                  width={300}
                  height={300}
                  src={project.image}
                  alt={project.name}
                  className="h-50 w-80 min-w-50 sm:min-w-80 rounded-lg"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
               <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                <motion.h3
                    layoutId={`title-${project.name}-${id}`}
                    className="font-medium text-slate-300 md:text-left text-lg"
                  >
                    {project.name}
                  </motion.h3>
                  <div className="flex gap-2 mt-1 mb-2 flex-wrap sm:mt-0 sm:mb-0 max-w-[80%]">
                    {project.stacks.map((stack) => (
                      <span key={stack} className="text-slate-300 text-center md:text-left text-xs px-2 py-1 rounded-full bg-slate-700">{stack}</span>
                    ))}
                  </div>
               </div>
                <motion.p
                  layoutId={`description-${project.info}-${id}`}
                  className="text-slate-300 text-justify text-base"
                >
                  {project.info}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
