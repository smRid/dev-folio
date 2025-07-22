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
      liveLink: "https://chat-app-smr.onrender.com/",
      about:
        "Real-time Chat Application built with live messaging capabilities. The app features user authentication, real-time communication, and a fully responsive UI optimized for both desktop and mobile devices.",
      stack: ["react.js",  "tailwindcss", "daisyUI ",  "express.js", "socket.io" , "mongodb"],
      img: "/chatapp2.png",
    },

    {
      title: "AI-Powered SAAS App",
      gitLink: "https://github.com/smRid/ai-saas-app",
      liveLink: "https://quickgenai-smr.vercel.app",
      about:
        "Quickgen.ai is an AI SaaS platform that delivers a powerful suite of intelligent tools for content creation, advanced image editing, and resume analysis, all seamlessly integrated within a responsive dashboard designed for efficiency and ease of use.",
      stack: ["React", "Tailwind", "Clerkauth", "Node.js", "Express.js", "PostgreSQL", "OpenAI"],
      img: "/rsz_preview.png",
    },

    {
      title: "Ecommerce  App",
      gitLink: "https://github.com/smRid/E-commerce-store-mern",
      liveLink: "https://shopzi.onrender.com/",
      about:
        "Modern E-Commerce web app with Redis for high-performance caching and Stripe for secure payments. Features include a full storefront, shopping cart, checkout, user authentication, and an admin dashboard for managing products, orders, and users.",
      stack: ["react.js", "tailwindcss", "express.js", "stripe","mongodb" , "redis" ],
      img: "/shopzi.png",
    },
    {
      title: "AI Assistant Chatbot",
      gitLink: "https://github.com/smRid/AI-Assistant-Chat-Bot",
      liveLink: "https://aidlybot.vercel.app//",
      about:
        "Aidly Bot is a customizable AI assistant platform built with Next.js 15, enabling smart, human-like conversations for support, guidance, and real-time help. Ideal for internal tools, customer service, education, and more—scalable, reliable, and easy to deploy",
      stack: ["Nextjs", "Tailwind CSS", "Clerk", "PostgreSQL", "Graphql", "Openai"],
      img: "/chatbot.png",
    },
    {
      title: "Doctor Appointment Platform ",
      gitLink: "https://github.com/smRid/Doctors-Appointment-Platform",
      liveLink: "https://medimeet-smr.vercel.app/",
      about:
        "A scalable doctor appointment platform designed to provide a seamless experience for Admins, Doctors, and Patients through tailored, role-based interfaces. It features dynamic scheduling, secure authentication, and integrated video consultations, enabling real-time, in-browser video calls between doctors and patients",
      stack: ["Nextjs", "Tailwind CSS", "Clerk", "PostgreSQL", "Prisma", "Zod", "Vonage Video API"],
      img: "/DAS.png",
    },
    {
      title: "Twitter Clone",
      gitLink: "https://github.com/smRid/Twitter-Clone",
      liveLink: "https://x-clone-smr.onrender.com/",
      about:
        "Full-featured Twitter clone built with the MERN stack. Includes JWT authentication, post creation, likes, comments, profile editing, image uploads via Cloudinary, and real-time notifications, mobile-responsive UI.",
        stack: ["react.js",  "tailwindcss", "daisyUI ", "TanStack",  "express.js" , "mongodb"],
      img: "/x-clone.png",
    },
    {
      title: "Expense Wallet App",
      gitLink: "https://github.com/smRid/expense-wallet-app",
      liveLink: "",
      about:
        "A secure and intuitive Expense Tracker mobile app that helps you track daily expenses, monitor wallet balance, and manage your finances with real-time insights. Stay organized and in control of your budget -anytime, anywhere.",
      stack: ["React Native", "Expo", "Clerkauth", "Node.js", "Express.js", "Redis", "PostgreSQL"],
      img: "/ETS2.png",
    },
  
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
