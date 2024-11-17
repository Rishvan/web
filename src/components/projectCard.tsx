"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  subTitle: string;
  languages?: string[];
};

export default function ProjectCard({
  title,
  description,
  languages,
  subTitle,
  imageUrl,
}: Props) {
  return (
    <div className="relative cardStyle group overflow-hidden rounded-lg shadow-lg ">
      {/* Background Image */}
      <img
        src={`/assets/projects/${imageUrl}.jpg`}
        alt="Card Background"
        className="w-full h-full object-cover group-hover:blur-sm group-hover:scale-125 transition-all duration-300  backdrop--0"
      />
      <div className="absolute inset-0 bg-gray-700 opacity-60"></div>

      {/* Title */}
      <div className="absolute inset-0 flex flex-col items-start justify-end p-8 bg-black bg-opacity-40 text-white text-2xl font-extrabold group-hover:opacity-0 transition-all duration-300">
        {title}
        <p className="text-sm mt-2 cursor-pointer">{subTitle}</p>
      </div>
      {/* Hover Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-start p-8 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 h-full overflow-y-scroll">
        {/* <h3 className="text-2xl font-extrabold tracking-widest cursor-pointer">
          {title}
        </h3> */}
        <p className="text-sm mt-2 cursor-pointer select-none">{description}</p>
        <p className="text-sm mt-2 cursor-pointer select-none underline">{"Languages"}</p>
        {languages && languages.length && (
          <p className="text-md mt-2 p-1 bg-blue-500 bg-blend-saturation font-semibold leading-6 tracking-widest rounded-lg px-2 cursor-pointer">
            {languages.join(",")}
          </p>
        )}
      </div>
    </div>
  );
}
