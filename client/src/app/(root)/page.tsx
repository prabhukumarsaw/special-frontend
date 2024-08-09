import React from "react";
import Hero from "@/components/Hero"; // Adjust the import path as necessary
import SearchFeature from "@/components/SearchFeature";
import ServiceFeature from "@/components/ServiceFeature";
import ExperienceSection from "@/components/Experience";

const FullWidthSection = () => {
  return (
    <div className="grid grid-cols-5 gap-4 md:gap-8">
      <section className="section col-span-5">
        <Hero />
      </section>

      <section className="section col-span-5">
        <SearchFeature />
      </section>

      <section className="section col-span-5">
        <div className=" mx-10">
        <h5 className="services__subtitle">What We Serve</h5>
        <h2 className=" text-2xl font-bold">We Offer Our Best Services</h2>
        </div>
        <ServiceFeature />
      </section>

      <section className="section col-span-5">
        <div className=" mx-10">
        <h5 className="services__subtitle">Experience</h5>
        </div>
        <ExperienceSection />
      </section>
    </div>
  );
};

export default FullWidthSection;
