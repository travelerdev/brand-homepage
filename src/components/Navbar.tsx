import Link from "next/link";
import Globey from "./Globey";

export default function Navbar() {
  return (
    <header className="text-gray-600 body-font border-b border-gray-100 bg-gray-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center justify-between">
        <Link href="/" className="flex title-font font-medium items-center mb-4 md:mb-0 colorful">
          <>
            <div className="rounded-full colorful-shadow">
              <Globey className="h-16 w-16" />
            </div>
            <span className="ml-3 font-title font-bold text-xl">Traveler Dev</span>
          </>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center bg-blue-100 border py-1 px-3 focus:outline-none hover:bg-blue-200 border-transparent hover:border-blue-400 rounded text-base mt-4 md:mt-0 transition-colors duration-200 ease-in-out"
        >
          <>
            Home
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </>
        </Link>
      </div>
    </header>
  );
}
