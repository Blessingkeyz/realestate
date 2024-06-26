import AboutUs from "@/components/AboutUs";
import Faq from "@/components/Faq";
import FeaturedProperties from "@/components/FeaturedProperties";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowitWorks from "@/components/HowitWorks";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowitWorks />
      <FeaturedProperties />
      <Services />
      <AboutUs />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default page;
