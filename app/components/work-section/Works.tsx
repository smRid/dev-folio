import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Chat app",
      gitLink: "https://github.com/smRid/Real-time-Chat-App",
      liveLink: "https://chat-app-rt-4jo9.onrender.com",
      about:
        "A full-stack Realtime Chat Application built with real-time messaging. The app features user authentication, real-time communication, and a fully responsive UI optimized for both desktop and mobile devices.",
      stack: ["react.js",  "tailwindcss", "daisyUI ",  "express.js", "socket.io" , "mongodb"],
      img: "/chatapp2.png",
    },
    {
      title: "Twitter Clone",
      gitLink: "https://github.com/smRid/Twitter-Clone",
      liveLink: "https://twitter-clone-4s7l.onrender.com",
      about:
        "A modern, full-featured Twitter clone built with the MERN stack. Includes JWT authentication, post creation, likes, comments, profile editing, image uploads via Cloudinary, and real-time notifications — all in a clean, mobile-responsive UI.",
        stack: ["react.js",  "tailwindcss", "daisyUI ", "TanStack",  "express.js" , "mongodb"],
      img: "/x-clone.png",
    },
    {
      title: "Orebi Ecommerce",
      gitLink: "https://github.com/smRid/Orebi-Ecommerce",
      liveLink: "https://orebi-ecommerce-seven.vercel.app/",
      about:
        "Orebi Ecommerce is a modern, full-featured e-commerce platform that provides a seamless shopping experience for customers and powerful tools for store owners to manage their online business.",
      stack: ["react", "javascript", "tailwindcss", "firebase"],
      img: "/orebi.png",
    },
    // {
    //   title: "Multi-step form",
    //   gitLink: "",
    //   liveLink: "",
    //   about:
    //     "This site features a clean, user-friendly multi-step form for subscribing to a gaming service. Users input personal info, select a plan (monthly or yearly), choose add-ons (online service, larger storage, customizable profile), and review the summary before confirming.",
    //   stack: ["html", "sass", "javascript", "ms clarity"],
    //   img: "/multistep.svg",
    // },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
