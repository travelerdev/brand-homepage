import React from "react";

const ImagePane = () => {
  return (
    <div className="lg:w-1/2 w-full my-10 lg:my-0 flex flex-col-reverse lg:flex-col items-center justify-center">
      <div className="flex-shrink w-full md:max-w-sm">
        <img
          alt="Traveler's Happy Globe"
          className="object-contain object-center h-full w-full text-current"
          src="/img/globe.svg"
        />
      </div>
      <h1 className="font-title text-5xl xl:text-6x">Traveler Dev</h1>
    </div>
  );
};

export default ImagePane;
