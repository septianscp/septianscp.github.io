import { SOCIAL } from "@/constant/Body";
import ContactCard from "./ContactCard";

const Contact = ({ setActive }: { setActive: () => void }) => {
  return (
    <div
      id="Contact"
      className="flex flex-col gap-20 height-full items-center justify-center text-black w-full px-5 md:px-20 py-16"
      onFocus={() => setActive()}
    >
      <div className="text-3xl md:text-5xl text-black justify-center align-center font-bold w-full md:max-w-[900px]">
        Interested in working together or have an opportunity in mind? Feel free
        to reach out.
      </div>

      <div className="flex gap-8 flex-wrap justify-center ">
        {SOCIAL.map((item) => (
          <ContactCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
