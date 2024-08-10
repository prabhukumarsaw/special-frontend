import React from "react";
import Title from "@/components/Title";
import Banner from "@/components/Banner";
import PopularTour from "./PopularTour";
import Packages from "./Packages";

const FullWidthSection = () => {
  return (
    <div className="grid grid-cols-5 gap-4 md:gap-8">
      <section className="section col-span-5 ">
        <Banner title={"Tour"} subTitle={"अतिथि देवो भवः"} />
      </section>
      <section className="section col-span-5 ">
        <div className=" mx-10">
          <Title title={"Most Popular Packages"} subTitle={"Tour"} />
        </div>
        <PopularTour />
      </section>

      <section className="section col-span-5">
       <Packages/>
      </section>
    </div>
  );
};

export default FullWidthSection;
