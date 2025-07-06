import classnames from "classnames";
import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";

interface Props {
  icon: ReactNode;
}

export const DescriptionSection = ({
  icon,
  children
}: PropsWithChildren<Props>) => {
  return (
    <div className="flex flex-col mb-10 lg:items-start items-center">
      <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-blue-500 text-white mb-5 p-2 dark:font-bold">
        {icon}
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export const DescriptionTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className="text-gray-900 dark:text-gray-100 text-lg title-font font-medium mb-3">
      {children}
    </h2>
  );
};

export const DescriptionLink = ({
  href,
  children,
  className
}: PropsWithChildren<{ href: string; className?: string }>) => (
  <Link href={href} className={classnames([className, "notable-link"])}>
    <>
      {children}
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </>
  </Link>
);
