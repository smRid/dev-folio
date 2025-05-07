import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";


const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        About Me
      </AnimatedTitle>
      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          I'm a Computer Science & Engineering undergraduate specializing in Web Development, passionate about building intuitive, responsive web applications. As a Frontend Developer, I create user-focused interfaces and continuously explore new tech stacks across both frontend and backend.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Wanna learn more? Here&apos;s <br className="hidden md:block" />
            <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/1O-oWpLf5_S8YYEn0e8ve6piDUxupDKIB/view?usp=sharing"
              }
            >
              my résumè
            </Link>
            .
          </AnimatedBody>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+), React, Next.js, Redux, React Query, HTML5.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              UI Libraries
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              CSS3, Tailwind CSS, Framer Motion, Daisy UI ,Bootstrap, ReCharts.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Backend Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Node, Express, MongoDB, Socket.io, REST Api, Firebase, MySQL.
            </AnimatedBody>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-20 lg:mt-10 mx-auto w-fit">
        {/* <ContraButton /> */}
      </div>
    </section>
  );
}
