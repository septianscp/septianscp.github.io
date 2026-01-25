import Image from "next/image";

const SocialCard = ({ item }: { item: { name: string; img: string; link: string } }) => {
    return (
        <div className="group flex w-14 h-14 items-center justify-center rounded border-2 cursor-pointer border-black hover:!bg-black" onClick={() => window.open(item.link, "_blank")}>
            <Image src={item.img} alt={item.name} width={20} height={20} className="group-hover:invert brightness-0" />
        </div>
    )
}

export default SocialCard