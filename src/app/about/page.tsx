"use client";
import _ from "lodash";
import data from "@/data/data.json";
import Header from "@/components/header";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";

export default function About() {
  const { aboutMe } = data;
  const items = [
    "html",
    "-",
    "css",
    "-",
    "react js",
    "-",
    "sass",
    "-",
    "next js",
    "-",
    "flutter",
    "-",
    "redux",
    "-",
    "gitlab",
    "-",
    "laravel",
    "-",
    "blade",
    "-",
    "node js",
    "-",
    "github",
    "-",
    "type script",
    "-",
    "java script",
    "-",
  ];
  return (
    <section className="h-screen overflow-hidden relative">
      <Header title="About" />
      <div className=" overflow-scroll w-full  text-white">
        <div className="w-full flex justify-center">
          <Image
            src={`/assets/me.png`}
            alt="Card Background"
            className="w-80 aspect-[2/3] object-contain group-hover:blur-sm hover:scale-125 transition-all duration-300  backdrop--0"
          />
        </div>

        <div className="flex flex-col h-full justify-between pb-12 ">
          <div className="p-8 pt-2 w-full h-full  text-sm lg:text-xl   text-justify lg:p-16 lg:pt-2  flex justify-center indent-7">
            <p>{aboutMe}</p>
          </div>
          {/* <div>languages using</div> */}
          <div className="w-full overflow-x-hidden py-12">
            <motion.div
              className="flex gap-12 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 100, ease: "linear", repeat: Infinity }}
            >
              {items.concat(items).map((e, i) => (
                <p
                  key={i}
                  className="text-6xl md:text-7xl w-max uppercase  opacity-40"
                >
                  {e}
                </p>
              ))}
            </motion.div>
          </div>
          {/* <motion.div
              className="flex gap-12 md:gap-64 w-max h-[5vh]"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 100, ease: "linear", repeat: Infinity }}
            >
              {items.concat(items).map((e, i) => (
                <p
                  key={i}
                  className="text-6xl md:text-[100px] w-max uppercase  opacity-40"
                >
                  {e}
                </p>
              ))}
            </motion.div> */}
        </div>
      </div>
    </section>
  );
}
