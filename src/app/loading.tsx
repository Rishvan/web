"use client";
import { motion } from "framer-motion";
export default function Loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <motion.div
        className="bg-gradient-to-br from-[#FFFFFF4D] to-[#6CA4D44D]"
        initial={{ opacity: 0 }} // Starts with hidden opacity
        animate={{ opacity: 1, rotate: 360 }} // Fades in and rotates
        transition={{
          duration: 2, // Duration of one rotation
          repeat: Infinity, // Infinite loop
          ease: "linear", // Smooth and consistent rotation
        }}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "10px",
        }}
      ></motion.div>
    </div>
  );
}
