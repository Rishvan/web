import Image from "next/image";
import data from "../../data/data.json";
import Link from "next/link";
import { silkscreen } from "@/common/function";
import { useEffect, useState } from "react";

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

  let currentDesignations =
    screenWidth >= 640 ? data["designations"] : data["mobile-designations"];

  return (
    <section className="h-screen text-white px-4 md:px-28">
      <div className="flex flex-col justify-center md:items-start h-full w-full items-center">
        <div
          className={`${silkscreen.className} text-5xl md:text-6xl text-center flex`}
        >
          {data.name.split("").map((e) => {
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
        <ul
          className={
            "flex w-full items-center  justify-center md:justify-start gap-6 pt-2 pb-4 md:pb-0 text-sm md:text-xl"
          }
        >
          {currentDesignations.map((designation: string, i) => {
            return (
              <li
                className={`${i == 0 ? "md:pr-1" : "md:px-1 list-disc"} ${
                  screenWidth >= 640 ? "" : "text-lg"
                }`}
                key={i}
              >
                {designation}
              </li>
            );
          })}
        </ul>

        <ul className="flex gap-8 pt-2 sm:w-full sm:pt-4 ">
          <li>
            {data.social_icons.map((item: SocialTcons, i) => {
              return (
                <Link href={`${item.url}`} target="_blank" key={i}>
                  <button
                    className="w-8 aspect-square mx-2 hover:scale-105 transition-transform"
                    key={i}
                  >
                    <Image
                      src={`assets/icons/${item.icon}.svg`}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                    />
                  </button>
                </Link>
              );
            })}
          </li>
        </ul>
        <div className="flex gap-5 py-4">
          {data.cards &&
            data.cards.map((card: Cards, i) => {
              return (
                <div key={i}>
                  <Link href={`${card.url}`}>
                    <button className="w-max sm:w-full hover:scale-105 test-style-normal transition-transform flex flex-col justify-center items-center p-4  cardStyle">
                      <p className="text-white  font-bold text-xl md:text-3xl">
                        {card.title}
                      </p>
                    </button>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
