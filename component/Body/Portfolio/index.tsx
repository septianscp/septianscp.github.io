import { PROJECTS } from "@/constant/Body"
import PortfolioCard from "./PortfolioCard"
import { useRouter } from "next/navigation"

const Portfolio = ({setActive}: {setActive: () => void}) => {
    const router = useRouter();

    return (
        <div id="Portfolio" className="flex flex-col gap-5 height-full width-full justify-center gap-5 px-5 md:px-20 py-16 bg-black" onFocus={() => setActive()}>
            <div className="text-3xl md:text-5xl py-5 p-5 text-white align-center text-center">My <b>Portfolio</b></div>
            <div className="px-0 md:px-8 flex flex-col gap-5">
                {PROJECTS.slice(0, 3).map((item,index) => (
                    <PortfolioCard key={index} item={item} index={index} />
                ))} 
            </div>

            <div className="flex justify-center mt-8">
                <button
                    onClick={() => router.push('/portfolio')}
                    className="bg-white text-black px-8 py-3 rounded font-bold text-lg md:text-xl hover:bg-gray-200 transition-colors"
                >
                    View All Projects
                </button>
            </div>
        </div>
    )
}   

export default Portfolio