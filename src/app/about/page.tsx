import _ from "lodash";
import data from "@/data/data.json";
import Header from "@/components/header";

export default function About() {
  const { aboutMe } = data;

  return (
    <section className="h-screen overflow-hidden">
      <Header title="About" />
      <div className="h-[85vh] overflow-scroll w-full flex flex-col-reverse  lg:grid grid-cols-3 p-16 gap-12">
        <div className=" w-full h-full col-span-2 text-sm lg:text-xl text-justify text-white lg:p-16 ">
          {aboutMe}
        </div>

        <div
          className={`bg-blue-400s w-full h-full flex justify-center items-center `}
        >
          {/* <img
            src={`/assets/projects/animal.jpg`}
            alt="Card Background"
            className="h-full md:h-[1/3] lg:h-[2/3] aspect-[4/5] object-cover transition-all duration-300"
          /> */}
          .
        </div>
      </div>
    </section>
  );
}
