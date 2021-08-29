import Image from "next/image";
import React from "react";

const ImagePane = () => {
  return (
    <div className="lg:w-1/2 w-full my-10 lg:my-0 flex flex-col-reverse lg:flex-col items-center justify-center">
      <div className="flex-shrink w-full md:max-w-sm">
        <Image
          alt="Traveler's Happy Globe"
          className="object-contain object-center h-full w-full text-current"
          src="/img/globe.svg"
        />
      </div>
      <h1 className="font-title font-bold text-5xl xl:text-6x">Traveler Dev</h1>
      <p className="font-title mt-3 text-xl text-gray-500">Quality software will travel</p>
    </div>
  );
};

export default ImagePane;
