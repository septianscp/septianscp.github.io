import Image from "next/image";

const SkillCard = ({ item }: { item: { name: string; img: string; } }) => {

    return (
        <div style={{ height: 186, width: 186 }} className="bg-white group flex flex-col items-center gap-8 justify-center rounded border-2 cursor-pointer border-black hover:!bg-black" >
            <Image src={item.img} alt={item.name} width={56} height={56} className="group-hover:invert brightness-0" />
            <div className="text-xl font-bold group-hover:text-white">{item.name}</div>
        </div>
    )
}

export default SkillCard