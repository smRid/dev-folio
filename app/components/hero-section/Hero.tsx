"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  delay,
  easeIn,
  easeInOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import { useView } from "@/contexts/ViewContext";

export default function Hero() {
  const handWaveAnimation = {
    rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };

  const animateIn1 = {
    opacity: [0, 1],
    y: ["1rem", "0px"],
    transition: {
      delay: 1.5,
      duration: 0.7,
      ease: easeIn,
    },
  };

  const animateIn2 = {
    ...animateIn1,
    transition: {
      ...animateIn1.transition,
      delay: 2,
    },
  };

  const { setSectionInView } = useView();

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
  });

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("home");
  }, [inView, setSectionInView]);

  return (
    <section
      ref={ref}
      className="pt-32 sm:pt-28 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row min-h-screen items-center gap-6 sm:justify-between"
      id="home"
    >
      <div className="text sm:w-[60%]">
        <motion.div
          className="grid grid-cols-9 w-fit smm:flex gap-2 mb-1 xl:mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <p className="text-white/60 text-lg smm:text-xl md:text-2xl lg:text-2xl col-span-6">
            Hey, there
          </p>
          <motion.div
            animate={handWaveAnimation}
            style={{ transformOrigin: "bottom right" }}
            className="col-span-3"
          >
            <Image
              src="/hand-wave.svg"
              width={25}
              height={25}
              alt="hand-waving"
            />
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-[28px] smm:text-[32px] md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold mb-1"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <p className="text-white/60 inline">I&apos;m </p>
          <span className="bg-linear-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
            Sarker Mohammad Riduan
          </span>
          <p>a Software Engineer</p>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={animateIn2}
          className="text-white/40 text-base smm:text-lg lg:text-xl xl:text-2xl mb-3"
        >
          currently focused on building user experiences that drive growth.
        </motion.p>

        {/* IMAGE - Mobile Only */}
        <div className="flex justify-center w-full sm:hidden mb-4">
          <motion.div
            ref={imgRef}
            className="h-image flex items-center w-[240px] h-[290px] justify-center relative rounded-3xl sm:rounded-2xl overflow-hidden border border-white/20"
            initial={{ opacity: 0 }}
            animate={animateIn1}
          >
            <Image
              src="/me.png"
              priority
              fill
              alt="Riduan's photo"
              className="object-cover"
              sizes="240px"
            />
          </motion.div>
        </div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.5,
              duration: 0.7,
              ease: easeIn,
            },
          }}
          className="flex justify-center sm:justify-start mb-4"
        >
          <a
            href="https://github.com/smRid"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            <Image
              src="/github-icon.png"
              width={32}
              height={32}
              alt="GitHub"
              className="object-contain"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/smriduan/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            <Image
              src="/linkedin-Icon.png"
              width={32}
              height={32}
              alt="LinkedIn"
              className="object-contain"
            />
          </a>
          <a
            href="https://x.com/OmorRiduan32947"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            <Image
              src="/x-icon.png"
              width={32}
              height={32}
              alt="X (Twitter)"
              className="object-contain"
            />
          </a>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 3,
              duration: 0.7,
              ease: easeIn,
            },
          }}
          className="flex justify-center sm:justify-start gap-4 flex-wrap"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white rounded-full font-semibold text-base hover:from-[#7C3AED] hover:to-[#9333EA] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1fV1-h_MP-pTVil7L9Uq_VXn_jPp26IB-/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-gray-900 rounded-full font-semibold text-base hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* IMAGE - Desktop Only */}
      <div className="hidden sm:block">
        <motion.div
          ref={imgRef}
          className="h-image flex items-center w-[310px] h-[380px] xl:w-[390px] xl:h-[470px] justify-center relative rounded-2xl overflow-hidden border border-white/20"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <Image
            src="/me.png"
            priority
            fill
            alt="Riduan's photo"
            className="object-cover"
            sizes="(max-width: 768px) 310px, 390px"
          />
        </motion.div>
      </div>
    </section>
  );
}
