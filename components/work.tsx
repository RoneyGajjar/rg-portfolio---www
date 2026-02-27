import { Section, Button } from "@/components/util";
import Link from "next/link";

const workData = [
    {
        id: 1,
        img: "punit-valves.png",
        title: "Punit Valves",
        description: "Organizing complex technical specifications and product catalogs into a user-friendly interface for procurement professionals.",
        techStack: "React, JavaScript, Tailwind CSS.",
        link: "https://punitvalves.com/"

    },
    {
        id: 2,
        img: "rk-cinematics.png",
        title: "RK-Cinematics",
        description: "Description",
        techStack: "React, JavaScript, Tailwind CSS.",
        link: "https://cinematics-www-git-rk-cinematics-roney-gajjars-projects.vercel.app/"
    },
    {
        id: 3,
        img: "harshid-engravers.png",
        title: "Harshid Engravers",
        description: "Transitioning a traditional engraving MSME from manual, error-prone paper logging to a real-time digital tracking system.",
        techStack: "React, JavaScript, Tailwind CSS.",
        link: "#"
    },
    {
        id: 4,
        img: "kuber-creations.png",
        title: "Kuber Creations",
        description: "Building a high-performance showcase for handicrafts that could load quickly for a global audience.",
        techStack: "React, JavaScript, Tailwind CSS.",
        link: "https://kubercreations.com/"
    }
]

const Work = () => {
    return (
        <Section>
            {workData.map((item) => (
                <WorkCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    techStack={item.techStack}
                    link={item.link}
                />
            ))
            }

        </Section>
    )
}

export default Work;



const WorkCard = ({ title = "Work Title", description = "Work Description", img = "Image", link = "#", techStack = "Tech Stack" }) => (
    <div className="flex flex-col items-center justify-center gap-10 mt-15 bg-slate-100 p-2 rounded-xl mx-auto max-w-5xl">
        <div className="w-full">
            <img src={img} alt="Work Image" className="w-full h-[500] object-cover  rounded-xl border border-8 border-white shadow-md" />
        </div>
        <div className="flex flex-col">
            <div className="flex flex-row justify-between w-235">
                <div>
                    <span className="text-xl text-slate-800 font-semibold">{title}</span>
                    <span className="ml-5"><Link href={link}>View Project</Link></span>
                </div>
                <div>
                    <Button />
                </div>
            </div>
            <div className="text-xl max-w-2xl pb-5">
                <h2 className="text-slate-700">{description}</h2>
                <h3 className="text-slate-500 mt-2">{techStack}</h3>
            </div>
        </div>
    </div>
)
