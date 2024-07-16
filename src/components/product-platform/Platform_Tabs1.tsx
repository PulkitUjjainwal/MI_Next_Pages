"use client"
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";

export default function Platform_Tabs1() {
  const [selectedTab, setSelectedTab] = useState("Sourcing");

  const tabItems = [
    {
      label: "Sourcing",
      content: "A fully integrated suite of financial and payments products",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/facf71bf6850574c218c249c612030426b35e72a377c89c0d783f6d4ed97f1d5?apiKey=1d97127843014888b916aa6ba331e743&width=800"
    },
    {
      label: "Engagement",
      content: "Engagement content goes here.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/abc1234567890?apiKey=1d97127843014888b916aa6ba331e743&width=800"
    },
    {
      label: "Talent pool management",
      content: "Talent pool management content goes here.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/def1234567890?apiKey=1d97127843014888b916aa6ba331e743&width=800"
    },
    {
      label: "Recruiting database",
      content: "Recruiting database content goes here.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ghi1234567890?apiKey=1d97127843014888b916aa6ba331e743&width=800"
    },
    {
      label: "Branding",
      content: "Branding content goes here.",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/jkl1234567890?apiKey=1d97127843014888b916aa6ba331e743&width=800"
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center px-16 py-6 mt-14 w-full text-sm font-semibold leading-4 text-white uppercase bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <Tabs.Root
          className="flex gap-5 justify-between max-w-full w-[918px] max-md:flex-wrap"
          value={selectedTab}
          onValueChange={(val) => setSelectedTab(val)}
        >
          <Tabs.List className="flex gap-5 justify-between w-full">
            {tabItems.map((item, idx) => (
              <Tabs.Trigger
                key={idx}
                className={`cursor-pointer ${selectedTab === item.label ? "text-orange-400" : "text-white"}`}
                value={item.label}
              >
                {item.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </Tabs.Root>
      </div>
      <div className="self-center mt-20 w-full max-w-[1178px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 font-bold max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl text-black uppercase leading-[60px] max-md:max-w-full">
                {tabItems.find((item) => item.label === selectedTab)?.content}
              </div>
              <div className="mt-7 text-base leading-7 text-neutral-500 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </div>
              <div className="justify-center self-start px-6 py-3 mt-12 text-sm leading-4 text-white uppercase bg-orange-400 rounded-md max-md:px-5 max-md:mt-10">
                Schedule A Demo
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet={tabItems.find((item) => item.label === selectedTab)?.image}
              className="w-full aspect-[1.23] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}