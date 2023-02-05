import Image from "next/image";
import React from "react";

const ImagePane = () => {
  return (
    <div className="lg:w-1/2 w-full my-10 lg:my-0 flex flex-col-reverse lg:flex-col items-center justify-center">
      <div className="w-full md:max-w-sm relative text-current h-56">
        <div className="block dark:hidden">
          <Image alt="Traveler's Happy Globe" src="/img/globe-black.svg" />
        </div>
        <div className="hidden dark:block">
          <Image alt="Traveler's Happy Globe" src="/img/globe.svg" />
        </div>
      </div>
      <h1 className="font-title font-bold text-5xl xl:text-6x">Traveler Dev</h1>
      <p className="font-title mt-3 text-xl text-gray-500">Quality software will travel</p>
    </div>
  );
};

export default ImagePane;
