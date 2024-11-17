import _ from "lodash";
import { Timeline } from "@mui/lab";
import CustomTimeline from "@/components/timeLine";
import data from "../../data/data.json";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProjectCard from "@/components/projectCard";
import { silkscreen } from "@/common/function";
import Header from "@/components/header";

export default function Projects() {
  // const router = useRouter();

  return (
    <section className="h-screen overflow-hidden">
      <Header title="Projects" />
      <div className="h-[85vh] overflow-scroll w-full flex flex-col justify-start items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 p-12 md:p-20 lg:p-20 gap-20 ">
          {data.projects.map((e, i) => {
            return (
              <ProjectCard
                key={i}
                title={e.title}
                subTitle={e.subTitle}
                imageUrl={e.url}
                description={e.description}
                languages={e.languages}
              />
            );
          })}
          {/* <div>project ${i + 1}</div> */}
        </div>
      </div>
    </section>
  );
}
