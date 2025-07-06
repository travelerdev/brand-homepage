"use client";

import classNames from "classnames";
import { PropsWithChildren, useState } from "react";

export const HallOfFame = ({ children }: PropsWithChildren) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand((e) => !e);
  };

  return (
    <div>
      {!expand && (
        <button
          className="text-indigo-500 pt-2 font-semibold"
          onClick={toggleExpand}
        >
          Show Hall of Fame…
        </button>
      )}
      {expand && (
        <h3 className="text-black pt-2 font-semibold">Hall of Fame</h3>
      )}
      <div
        className={classNames(
          expand ? "opacity-100 h-auto" : "opacity-0 h-0",
          "transition-all duration-300"
        )}
      >
        {children}
      </div>
    </div>
  );
};
