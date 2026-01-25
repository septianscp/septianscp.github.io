"use client";

import Carousel from "@/component/Carousel";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { PROJECTS } from "@/constant/Body";
import { notFound, useParams } from "next/navigation";

export default function PortfolioDetail() {
  const params = useParams();
  
  // params.index comes as string, convert to number and adjust for 0-based array
  const index = Number(params.index) - 1;
  const project = PROJECTS[index];

  if (!project) {
    notFound();
  }

  // Use images from project if available, otherwise fallback to single img
  const slides = project.images && project.images.length > 0 
    ? project.images 
    : [project.img];

  return (
    <div className="flex flex-col w-full min-h-screen" style={{ maxWidth: 1920, margin: "auto" }}>
      <Header active="Portfolio" isDetail={true} />
      
      <div className="flex flex-col w-full px-5 md:px-20 py-16 gap-10">
        <div className="text-3xl md:text-5xl font-bold text-center text-black">
          {project.name}
        </div>

        <div className="w-full max-w-[1000px] mx-auto">
          <Carousel slides={slides} />
        </div>

        <div className="flex flex-col gap-6 max-w-[1000px] mx-auto w-full">
            {project.subtitle && (
                <div className="text-2xl md:text-4xl font-bold text-black">
                    {project.subtitle}
                </div>
            )}

            <div className="flex flex-col gap-6 text-base text-gray-700 leading-relaxed">
                {project.description_1 && <p>{project.description_1}</p>}
                {project.description_2 && <p>{project.description_2}</p>}
                {project.description_3 && <p>{project.description_3}</p>}
                
                {!project.description_1 && <p>{project.description}</p>}
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
