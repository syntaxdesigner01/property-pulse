import React from "react";
import Link from "next/link";
import Hero from "./Components/Hero";
import InfoBoxes from "./Components/InfoBoxes";
import HomeProperties from "./Components/HomeProperties";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
}
