"use client";
import Image, { StaticImageData } from "next/image";
import data from "../../data/data.json";
import Link from "next/link";
import { silkscreen } from "@/common/function";
import { useEffect, useState } from "react";

import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";


const iconsData: Record<string, StaticImageData> = {
  github,
  linkedin,
  instagram,
  whatsapp,
};

const [{ name, description, cards, social_icons }] = data;

export default function HomePage() {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <div className="h-screen">
      <section className="h-full max-w-5xl mx-auto text-white px-6 py-12 flex justify-between flex-col items-center z-10">
        <div></div>
        <div className="flex flex-col items-center">
          <div
            className={`${silkscreen.className} text-5xl md:text-7xl text-center flex`}
          >
            {name.split("").map((e) => {
              return (
                <p
                  key={e}
                  className={
                    e == "."
                      ? "animate-bounce"
                      : "hover:scale-110" + `ease-linear duration-300`
                  }
                >
                  {e ?? ""}
                </p>
              );
            })}
          </div>
          <div>{description}</div>
        </div>
        <div className="flex md:justify-between w-full flex-col md:flex-row gap-2 pb-2 z-40">
          <div className="flex gap-3 md:gap-12">
            {cards &&
              cards.map((card: Cards, i) => {
                return (
                  <div key={i}>
                    <Link href={`${card.url}`}>
                      <p className="text-gray-300 text-sm hover:text-white md:text-md  transition-transform">
                        {card.title}
                      </p>
                    </Link>
                  </div>
                );
              })}
          </div>
          <div className="flex flex-col md:flex-row gap-1 md:gap-12">
            <div>
              {social_icons.map((item: SocialTcons, i) => {
                return (
                  <Link href={`${item.url}`} target="_blank" key={i}>
                    <button
                      className="w-4 md:w-5 aspect-square mx-2 hover:scale-125 transition-transform"
                      key={i}
                    >
                      <Image
                        src={iconsData[item.icon]}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                      />
                    </button>
                  </Link>
                );
              })}
            </div>
            <div className="text-gray-300 text-sm md:text-md   hover:text-white">
              <span>{"© Rishvan M. 2025 All rights reserved."}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
