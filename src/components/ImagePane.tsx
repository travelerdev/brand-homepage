import Link from "next/link";
import Globe from "../../public/img/globe.svg";

const ImagePane = () => {
  return (
    <div className="lg:w-1/2 w-full my-10 lg:my-0 flex flex-col lg:flex-col items-center justify-center text-center">
      <div className="w-full md:max-w-sm relative text-current h-56 flex justify-center items-center text-black dark:text-white">
        <Globe className="w-56 h-56" aria-label="A happy little globe" />
      </div>
      <h1 className="font-title font-bold text-5xl xl:text-6x">Traveler Dev</h1>
      <p className="font-title my-3 text-xl text-gray-500 text-center">
        Software products for the world,
        <br />
        and product development support for companies.
      </p>
      <div className="flex flex-row items-center justify-center">
        <Link className="notable-link" href="mailto:hi@traveler.dev">
          ✉️ Get in touch…
        </Link>
      </div>
    </div>
  );
};

export default ImagePane;
