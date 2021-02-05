import Head from "next/head";
import React from "react";
import ImagePane from "../ImagePane";
import ProductsSection from "../ProductsSection";
import StatusSection from "../StatusSection";
import TeamSection from "../TeamSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Traveler Dev Ltd.</title>
        <meta name="description" content="Software wherever and whenever you need it." />
      </Head>
      <section className="body-font min-h-screen flex-grow flex flex-col justify-center items-stretch">
        <div className="container px-5 py-8 mx-auto flex flex-wrap">
          <ImagePane />
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center w-full flex-auto">
            <StatusSection />
            <ProductsSection />
            <TeamSection />
          </div>
        </div>
      </section>
      <footer className="container mx-auto flex-shrink flex flex-row justify-center align-center my-8 text-gray-600 dark:text-gray-300">
        <p className="text-sm">&copy; 2021 Traveler Dev Ltd. - Registered in England 13120175</p>
      </footer>
    </div>
  );
}
