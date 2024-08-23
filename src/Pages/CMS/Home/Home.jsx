import { Carousel } from "bootstrap";
import React from "react";
import Slidding from "../../../COMPONENTS/Slidding";
import CardInfo from "../../../COMPONENTS/CardInfo";
import FeaturedDoctors from "../../../COMPONENTS/FeaturedDoctors";
import Service from "../../../COMPONENTS/Service";

export default function Home() {
  return (
    <div style={{ marginTop: "11rem" }}>
      <Slidding />
      <CardInfo />
      <FeaturedDoctors />
      <Service />
    </div>
  );
}
