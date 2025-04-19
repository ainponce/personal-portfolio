import { useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Ain Moises Ponce | Portfolio</title>
      </Head>

      <div className="min-h-screen w-screen overflow-x-hidden bg-softBlack">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* About Section - Full Width */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <About />
            </div>

            {/* Skills Section - 2/3 Width */}
            <div className="col-span-1 md:col-span-2">
              <Skills />
            </div>

            {/* Contact Section - 1/3 Width */}
            <div className="col-span-1">
              <Contact />
            </div>

            {/* Projects Section - Full Width */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
