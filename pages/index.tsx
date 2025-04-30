import { useState } from "react";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Head from "next/head";
import { motion } from "framer-motion";

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
            <motion.div 
              className="col-span-1 md:col-span-2 lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>

            {/* Skills Section - 2/3 Width */}
            <motion.div 
              className="col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Skills />
            </motion.div>

            {/* Contact Section - 1/3 Width */}
            <motion.div 
              className="col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Contact />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
