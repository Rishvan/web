"use client";
import Image from "next/image";
import data from "../data/data.json";
import Link from "next/link";
import { silkscreen } from "@/common/function";
import { useEffect, useState } from "react";
import HomePage from "./home/home";

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
