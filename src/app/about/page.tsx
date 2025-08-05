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

      <div className="text-white p-8 sm:p-32">
        <p className="text-2xl">Rishvan M</p>
        <p>Software Developer in UAE, Dubai</p>
        <p>+971 503860825</p>
      </div>
    </section>
  );
}
