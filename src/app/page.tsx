import Image from "next/image";
import data from "../data/data.json";
import Link from "next/link";
import { silkscreen } from "@/common/function";

export default function Home() {
  return (
    <section className="h-screen text-white px-4 md:px-28">
      <div className="flex flex-col justify-center md:items-start h-full w-full items-center">
        <p
          className={`${silkscreen.className} text-5xl md:text-6xl text-center`}
        >
          {data.name ?? ""}
        </p>
        <ul
          className={
            "flex w-full items-center  justify-center md:justify-start gap-6 pt-2 pb-4 md:pb-0 text-sm md:text-xl"
          }
        >
          {data.designations.map((designation: string, i) => {
            return (
              <li className={`${i == 0 ? "" : "list-disc "}`} key={i}>
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
          {data.cards.map((card: Cards, i) => {
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
