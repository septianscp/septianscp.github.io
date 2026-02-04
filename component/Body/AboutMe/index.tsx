import Image from "next/image";

const AboutMe = ({ setActive }: { setActive: (active: string) => void }) => {
  return (
    <div
      id="About Me"
      className="flex flex-col md:flex-row items-center gap-8 md:gap-20 h-full w-full justify-center px-5 md:px-20 py-16"
      onFocus={() => setActive("About Me")}
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
        <div className="text-base text-gray-500">
          I focus on building frontend interfaces that are maintainable,
          consistent, and easy to evolve over time. My work often sits at the
          intersection of design and engineering, where I translate design
          intent into reusable components and scalable UI patterns.
          <br />
          <br />
          I value clear communication, thoughtful problem-solving, and ownership
          in my work. Whether working independently or within cross-functional
          teams, I aim to deliver UI that feels intuitive, reliable, and
          polished.
          <br />
          <br />
          I’m based in Kuningan, Indonesia, and open to remote or hybrid opportunities.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
