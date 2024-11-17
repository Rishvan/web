"use client";
import _ from "lodash";
import data from "@/data/data.json";
import Header from "@/components/header";
import { motion, useTransform } from "framer-motion";

export default function About() {
  const { aboutMe } = data;
  const items = [
    "html",
    "css",
    "react js",
    "sass",
    "next js",
    "flutter",
    "redux",
    "gitlab",
    "laravel",
    "blade",
    "node js",
    "github",
    "type script",
    "java script",
  ];
  return (
    <section className="h-screen overflow-hidden relative">
      <Header title="About" />
      <div className="h-[85vh] overflow-scroll w-full  text-white">
        <div className="flex flex-col h-full justify-between pb-12 ">
          <div className="p-8 w-full h-full text-sm lg:text-xl   text-justify lg:p-16 flex justify-center">
            <p>{aboutMe}</p>
          </div>
          {/* <div>languages using</div> */}
          <div className="w-full overflow-x-hidden py-12">
            <motion.div
              className="flex gap-12 md:gap-64 w-fit"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {items.concat(items).map((e, i) => (
                <p key={i} className="text-6xl md:text-[100px] w-max uppercase">
                  {e}
                </p>
              ))}
            </motion.div>
            <motion.div
              className="flex gap-12 md:gap-64 w-fit"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {items.concat(items).map((e, i) => (
                <p key={i} className="text-6xl md:text-[100px] w-max uppercase">
                  {e}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
