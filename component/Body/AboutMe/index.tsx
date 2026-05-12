import Image from "next/image";

const AboutMe = ({ setActive }: { setActive: () => void }) => {
  return (
    <div
      id="About Me"
      className="flex flex-col md:flex-row items-center gap-8 md:gap-20 h-full w-full justify-center px-5 md:px-20 py-16"
      onFocus={() => setActive()}
    >
      <div
        className="w-full max-w-[350px] md:max-w-[525px] aspect-square border-4 border-black rounded-xl flex items-center justify-center relative bg-white"
      >
        <Image
          alt="self"
          src="/assets/images/aboutme-septian.png"
          width={400}
          height={500}
          className="object-contain max-h-full"
        />
      </div>
      <div className="flex flex-col gap-5 w-full md:w-6/12 text-left">
        <div className="text-3xl md:text-5xl py-5 text-black text-center md:text-left">
          About <b>Me</b>
        </div>
        <div className="text-base text-gray-500 leading-relaxed">
          {"I'm a Senior Frontend Developer & Team Lead with 6+ years of experience building scalable, production-ready web applications. Most recently I led the Seller Center platform at Renos.id \u2014 guiding a cross-functional squad and owning frontend architecture, design systems, performance optimization, and technical decision-making in a high-traffic production environment."}
          <br />
          <br />
          {"I specialize in React, Next.js, and TypeScript, with a strong focus on clean architecture, maintainable code, and consistent UI through shared component libraries. I thrive in Agile teams and CI/CD-driven workflows, and I care deeply about ownership, code quality, and cross-functional collaboration."}
          <br />
          <br />
          {"Based in Kuningan, Indonesia \u2014 open to remote or hybrid opportunities."}
        </div>

        {/* Education */}
        <div className="mt-4 flex flex-col gap-2">
          <div className="text-sm font-bold text-black uppercase tracking-wider">Education</div>
          <div className="flex flex-col gap-1 text-sm text-gray-600">
            <div className="font-semibold text-black">IPB University</div>
            <div>Bachelor of Computer Science &middot; 2014 &ndash; 2017</div>
            <div>Diploma of Computer Engineering &middot; 2011 &ndash; 2014</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
