import { useView } from "@/contexts/ViewContext";
import React, { SetStateAction } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

export default function MobileMenu({
  onMenuOpen,
}: {
  onMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { sectionInView } = useView();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex z-10 items-center justify-center sm:hidden px-6 py-5 fixed top-12 rounded-2xl bg-[#162447] max-w-[90%] w-full mt-12 sm:mt-16"
    >
      <ul
        className="flex flex-col gap-4 lg:gap-12 text-white/25"
        onClick={() => onMenuOpen(false)}
      >
        <Link
          href="#home"
          className={`${sectionInView === "home" && "text-white"} w-fit`}
        >
          Home
        </Link>
        <Link
          href="#work"
          className={`${sectionInView === "work" && "text-white"} w-fit`}
        >
          Work
        </Link>
        <Link
          href="#about"
          className={`${sectionInView === "about" && "text-white"} w-fit`}
        >
          About
        </Link>
        <Link
          href="#contact"
          className={`${sectionInView === "contact" && "text-white"}  w-fit`}
        >
          Contact
        </Link>
      </ul>
    </motion.div>
  );
}
