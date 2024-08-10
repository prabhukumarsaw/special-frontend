import React from "react";

import Banner from "@/components/Banner"

const FullWidthSection = () => {
  return (
    <div className="grid grid-cols-5 gap-4 md:gap-8">
      <section className="section col-span-5 ">
      
    <Banner title={"Contact Us"} subTitle={"Welcome the one"}/>

      </section>

      <section className="section col-span-5">
        
      </section>

     
      
    </div>
  );
};

export default FullWidthSection;
