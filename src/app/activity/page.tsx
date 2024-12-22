import _ from "lodash";
import { Timeline } from "@mui/lab";
import CustomTimeline from "@/components/timeLine";
import data from "../../data/data.json";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/header";

export default function Activity() {
  // const router = useRouter();

  return (
    <section className="h-screen overflow-hidden">
      <Header title="Activity" />

      <div className="h-[85vh] overflow-scroll w-full flex flex-col justify-start items-center pt-6">
        {data.activities &&
          data.activities.map((item, i) => (
            <CustomTimeline
              last={data.activities.length === i + 1}
              item={item}
              key={item.id}
            />
          ))}
        {/* </Timeline> */}
      </div>
    </section>
  );
}
