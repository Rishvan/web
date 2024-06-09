import { url } from "inspector";
import Link from "next/link";

type Props = {
  title: string;
  url: string;
};

function TitleCard({ title, url }: Props) {
  return (
    <>
      <Link href={`${url}`}>
        <button className="w-max sm:w-full hover:scale-105 test-style-normal transition-transform  rounded-xl flex flex-col justify-center items-center p-4  cardStyle">
          <p className="text-white  font-bold text-xl md:text-3xl">{title}</p>
        </button>
      </Link>
    </>
  );
}

export default TitleCard;
