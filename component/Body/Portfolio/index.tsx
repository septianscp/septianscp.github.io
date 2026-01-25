import { PROJECTS } from "@/constant/Body"
import PortfolioCard from "./PortfolioCard"

const Portfolio = ({setActive}: {setActive: () => void}) => {

    return (
        <div id="Portfolio" className="flex flex-col gap-5 height-full width-full justify-center gap-5 px-5 md:px-20 py-16 bg-black" onFocus={() => setActive()}>
            <div className="text-3xl md:text-5xl py-5 p-5 text-white align-center text-center">My <b>Portfolio</b></div>
            <div className="px-0 md:px-8 flex flex-col gap-5">
                {PROJECTS.map((item,index) => (
                    <PortfolioCard key={index} item={item} index={index} />
                ))} 
            </div>
        </div>
    )
}   

export default Portfolio