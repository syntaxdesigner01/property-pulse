import React from "react";
import Link from "next/link";
import Hero from "./Components/Hero";
import InfoBoxes from "./Components/InfoBoxes";
import HomeProperties from "./Components/HomeProperties";
import { env } from "process";

export default function HomePage() {
  console.log(process.env.MONGODB_URI);
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
}
