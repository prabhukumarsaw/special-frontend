import React from "react";
import Hero from "@/components/Hero"; // Adjust the import path as necessary
import SearchFeature from "@/components/SearchFeature";
import ServiceFeature from "@/components/ServiceFeature";
import ExperienceSection from "@/components/Experience";
import GalleryFeature from "@/components/GalleryFeature";
import TestimonialSection from "@/components/TestimonialSection";
import Title from "@/components/Title";


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
        <Title title={"We Offer Our Best Services"} subTitle={"What We Serve"}/>
        </div>
        <ServiceFeature />
      </section>

      <section className="section col-span-5">
        <div className="mx-10">
        <Title title={"Will our all experience we will serve you"} subTitle={"Experience"}/>
        </div>
        <ExperienceSection />
      </section>


      <section className="section col-span-5">
        <div className=" mx-10">
        <Title title={"Visit Our Customers Tour Gallery"} subTitle={"Gallery"}/>
        </div>
        <GalleryFeature />
      </section>

      <section className="section col-span-5">
        <div className=" mx-10">
      <Title title={"What our Customers Say about us"} subTitle={"Testimonial"}/>
        </div>
        <TestimonialSection />
      </section>
      
    </div>
  );
};

export default FullWidthSection;
