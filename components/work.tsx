import { Section, Button } from "@/components/util";
import Link from "next/link";

const workData = [
    {
        id: 1,
        img: "profile-photo.jpg",
        title: "Punit Valves",
        description: "Organizing complex technical specifications and product catalogs into a user-friendly interface for procurement professionals."
        link: "https://punitvalves.com/"
    },
    {
        id: 2,
        img: "profile-photo.jpg",
        title: "RK-Cinematics",
        description: "Description"
    },
    {
        id: 3,
        img: "profile-photo.jpg",
        title: "Harshid Engravers",
        description: "Transitioning a traditional engraving MSME from manual, error-prone paper logging to a real-time digital tracking system."
    },
    {
        id: 4,
        img: "profile-photo.jpg",
        title: "Kuber Creations",
        description: "Building a high-performance showcase for handicrafts that could load quickly for a global audience."
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
                    link={item.link}
                />
            ))
            }

        </Section>
    )
}

export default Work;



const WorkCard = ({ title = "Work Title", description = "Work Description", img = "Image", link = "#" }) => (
    <div className="flex flex-col items-center justify-center gap-10 mt-15 bg-slate-100 p-2 rounded-xl mx-auto max-w-5xl">
        <div className="w-full">
            <img src={img} alt="Work Image" className="w-full h-[500] object-cover  rounded-xl border border-8 border-white shadow-md" />
        </div>
        <div className="flex flex-col">
            <div className="flex flex-row justify-between w-235">
                <div>
                    <span className="text-xl text-slate-800 font-semibold">{title}</span>
                    <Link href={link}></Link>
                </div>
                <div>
                    <Button />
                </div>
            </div>
            <div className="text-2xl max-w-2xl pb-5">
                <h2 className="text-slate-700">{description}</h2>
            </div>
        </div>
    </div>
)
