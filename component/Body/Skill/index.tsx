import { SKILL } from "@/constant/Body"
import SkillCard from "./SkillCard"

const Skill = ({ setActive }: { setActive: () => void }) => {
    return (
        <div id="Skill" className="flex flex-col height-full width-full justify-center gap-5 px-5 md:px-20 py-16">
            <div className="text-3xl md:text-5xl py-5 text-black align-center text-center">My <b>Skills</b></div>
            <div className="flex gap-8 py-5 text-black justify-center flex-wrap" onFocus={() => setActive()}>
                {SKILL.map((item) => <SkillCard key={item.name} item={item} />)}
            </div>
        </div>
    )
}

export default Skill