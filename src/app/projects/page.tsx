import _ from "lodash";
import data from "../../data/data.json";
import ProjectCard from "@/components/projectCard";
import Header from "@/components/header";

import robot from "../../assets/projects/robot.jpg";
import expenseTracker from "../../assets/projects/expenseTracker.jpg";
import portfolio from "../../assets/projects/portfolio.jpg";
import amalCSHub from "../../assets/projects/amalCSHub.jpg";
import { StaticImageData } from "next/image";

const projectData: Record<string, StaticImageData> = {
  robot,
  expenseTracker,
  portfolio,
  amalCSHub,
};

export default function Projects() {
  const [{ projects }] = data;
  // const router = useRouter();

  return (
    <section className="h-screen overflow-hidden">
      <Header title="Projects" />
      <div className="h-[85vh] overflow-scroll w-full flex flex-col justify-start items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 p-12 md:p-20 lg:p-20 gap-20 ">
          {projects.map((e, i) => {
            return (
              <ProjectCard
                key={i}
                title={e.title}
                subTitle={e.subTitle}
                imageUrl={projectData[e?.url]}
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
