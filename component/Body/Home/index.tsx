import { SOCIAL } from "@/constant/Body";
import Image from "next/image";
import SocialCard from "./SocialCard";

const Home = ({ setActive }: { setActive: () => void }) => {
  return (
    <div
      id="Home"
      className="flex flex-col-reverse gap-8 px-5 md:px-20 py-16 text-black w-full justify-center h-full md:flex-row items-center"
      onFocus={() => setActive()}
    >
      <div className="flex flex-col justify-center h-full relative w-full md:w-1/2">
        <div className="flex flex-col gap-8 mb-16 md:mb-0">
          <div className="flex flex-col gap-5 text-center md:text-left">
            <div className="text-3xl md:text-5xl">
              Hello, I’m <b>Septian.</b>
            </div>
            <div className="font-bold text-3xl md:text-5xl">
              Frontend <span className="text-outline">Developer</span>
            </div>
            <div className="text-3xl md:text-5xl">
              Based in <b>Kuningan, Indonesia.</b>
            </div>
          </div>
          <div
            className="text-base text-gray-500 max-w-full md:max-w-[580px] text-center md:text-left"
          >
            Frontend Developer with 6+ years of experience building
            production-ready web applications. Focused on React, Next.js, and
            clean UI implementation. Experienced in collaborating with
            cross-functional teams and delivering scalable interfaces.
          </div>
        </div>

        <div className="flex gap-4 md:gap-8 justify-center md:justify-start mt-4 md:mt-0 md:absolute md:bottom-[-27px]">
          {SOCIAL.map((item) => (
            <SocialCard key={item.name} item={item} />
          ))}
        </div>
      </div>

      <div className="relative w-full md:w-1/2 flex justify-center">
        <Image
          alt="self"
          src="/assets/images/image-self.svg"
          width={496}
          height={596}
          className="w-full max-w-[300px] md:max-w-[496px] h-auto"
        />
        <div
          className="border-b-2 border-black absolute bottom-1 right-0 -z-10 w-full md:w-[700px]"
        />
      </div>
    </div>
  );
};

export default Home;
