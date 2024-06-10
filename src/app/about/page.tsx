import _ from "lodash";
import { Timeline } from "@mui/lab";
import CustomTimeline from "@/components/timeLine";
import data from "../../data/data.json";
import Link from "next/link";

export default function Activity() {
  return (
    <section className="h-screen text-white pl-8 pr-4 py-20 md:px-28 md:py-20 flex flex-col gap-6  md:gap-12 ">
      <Link
        href={`/`}
        className="flex  items-center gap-2  text-2xl md:text-3xl font-extrabold w-max"
      >
        <svg
          className="w-5 h-5  ms-2 rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
           <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
        home
      </Link>
      <p className="text-center text-3xl">About</p>
      {/* <div className="p-2 overflow-x-hidden overflow-y-scroll w-full flex gap-8 flex-col">
      
      </div> */}
    </section>
  );
}
