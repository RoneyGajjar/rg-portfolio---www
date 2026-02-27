import { Section, Button } from "@/components/util";

const workData = [
    {
        id: 1,
        img: "profile-photo.jpg",
        title: "Punit Valves",
        description: "Description"

    },
    {
        id: 2,
        img: "profile-photo.jpg",
        title: "RK-Cinematics",
        description: "Description"
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
                />
            ))
            }

        </Section>
    )
}

export default Work;



const WorkCard = ({ title = "Work Title", description = "Work Description", img = "Image" }) => (
    <div className="flex flex-col items-center justify-center gap-10 mt-15 bg-slate-100 p-2 rounded-xl mx-auto max-w-5xl">
        <div className="w-full">
            <img src={img} alt="Work Image" className="w-full h-[500] object-cover  rounded-xl border border-8 border-white shadow-md" />
        </div>
        <div className="flex flex-col">
            <div className="flex flex-row justify-between w-235">
                <div>
                    <span className="text-xl">{title}</span>
                </div>
                <div>
                    <Button />
                </div>
            </div>
            <div className="text-2xl max-w-2xl pb-5">
                <h2>{description}</h2>
            </div>
        </div>
    </div>
)
