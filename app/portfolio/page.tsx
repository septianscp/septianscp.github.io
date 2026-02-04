"use client";

import Footer from "@/component/Footer";
import Header from "@/component/Header";
import PortfolioCard from "@/component/Body/Portfolio/PortfolioCard";
import { PROJECTS } from "@/constant/Body";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-black" style={{ maxWidth: 1920, margin: "auto" }}>
      <Header active="Portfolio" isDetail={true} />
      
      <div className="flex flex-col w-full px-5 md:px-20 py-16 gap-10">
        <div className="text-3xl md:text-5xl font-bold text-center text-white mb-8">
          My <b>Portfolios</b>
        </div>

        <div className="flex flex-col gap-10">
          {PROJECTS.map((item, index) => (
            <PortfolioCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
