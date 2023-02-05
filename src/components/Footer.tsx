import Link from "next/link";
import Globe from "../../public/img/globe.svg";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 h-10 relative w-10">
            <Globe width={40} className="text-black" />
          </div>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2021 Traveler Dev Ltd (Registered England 13120175)
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 items-center justify-center sm:justify-start">
            <Link href="/support" className="ml-3 text-gray-500 font-bold">
              Support
            </Link>
            <span className="ml-3 text-gray-500">&bull;</span>
            <a className="ml-3 text-gray-500" href="https://www.twitter.com/travelerdev">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
