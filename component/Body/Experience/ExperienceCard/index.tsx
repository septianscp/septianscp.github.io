import Image from "next/image";

const ExperienceCard = ({ item: {
    company_name_role,
    year,
    company_logo,
    job_description
}, isEven }: { item: { company_name_role: string; year: string; company_logo: string; job_description: string }, isEven: boolean }) => {
    return (
        <div className={`flex gap-8 border border-gray-500 w-full px-6 py-8 rounded-lg ${isEven ? "bg-gray-500" : "bg-black"}`}>
            <div className="flex flex-col gap-7 w-full" >
                <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
                    <div className="flex gap-4 md:gap-7 items-start md:items-center">
                        <Image alt="company" src={company_logo} className="rounded" width={32} height={32} />
                        <div className="text-xl md:text-2xl font-semibold leading-normal">{company_name_role}</div>
                    </div>
                    <div className="text-base text-gray-300 md:text-white">{year}</div>
                </div>

                <div className="text-sm md:text-base leading-relaxed">{job_description}</div>
            </div>
        </div>
    )
}

export default ExperienceCard   