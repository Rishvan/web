"use client";
import Header from "@/components/header";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-h-screen text-white">
      <Header title="About" />
      <div className="max-w-5xl h-[90vh] mx-auto px-6 py-12 text-white overflow-y-scroll">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <Image
            src="/assets/me.png" // Replace with your image path
            alt="Rishvan M"
            className="w-40 h-40 object-cover rounded-full"
            // className="w-40 h-40 object-cover rounded-full shadow-lg"
            // initial={{ opacity: 0, scale: 0.9 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.6 }}
            width={160}
            height={160}
          />

          <div>
            <h1 className="text-4xl font-bold mb-3">About Me</h1>
            <p className="text-gray-100 text-lg leading-relaxed">
              I’m <span className="font-semibold">Rishvan M</span>, a passionate
              software developer specializing in building clean, scalable, and
              user-friendly applications. I work with technologies like the MERN
              stack and Flutter, and I’m always exploring cutting-edge fields
              like AI and AR.
            </p>
          </div>
        </div>

        {/* My Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">My Story</h2>
          <p className="text-gray-100 leading-relaxed">
            My journey began with curiosity — a desire to understand how things
            work. Over the years, I’ve worked on multiple projects ranging from
            mobile apps to full-stack web platforms, constantly learning and
            refining my skills.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["MERN Stack", "Flutter", "AI", "AR/VR"].map((skill) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={skill}
                className="bg-white shadow-md rounded-lg p-4 text-center text-black"
              >
                <span className="font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Beyond Code */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Beyond Code</h2>
          <p className="text-gray-100 leading-relaxed">
            When I’m not coding, I enjoy sketching, exploring new tech gadgets,
            and contributing to open-source communities. I believe creativity
            fuels innovation — both in and outside of code.
          </p>
        </section>
      </div>
    </div>
  );
}
