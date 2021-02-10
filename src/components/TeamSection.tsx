import React from "react";
import { DescriptionLink, DescriptionSection, DescriptionTitle } from "./DescriptionSection";

const TeamSection = () => {
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
          <g>
            <g>
              <g>
                <path d="M33.2,54.1c0.4-0.3,0.8-0.5,1.2-0.7c-4.1-1.7-10.5-1.9-12.5-1.9c-2.4,0-10.5,0.2-14.2,2.7C3,57.5,2.5,67.6,2.5,69.7     c0,0.6,0.2,1.2,0.7,1.7c0.4,0.4,1,0.7,1.6,0.7H26C26.3,67.2,27.5,58,33.2,54.1z" />
                <circle cx="21.9" cy="36.1" r="11.8" />
                <path d="M97.5,69.4c-0.1-2.6-0.7-12-5.3-15.1c-3.7-2.5-11.8-2.7-14.2-2.7c-2.1,0-8.5,0.2-12.5,1.9c0.4,0.2,0.8,0.5,1.2,0.7     c5.6,3.8,7,12.5,7.2,17.9h21.2c0,0,0,0,0,0c1.3,0,2.3-1,2.3-2.3C97.5,69.6,97.5,69.5,97.5,69.4z" />
                <circle cx="78" cy="36.1" r="11.8" />
                <path d="M64.2,57.9c-3.7-2.5-11.8-2.7-14.2-2.7c-2.4,0-10.5,0.2-14.2,2.7c-4.7,3.2-5.2,13.4-5.3,15.4c0,0.6,0.2,1.2,0.7,1.7     c0.4,0.4,1,0.7,1.6,0.7h34.3c0,0,0,0,0,0c1.3,0,2.3-1,2.3-2.3c0-0.1,0-0.2,0-0.4C69.3,70.5,68.7,61,64.2,57.9z" />
                <circle cx="50" cy="39.8" r="11.8" />
              </g>
            </g>
          </g>
        </svg>
      }
    >
      <DescriptionTitle>The Team</DescriptionTitle>
      <p className="leading-relaxed text-base">Right now it&rsquo;s just Zack here.</p>
      <div>
        <DescriptionLink className="mt-3" href="https://zack.computer">
          Who&rsquo;s Zack?
        </DescriptionLink>
        <br />
        <DescriptionLink className="mt-3" href="mailto:zack@traveler.dev">
          Send an email
        </DescriptionLink>
      </div>
    </DescriptionSection>
  );
};

export default TeamSection;
