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
      title: "ShikhoHub",
      gitLink: "https://github.com/smRid/LMS-MERN",
      liveLink: "https://shikhohub.vercel.app/",
      about:
        "ShikhoHub is a comprehensive Learning Management System built on the MERN stack. It offers a seamless experience for students to browse courses, while providing administrators with powerful tools for course management and user oversight.",
      stack: ["Reactjs", "Tailwind CSS", "Clerk", "MongoDB", "Express.js", "Node.js", "Stripe", "Cloudinary", "Axios"],
      img: "/lms1.png",
    },

    {
      title: "MediMeet",
      gitLink: "https://github.com/smRid/Doctors-Appointment-Platform",
      liveLink: "https://medimeet-smr.vercel.app/",
      about:
        "A scalable doctor appointment platform designed to provide a seamless experience for Admins, Doctors, and Patients through tailored, role-based interfaces. It features dynamic scheduling, secure authentication, and integrated video consultations, enabling real-time, in-browser video calls between doctors and patients",
      stack: ["Nextjs", "Tailwind CSS", "Clerk", "PostgreSQL", "Prisma", "Zod", "Vonage Video API"],
      img: "/DAS.png",
    },

    {
      title: "Shopzi",
      gitLink: "https://github.com/smRid/E-commerce-store-mern",
      liveLink: "https://shopzi.onrender.com/",
      about:
        "Modern E-Commerce web app with Redis for high-performance caching and Stripe for secure payments. Features include a full storefront, shopping cart, checkout, user authentication, and an admin dashboard for managing products, orders, and users.",
      stack: ["react.js", "tailwindcss", "express.js", "stripe", "mongodb", "redis"],
      img: "/shopzi.png",
    },

    {
      title: "Quickgen AI",
      gitLink: "https://github.com/smRid/ai-saas-app",
      liveLink: "https://quickgenai-smr.vercel.app",
      about:
        "Quickgen.ai is an AI SaaS platform that delivers a powerful suite of intelligent tools for content creation, advanced image editing, and resume analysis, all seamlessly integrated within a responsive dashboard designed for efficiency and ease of use.",
      stack: ["React", "Tailwind", "Clerkauth", "Node.js", "Express.js", "PostgreSQL", "OpenAI"],
      img: "/rsz_preview.png",
    },

    {
      title: "Marketopia",
      gitLink: "https://github.com/smRid/Qtec-Assessment-Task",
      liveLink: "https://marketopia-smr.vercel.app/",
      about:
        "Modern E-Commerce Web App built with React and Redux Toolkit, featuring product browsing, search, category filtering, cart management, and responsive UI. Designed for speed and smooth performance with Vite and Tailwind.",
      stack: ["React.js", "Redux Toolkit", "React Router", "TailwindCSS", "Remix Icon",],
      img: "/Marketopia.png",
    },

    {
      title: "Aidly Bot",
      gitLink: "https://github.com/smRid/AI-Assistant-Chat-Bot",
      liveLink: "https://aidlybot.vercel.app//",
      about:
        "Aidly Bot is a customizable AI assistant platform built with Next.js 15, enabling smart, human-like conversations for support, guidance, and real-time help. Ideal for internal tools, customer service, education, and more—scalable, reliable, and easy to deploy",
      stack: ["Nextjs", "Tailwind CSS", "Clerk", "PostgreSQL", "Graphql", "Openai"],
      img: "/chatbot.png",
    },

    {
      title: "Shopinity",
      gitLink: "https://github.com/smRid/ecom-next-sanity",
      liveLink: "https://shopinity-smr.vercel.app/",
      about:
        "Full-Stack E-Commerce Platform featuring secure authentication, advanced product search, persistent cart, Stripe payments, and CMS-powered content management. Designed with a modern, responsive UI and smooth animations for an exceptional user experience.",
      stack: ["Next.js", "TypeScript", "TailwindCSS", "Shadcn/ui", "Framer Motion", "Clerk", "Sanity CMS", "Stripe",],
      img: "/Shopinity.png",
    },

    // {
    //   title: "Clin-Tech",
    //   gitLink: "https://github.com/smRid/Clin-Tech",
    //   liveLink: "https://clin-tech.vercel.app/",
    //   about:
    //      "AI-powered Clinical Documentation Platform that leverages NLP and Machine Learning to automate compliance and integrate seamlessly with EMR systems. Built for scalability, speed, and modern clinical workflows across specialties.",
    //   stack: ["React.js",  "Redux Toolkit",  "React Router",  "Axios",  "TypeScript",  "TailwindCSS"],
    //   img: "/ClinTech.png",
    // },

    // {
    //   title: "Dua & Ruqyah",
    //   gitLink: "https://github.com/smRid/Intern-web-task",
    //   liveLink: "https://ruqiyahduas.vercel.app/",
    //   about:
    //      "Islamic Supplications Web application built with Next.js that displays Islamic Duas and Ruqyah with Arabic text, transliteration, and English translation. Features category-based navigation, multi-language support, audio playback, and an optimized search experience. Built with a clean UI, smooth animations.",
    //   stack: [ "Next.js", "React.js", "TypeScript",  "TailwindCSS", "SQLite",  "Lucide React", "Inter & Amiri Fonts"],
    //   img: "/Dua&Ruqyah.png",
    // },


    {
      title: "Chat app",
      gitLink: "https://github.com/smRid/Real-time-Chat-App",
      liveLink: "https://chat-app-smr.onrender.com/",
      about:
        "Real-time Chat Application built with live messaging capabilities. The app features user authentication, real-time communication, and a fully responsive UI optimized for both desktop and mobile devices.",
      stack: ["react.js", "tailwindcss", "daisyUI ", "express.js", "socket.io", "mongodb"],
      img: "/chatapp2.png",
    },


    {
      title: "Twitter Clone",
      gitLink: "https://github.com/smRid/Twitter-Clone",
      liveLink: "https://x-clone-smr.onrender.com/",
      about:
        "Full-featured Twitter clone built with the MERN stack. Includes JWT authentication, post creation, likes, comments, profile editing, image uploads via Cloudinary, and real-time notifications, mobile-responsive UI.",
      stack: ["react.js", "tailwindcss", "daisyUI ", "TanStack", "express.js", "mongodb"],
      img: "/x-clone.png",
    },

    // {
    //   title: "NeoVR",
    //   gitLink: "https://github.com/smRid/NeoVR",
    //   liveLink: "https://neo-vr.vercel.app/",
    //   about:
    //      "A lightweight and modular platform for building immersive 3D virtual experiences. Designed for developers, educators, and enterprises to easily create, manage, and deploy VR content across devices. Features a sleek futuristic UI, responsive design, and optimized performance for seamless interaction.",
    //   stack: [   "React.js", "TailwindCSS", "Lucide Icons"],
    //   img: "/NeoVR.png",
    // },

    // {
    //   title: "OrbitDash",
    //   gitLink: "https://github.com/smRid/OrbitDash",
    //   liveLink: "https://modern-dashboard-seven.vercel.app/",
    //   about:
    //      "Responsive Dashboard UI built with React.js for data-driven applications. Features real-time updates, customizable widgets, and rich data visualizations. Includes dark/light mode, interactive components, and a clean layout optimized for performance across all devices.",
    //   stack: [ "React.js",  "TailwindCSS",  "Lucide Icons",  "React Router", "Recharts"],
    //   img: "/OrbitDash.png",
    // },




    // {
    //   title: "Cryptoline",
    //   gitLink: "https://github.com/smRid/Cryptoline",
    //   liveLink: "https://crypto-line-jet.vercel.app/",
    //   about:
    //      "Real-time Cryptocurrency Dashboard that delivers live price updates, market insights, and interactive data visualizations. Features dynamic charts, advanced search and filtering, and a responsive design optimized for all devices. Built for speed, clarity, and smooth user experience.",
    //   stack: ["React.js", "React Router", "React Google Charts", "CoinGecko API"],
    //   img: "/Cryptoline.png",
    // },
    {
      title: "Apple E-commerce",
      gitLink: "https://github.com/smRid/Apple-E-commerce",
      liveLink: "https://smrid.github.io/Apple-E-commerce/",
      about:
        "A sleek, responsive Apple Product Landing Page featuring smooth scrolling, engaging animations, and interactive elements. Designed with a clean, modern layout that highlights Apple’s product ecosystem with elegance and precision. Optimized for all devices to ensure seamless performance and a premium user experience.",
      stack: ["HTML", "CSS", "JavaScript",],
      img: "/Apple.png",
    },



    // {
    //   title: "Expense Wallet App",
    //   gitLink: "https://github.com/smRid/expense-wallet-app",
    //   liveLink: "",
    //   about:
    //     "A secure and intuitive Expense Tracker mobile app that helps you track daily expenses, monitor wallet balance, and manage your finances with real-time insights. Stay organized and in control of your budget -anytime, anywhere.",
    //   stack: ["React Native", "Expo", "Clerkauth", "Node.js", "Express.js", "Redis", "PostgreSQL"],
    //   img: "/ETS2.png",
    // },

    // {
    //   title: "Travel-Agency",
    //   gitLink: "https://github.com/smRid/Travel-Agency",
    //   liveLink: "https://smrid.github.io/Travel-Agency/",
    //   about:
    //      "A responsive Travel Agency Landing Page showcasing exotic destinations with smooth scrolling, engaging animations, and interactive elements. Designed with a clean, modern layout that highlights travel packages and services with elegance and precision. Optimized for all devices to ensure seamless performance and a premium user experience.",
    //   stack: [ "HTML", "CSS", "JavaScript"],
    //   img: "/Travel-Agency.png",
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
