"use client";
import Hero from "./components/hero-section/Hero";
import Works from "./components/work-section/Works";
import About from "./components/about-section/About";
import Contact from "./components/contact+footer/Contact";
import Footer from "./components/contact+footer/Footer";
// Custom cursor removed
// import { initialBlobityOptions } from "@/utils/blobity.config";
// import useBlobity from "blobity/lib/react/useBlobity";

export default function Home() {
  // Custom cursor removed
  // const blobity = useBlobity(initialBlobityOptions);

  return (
    <main className="overflow-x-hidden sm:overflow-x-visible">
      <Hero />
      <Works />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
