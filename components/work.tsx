import { Section } from "@/components/util";
import Link from "next/link";
import Button from "./ui/atoms/button";

const workData = [
    {
        id: 1,
        img: "rk-cinematics.png",
        title: "RK-Cinematics",
        description: "Spearheaded the development of India’s first telescopic cinematic camera crane. By integrating advanced robotics and UGV-mounted systems, this project delivers high-precision, agile camera movement.",
        techStack: "React, JavaScript, Tailwind CSS.",
        link: "https://cinematics-www-git-rk-cinematics-roney-gajjars-projects.vercel.app/"
    },
    {
        id: 2,
        img: "apex-harshid.png",
        title: "Apex Harshid",
        description: "Organizing complex technical specifications and product catalogs into a user-friendly interface for procurement professionals.",
        techStack: "React, JavaScript, Tailwind CSS.",
        link: "https://punitvalves.com/"

    },
    {
        id: 3,
        img: "wellness.png",
        title: "Sona Wellness",
        description: "Building a high-performance showcase for handicrafts that could load quickly for a global audience.",
        techStack: "React, JavaScript, Tailwind CSS.",
        link: "https://wellness-www.vercel.app/"
    }
    // {
    //     id: 3,
    //     img: "harshid-engravers.png",
    //     title: "Harshid Engravers",
    //     description: "Transitioning a traditional engraving MSME from manual, error-prone paper logging to a real-time digital tracking system.",
    //     techStack: "React, JavaScript, Tailwind CSS.",
    //     link: "#"
    // },
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
                // link={item.link}
                />
            ))
            }

        </Section>
    )
}

export default Work;



const WorkCard = ({ title = "Work Title", description = "Work Description", img = "Image", link = "#", techStack = "Tech Stack" }) => (
    <div className="flex flex-col justify-center gap-10 mt-15 bg-slate-100 p-2 rounded-xl mx-auto max-w-5xl">
        <div className="w-full">
            <img src={img} alt="Work Image" className="w-full aspect-video object-top object-cover rounded-xl border border-8 border-white shadow-md" />
        </div>
        <div className="flex flex-col p-2">
            <div className="flex flex-col md:flex-row justify-between w-full">
                <div className="flex flex-row items-center gap-5 pb-5">
                    <span className="text-md text-slate-800 font-semibold">{title}</span>
                    <h3 className="text-slate-500">{techStack}</h3>
                    {/* <span className="ml-5"><Link href={link}>View Project</Link></span> */}
                </div>
                <div className="mb-5 md:mb-0">
                    <Button variant="outline">Coming Soon</Button>
                </div>
            </div>
            <div className="text-xl max-w-2xl pb-5">
                <h2 className="text-slate-700">{description}</h2>
            </div>
        </div>
    </div>
)
