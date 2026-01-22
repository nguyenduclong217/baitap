import React from "react";
import Header from "./Pages/Header";
import HeroSection from "./Pages/HeroSection";
import ExclusiveDeals from "./Pages/ExclusiveDeals";
import Categories from "./Pages/Categories";
import Restaurants from "./Pages/Restaurants";
import MobileAppBanner from "./Pages/MobileAppBanner";
import FAQs from "./Pages/FAQs";
import Footer from "./Pages/Footer";
import PartnerSection from "./Pages/PartnerSection";
import Sections from "./Pages/Sections";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <Toaster richColors position="top-right" />

      <div className="max-w-[1350px] bg-gray-400 mx-auto my-2 flex flex-col gap-12">
        <Header />
        <HeroSection />
        <ExclusiveDeals />
        <Categories />
        <Restaurants />
        <MobileAppBanner />
        <PartnerSection />
        <FAQs />
        <Sections />
        <Footer />
      </div>
    </>
  );
}
