// import { TimelineConnector, TimelineItem, TimelineSeparator } from "@mui/lab";
// import Image from "next/image";
// import Link from "next/link";
// type Props = {
//   last: boolean;
//   item: ActivityType;
// };

// function CustomTimeline({ item, last }: Props) {
//   return (
//     <div className="min-h-[50vh] w-full p-10">
//       <hr className="" />

//       <div className="flex gap-2 w-full">
//         <div className="mb-6 ms-4 p-2 w-1/2">
//           <Image src="" alt="image" className="w-full aspect-video" />
//         </div>
//         <div className="mb-6 ms-4 p-2 w-1/2">
//           {item.date && (
//             <time className="mb-1 text-lg md:text-xl font-normal leading-none text-white">
//               {item.date}
//             </time>
//           )}
//           <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
//             {item.title}
//           </h3>
//           <p className="mb-4 text-lg md:text-xl font-normal text-gray-500 dark:text-gray-400">
//             {item.description}
//           </p>
//           {item.url && (
//             <Link href={`${item.url}`} target="_blank" className="">
//               Learn more{" "}
//               <svg
//                 className="w-3 h-3 ms-2 rtl:rotate-180"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 5h12m0 0L9 1m4 4L9 9"
//                 />
//               </svg>
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomTimeline;
