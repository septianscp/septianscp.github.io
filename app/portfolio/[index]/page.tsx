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
    <div className="flex flex-col w-full min-h-screen bg-black" style={{ maxWidth: 1920, margin: "auto" }}>
      <Header active="Portfolio" isDetail={true} />
      
      <div className="flex flex-col w-full px-5 md:px-20 py-16 gap-10">
        <div className="text-3xl md:text-5xl font-bold text-center text-white">
          {project.title}
        </div>

        <div className="w-full max-w-[1000px] mx-auto">
          <Carousel slides={slides} />
        </div>

        <div className="flex flex-col gap-8 max-w-[1000px] mx-auto w-full">
            {project.subtitle && (
                <div className="text-2xl md:text-4xl font-bold text-white text-center md:text-left">
                    {project.subtitle}
                </div>
            )}

            {project.link && (
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors w-fit mx-auto md:mx-0"
                >
                    Visit Website
                </a>
            )}

            <div className="flex flex-col gap-8 text-base text-gray-300 leading-relaxed">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {project.menus && project.menus.map((menu: any, idx: number) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-white">{menu.title}</h3>
                    {menu.type === 'text' && (
                      <div className="flex flex-col gap-4">
                         {(menu.value as string[]).map((val, vIdx) => (
                           <p key={vIdx}>{val}</p>
                         ))}
                      </div>
                    )}
                    {menu.type === 'bullet' && (
                      <ul className="list-disc pl-5 flex flex-col gap-2">
                         {(menu.value as string[]).map((val, vIdx) => (
                           <li key={vIdx}>{val}</li>
                         ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
