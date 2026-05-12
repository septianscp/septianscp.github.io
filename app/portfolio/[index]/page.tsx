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

        <div className="flex flex-col gap-10 max-w-[1000px] mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-gray-800">
                {project.subtitle && (
                    <div className="text-xl md:text-3xl font-semibold text-gray-300">
                        {project.subtitle}
                    </div>
                )}

                {project.link && (
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="shrink-0 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                    >
                        Visit Website
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </a>
                )}
            </div>

            <div className="flex flex-col gap-12 text-base text-gray-300 leading-relaxed">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {project.menus && project.menus.map((menu: any, idx: number) => {
                  const isRole = menu.title.toLowerCase() === 'role';
                  return (
                    <div key={idx} className={`flex flex-col gap-4 ${isRole ? 'bg-gray-900 p-8 rounded-xl border border-gray-700' : ''}`}>
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-2xl font-bold text-white tracking-wide">{menu.title}</h3>
                        {!isRole && <div className="h-px bg-gray-800 flex-1"></div>}
                      </div>
                      
                      {menu.type === 'text' && (
                        <div className="flex flex-col gap-4 text-lg">
                           {(menu.value as string[]).map((val, vIdx) => (
                             <p key={vIdx}>{val}</p>
                           ))}
                        </div>
                      )}
                      {menu.type === 'bullet' && (
                        <ul className="flex flex-col gap-4 text-lg">
                           {(menu.value as string[]).map((val, vIdx) => (
                             <li key={vIdx} className="flex gap-3 items-start">
                               <span className="text-white mt-1 shrink-0">▸</span>
                               <span>{val}</span>
                             </li>
                           ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
