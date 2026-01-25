import { WORK_EXPERIENCE } from "@/constant/Body"
import ExperienceCard from "./ExperienceCard"

const Experience = ({ setActive }: { setActive: () => void }) => {
    return (

        <div id="Experience" className="flex flex-col gap-5 height-full width-full justify-center px-5 md:px-20 py-16 bg-black" onFocus={() => setActive()}>
            <div className="text-3xl md:text-5xl py-5 p-5 text-white align-center text-center">My <b>Experience</b></div>
            <div className="flex flex-col gap-5 py-10 px-6">
                {
                    WORK_EXPERIENCE.map((item, index) => <ExperienceCard key={item.company_name_role} item={item} isEven={(index + 1) % 2 === 0} />)
                }

            </div>
        </div>
    )
}

export default Experience