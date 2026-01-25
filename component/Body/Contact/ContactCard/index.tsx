import Image from "next/image";

const ContactCard = ({
  item,
}: {
  item: { name: string; img: string; link: string };
}) => {
  return (
    <div
      className="group flex w-24 h-24 items-center justify-center rounded border-2 cursor-pointer border-black hover:!bg-black"
      onClick={() => window.open(item.link, "_blank")}
    >
      <Image
        src={item.img}
        alt={item.name}
        width={40}
        height={40}
        className="group-hover:invert brightness-0"
      />
    </div>
  );
};

export default ContactCard;
