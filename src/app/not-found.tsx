
import { silkscreen } from "@/common/function";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen text-white px-4 md:px-28">
      <div className="flex flex-col justify-center h-full w-full items-center gap-4">
       <div>
       <p
          className={`${silkscreen.className} text-3xl md:text-4xl text-center`}
        >
          { `Error !`}
        </p>
        <p
          className={`${silkscreen.className} text-2xl md:text-3xl text-center`}
        >
          { `Page not found`}
        </p>
       </div>
      
        <Link href={`/`}>
                  <button className="w-max sm:w-full hover:scale-105 test-style-normal transition-transform  rounded-xl flex flex-col justify-center items-center p-2 px-4 md:px-6 md:p-3  cardStyle">
                    <p className="text-white  font-bold text-xl md:text-3xl">
                      {"Go Back"}
                    </p>
                  </button>
                </Link>

      </div>
    </section>
  );
}
