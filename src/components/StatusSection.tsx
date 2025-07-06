"use client";

import classnames from "classnames";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { DescriptionSection, DescriptionTitle } from "./DescriptionSection";

const StatusSection = () => {
  const loc = "London, England";
  const tz = "Europe/London";

  const [blinkOn, setBlinkOn] = useState(true);
  const [currentTime, setCurrentTime] = useState<DateTime | undefined>(
    undefined
  );
  const [currentStatus, setCurrentStatus] = useState<string>(
    "Exploring outer space..."
  );
  const [currentFeatureColor, setCurrentFeatureColor] =
    useState<string>("feature-indigo");

  const time = currentTime?.toLocaleString(DateTime.TIME_SIMPLE);

  useEffect(() => {
    setCurrentTime(DateTime.local().setZone(tz));

    setTimeout(() => {
      setBlinkOn(!blinkOn);
    }, 1000);
  }, [blinkOn]);

  useEffect(() => {
    if (currentTime) {
      const milTime = currentTime.hour * 100 + currentTime.minute;

      if (milTime > 30 && milTime < 845) {
        setCurrentStatus("Probably asleep...");
        setCurrentFeatureColor("feature-purple");
      } else if (milTime >= 845 && milTime < 930) {
        setCurrentStatus("Breakfast!");
        setCurrentFeatureColor("feature-amber");
      } else if (milTime >= 1245 && milTime < 1315) {
        setCurrentStatus("Lunch!");
        setCurrentFeatureColor("feature-amber");
      } else if (milTime >= 1530 && milTime < 1550) {
        setCurrentStatus("Tea time!");
        setCurrentFeatureColor("feature-blue");
      } else if (milTime >= 1930 && milTime < 2030) {
        setCurrentStatus("Dinner!");
        setCurrentFeatureColor("feature-amber");
      } else if (milTime >= 2300) {
        setCurrentStatus("Relaxing");
        setCurrentFeatureColor("feature-gray");
      } else {
        setCurrentStatus("Probably working...");
        setCurrentFeatureColor("feature-green");
      }
    }
  }, [currentTime]);

  const featureDotClasses = classnames([
    "w-4 h-4 ml-1 mr-1 rounded-lg bg-gray-100 border-gray-200 border-solid border inline-block overflow-hidden"
  ]);

  const pulseDotClasses = classnames([
    currentFeatureColor,
    "animate-pulse border-solid border w-full h-full block"
  ]);

  return (
    <DescriptionSection
      icon={
        <svg
          height="100px"
          width="100px"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          x="0px"
          y="0px"
        >
          <title>62 all</title>
          <path d="M86.39,40.37h-11a3,3,0,0,0-2.87,2.13L66.27,63.06a2,2,0,0,1-3.87-.18l-5.58-27A7.84,7.84,0,0,0,49,29.52h0a7.84,7.84,0,0,0-7.82,6.33l-3.64,17a2,2,0,0,1-3.84.25L29,39.86a3,3,0,0,0-2.83-2H13.61a3,3,0,0,0,0,6H24l4,11.27a8,8,0,0,0,15.36-1L47,37.1a1.88,1.88,0,0,1,2-1.58h0a1.89,1.89,0,0,1,2,1.59l5.58,27A7.9,7.9,0,0,0,64,70.47h.39A7.89,7.89,0,0,0,72,64.8l5.6-18.44h8.77a3,3,0,0,0,0-6Z" />
        </svg>
      }
    >
      <DescriptionTitle>Current Status</DescriptionTitle>
      <p>
        Located in <span className="font-bold">{loc}</span>.
      </p>
      <p>
        Local time is{" "}
        <span className="font-bold">
          {time}
          <span className={classnames({ "opacity-0": !blinkOn })}>.</span>
        </span>
      </p>
      <p className="flex flex-row items-center justify-start">
        Current status:{" "}
        <span className={classnames([featureDotClasses])}>
          <span className={pulseDotClasses} />
        </span>{" "}
        <span className="font-bold">{currentStatus}</span>
      </p>
    </DescriptionSection>
  );
};

export default StatusSection;
