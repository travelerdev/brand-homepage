import {
  DescriptionLink,
  DescriptionSection,
  DescriptionTitle
} from "../DescriptionSection";
import { HallOfFame } from "./HallOfFame";

export const ProductsSection = () => {
  return (
    <DescriptionSection
      icon={
        <svg
          height="100px"
          width="100px"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 100 100"
          xmlSpace="preserve"
        >
          <path d="M67.6,0.9H28.9c-4.6,0-8.3,3.7-8.3,8.3v81.6c0,4.6,3.7,8.3,8.3,8.3h38.7c4.6,0,8.3-3.7,8.3-8.3V9.2  C75.8,4.6,72.1,0.9,67.6,0.9z M28.9,4.1h38.7c2.8,0,5.1,2.3,5.1,5.1v4.6h-49V9.2C23.7,6.4,26,4.1,28.9,4.1z M72.7,17v65h-49V17H72.7  z M67.6,96H28.9c-2.8,0-5.1-2.3-5.1-5.1v-5.7h49v5.7C72.7,93.6,70.4,96,67.6,96z" />
          <circle cx="48.2" cy="90.4" r="3.3" />
          <path d="M6.6,16.1" />
          <path d="M7.2,15.6" />
          <circle cx="48.1" cy="90.4" r="3.3" />
          <path d="M42.1,8c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3H54c0.7,0,1.3-0.6,1.3-1.3C55.3,8.5,54.7,8,54,8H42.1z  " />
          <path d="M95.9,29h-1.5v-1.5c0-0.5-0.4-1-1-1c-0.5,0-1,0.4-1,1V29h-1.5c-0.5,0-1,0.4-1,1c0,0.5,0.4,1,1,1h1.5v1.5  c0,0.5,0.4,1,1,1c0.5,0,1-0.4,1-1v-1.5h1.5c0.5,0,1-0.4,1-1C96.8,29.4,96.4,29,95.9,29z" />
          <path d="M14.5,67.7H13v-1.5c0-0.5-0.4-1-1-1c-0.5,0-1,0.4-1,1v1.5H9.6c-0.5,0-1,0.4-1,1s0.4,1,1,1h1.5v1.5  c0,0.5,0.4,1,1,1c0.5,0,1-0.4,1-1v-1.5h1.5c0.5,0,1-0.4,1-1S15.1,67.7,14.5,67.7z" />
          <path d="M12.5,18.9H10v-2.5c0-0.7-0.6-1.4-1.4-1.4c-0.7,0-1.4,0.6-1.4,1.4v2.5H4.8c-0.7,0-1.4,0.6-1.4,1.4  c0,0.7,0.6,1.4,1.4,1.4h2.5v2.5c0,0.7,0.6,1.4,1.4,1.4c0.7,0,1.4-0.6,1.4-1.4v-2.5h2.5c0.7,0,1.4-0.6,1.4-1.4  C13.9,19.5,13.3,18.9,12.5,18.9z" />
          <circle cx="3.7" cy="46.5" r="1.8" />
          <circle cx="86.8" cy="83.6" r="1.8" />
          <circle cx="85.3" cy="16" r="2.2" />
          <path d="M65.7,40.9c-0.1-0.6-1.5-6.1-6.8-8.1c-3.2-1.2-8.7-1.4-10.9-1.4c-2.2,0-7.7,0.2-10.9,1.4c-5.5,2.1-6.7,7.9-6.8,8.1  c-0.7,2.7-1,5.8-1,9.1c0,3.3,0.3,6.3,1,9c0.1,0.2,1.3,6.1,6.8,8.2c3.2,1.2,8.7,1.4,10.9,1.4c2.2,0,7.7-0.2,10.9-1.4  c5.5-2.1,6.7-7.9,6.8-8.1c0.7-2.7,1-5.8,1-9.1C66.7,46.7,66.4,43.7,65.7,40.9z M37.5,60.5c0,0,1.8-7.6,4.7-4.7  C45.1,58.7,37.5,60.5,37.5,60.5z M58.6,39.9c-0.1,8.5-4.5,12.6-8.1,14.5l0.8,3.3l-1.7,1.7l-4-4c0,0.7-0.3,1.4-0.9,2l-4.2-4.2  c0.5-0.5,1.3-0.8,2-0.9l-4-4l1.7-1.7l3.3,0.8c1.9-3.5,6-8,14.5-8.1l0.5,0L58.6,39.9z" />
          <circle cx="53.4" cy="44.6" r="2" />
        </svg>
      }
    >
      <DescriptionTitle>The Products</DescriptionTitle>
      <ul className="lg:pl-8 lg:list-disc">
        <li>
          <DescriptionLink href="https://www.phototamer.app">
            Photo Tamer
          </DescriptionLink>
          <p>Convert and resize images to JPG or PNG</p>
        </li>
        <li>
          <p className="italic text-gray-700">
            And several more in development now…
          </p>
        </li>
      </ul>
      <HallOfFame>
        <ul className="lg:pl-8 lg:list-disc">
          <li>
            <p className="notable-link">Tweet Sweep</p>
            <p>
              Delete your old tweets and keep your feed clean.
              <br />
              <span className="italic text-gray-700">
                Sadly destroyed by the API changes at Twitter after 2023.
              </span>
            </p>
          </li>
          <li>
            <p className="notable-link">Watch That Name</p>
            <p>
              Maintain a wishlist of your favorite domains.
              <br />
              <span className="italic text-gray-700">
                Shuttered in favor of using other solutions like Instant Domain
                Search.
              </span>
            </p>
          </li>
        </ul>
      </HallOfFame>
    </DescriptionSection>
  );
};
