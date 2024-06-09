import { TimelineConnector, TimelineItem, TimelineSeparator } from "@mui/lab";
import Link from "next/link";
type Props = {
  last: boolean;
  item: ActivityType;
};

function CustomTimeline({ item, last }: Props) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <div className="absolute w-4 h-4 -top-2  rounded-full mt-1.5 -start-1.5 border-2 border-gray-300  bg-gray-800"></div>
        {!last && <TimelineConnector />}
      </TimelineSeparator>

      {
        <li className="mb-6 ms-4 pl-2">
          {item.date && (
            <time className="mb-1 text-lg md:text-xl font-normal leading-none text-gray-40">
              {item.date}
            </time>
          )}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <p className="mb-4 text-lg md:text-xl font-normal text-gray-500 dark:text-gray-400">
            {item.description}
          </p>
          {item.url && (
            <Link
              href={`${item.url}`}
              target="_blank"
              className="timeline-button"
            >
              Learn more{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          )}
        </li>
      }
    </TimelineItem>
  );
}

export default CustomTimeline;
