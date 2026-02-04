import Image from "next/image";
import { useRouter } from "next/navigation";

const PortfolioCard = ({
  item,
  index,
}: {
  item: { img: string; title: string; description: string; link: string; images?: string[] };
  index: number;
}) => {
  const router = useRouter();
  const displayImage = item.images && item.images.length > 0 ? item.images[0] : item.img;

  return (
    <div
      className={`flex flex-col gap-7 justify-center items-center ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      key={index}
    >
      <Image
        className={`${
          index % 2 === 0 ? "md:!pl-0" : "md:!pr-0"
        } px-0 md:px-16 py-10 rounded-xl cursor-pointer transition-transform hover:scale-105 w-full h-auto`}
        src={displayImage}
        alt={item.title}
        width={530}
        height={398}
        style={{ maxWidth: 530 }}
        onClick={() => router.push(`/portfolio/${index + 1}`)}
      />
      <div style={{ maxWidth: 582 }} className="flex flex-col gap-5 px-5 md:px-0">
        <div className="text-3xl md:text-5xl font-bold">{index + 1}</div>
        <div className="text-2xl md:text-4xl font-bold text-white align-center ">
          {item.title}
        </div>
        <div className="text-base text-white align-center ">
          {item.description}
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => router.push(`/portfolio/${index + 1}`)}
            className="bg-white cursor-pointer hover:bg-gray-200 text-black font-bold py-2 px-4 rounded"
          >
            View Details
          </button>
          {item.link && (
             <button
             onClick={() => window.open(item.link, "blank")}
             className="border border-white cursor-pointer hover:bg-white/10 text-white font-bold py-2 px-4 rounded"
           >
             Visit Site
           </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
