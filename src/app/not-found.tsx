import { silkscreen } from "@/common/function";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-screen text-white px-4 md:px-28">
      <div className="flex flex-col justify-center h-full w-full items-center gap-4">
        <div>
          <p
            className={`text-2xl md:text-4xl text-center flex gap-2 items-center justify-center`}
          >
            {/* <span className={`${silkscreen.className}`}>{`404!`}</span> */}
            <span>404! Page not found</span>
          </p>
        </div>

        <Link
        href={`/`}
        className="flex  items-center gap-2  text-2xl md:text-3xl font-extrabold w-max cardStyle px-4 py-2"
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
        {" "}&nbsp;Home 
      </Link>
      </div>
    </section>
  );
}
