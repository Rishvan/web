"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <div className="flex justify-start px-4 sm:px-16 py-4 pt-6 shadow-lg">
      <Link
        href={"/"}
        className="  items-center gap-2  flex  text-gray-300 sm:text-sm hover:text-white md:text-md  transition-transform w-max "
      >
        <svg
          className="w-5 h-5  ms-2 rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
        {title}
      </Link>

      <p>{""}</p>
    </div>
  );
}
