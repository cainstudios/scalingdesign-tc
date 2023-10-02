"use client";
import Image from "next/image";
import { Fragment, useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="bg-cover grid grid-cols-3 gap-4 p-20"
      style={{
        backgroundImage:
          "url(https://www.kindacode.com/wp-content/uploads/2022/05/green.jpeg)",
      }}
    >
      <div className="w-72 h-72 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg"></div>
      <div className="w-72 h-72 bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg"></div>
      <div className="w-72 h-72 bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg"></div>
    </div>
  );
}
