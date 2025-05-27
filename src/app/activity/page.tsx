import _ from "lodash";
// import { Timeline } from "@mui/lab";
import Header from "@/components/header";
// import { Chrono } from 'react-chrono';

export default function Activity() {
  // const router = useRouter();

  return (
    <section className="h-screen overflow-hidden">
      <Header title="Activity" />

      {/* <div className="h-[85vh] overflow-scroll w-full flex flex-col justify-start items-center pt-6">
        {data.activities &&
          data.activities.map((item, i) => (
            <CustomTimeline
              last={data.activities.length === i + 1}
              item={item}
              key={item.id}
            />
          ))}
        
      </div> */}

      {/* <Chrono items={items} mode="HORIZONTAL" itemWidth={150} showSingle /> */}
    </section>
  );
}
