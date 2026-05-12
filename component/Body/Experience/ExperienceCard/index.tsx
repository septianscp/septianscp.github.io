import Image from "next/image";

interface ExperienceItem {
    company_name: string;
    company_subtitle: string;
    company_name_role: string;
    employment_type: string;
    year: string;
    company_logo: string;
    job_description: string;
    achievements: string[];
}

const ExperienceCard = ({ item, isEven }: { item: ExperienceItem; isEven: boolean }) => {
    const {
        company_name,
        company_subtitle,
        company_name_role,
        employment_type,
        year,
        company_logo,
        job_description,
        achievements,
    } = item;

    return (
        <div className={`flex flex-col gap-6 border border-gray-600 w-full px-6 py-8 rounded-xl text-white ${isEven ? "bg-gray-800" : "bg-gray-900"}`}>
            {/* Header row */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex gap-4 items-start">
                    <Image alt={company_name} src={company_logo} className="rounded mt-1 shrink-0" width={40} height={40} />
                    <div className="flex flex-col gap-1">
                        <div className="text-lg md:text-xl font-bold leading-snug">{company_name_role}</div>
                        <div className="text-sm font-semibold text-gray-300">{company_name}</div>
                        <div className="text-xs text-gray-400">{company_subtitle}</div>
                        <span className="mt-1 inline-block text-xs font-medium bg-gray-700 text-gray-200 px-2 py-0.5 rounded-full w-fit">
                            {employment_type}
                        </span>
                    </div>
                </div>
                <div className="text-sm text-gray-400 shrink-0 md:text-right">{year}</div>
            </div>

            {/* Description */}
            <div className="text-sm text-gray-300 leading-relaxed">{job_description}</div>

            {/* Achievements */}
            {achievements && achievements.length > 0 && (
                <ul className="flex flex-col gap-2">
                    {achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 items-start text-sm text-gray-300 leading-relaxed">
                            <span className="text-white mt-1 shrink-0">▸</span>
                            <span>{achievement}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExperienceCard;