import Image from "next/image";
import data from "../../data/data.json";
import Link from "next/link";
import { silkscreen } from "@/common/function";

export default function About() {
  return (
    <section className="h-screen text-white px-4 md:px-28 md:py-20 flex flex-col md:flex-row gap-6  md:gap-12">
      <div className=" cardStyle basis-1/5 flex flex-col">
       <div className="md:basis-2/5">
          <Image
            src={"/assets/bg.jpg"}
            className="w-full p-4 object-cover shadow-2xl rounded-lg h-full"
            width={200}
            height={200} 
            alt={"Profile Image"}/>

       </div>
       <div>
          {/* <Image
            src={"/assets/bg.jpg"}
            className="w-full p-4 object-cover "
            width={200}
            height={200} alt={""}/> */}

       </div>
      </div>

      <div className="w-full cardStyle flex-1 p-12">
        <p className="text-3xl font-bold ">About Me</p>
      </div>
    </section>
  );
}
