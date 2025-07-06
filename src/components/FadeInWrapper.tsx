"use client";

import classNames from "classnames";
import { PropsWithChildren, useEffect, useState } from "react";

export default function FadeInWrapper({ children }: PropsWithChildren) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className={classNames(
        "transition-opacity duration-500",
        isMounted ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
}
