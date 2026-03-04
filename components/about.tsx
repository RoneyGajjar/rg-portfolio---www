import Link from "next/link";
import { User } from "./icons"
import { Section } from "./util"

const ItemData = [
    {
        id: 1,
        label: "Github/RoneyGajjar",
        img: "/github.svg",
        value: "https://github.com/RoneyGajjar"
    },
    {
        id: 2,
        label: "Email/roneygajjar121@gmail.com",
        img: "/gmail.svg",
        value: "mailto:roneygajjar121@gmail.com"
    },
    {
        id: 3,
        label: "LinkedIn/RoneyGajjar",
        img: "/github.svg",
        value: "https://www.linkedin.com/in/roney-gajjar-a6970b272/"
    },
    {
        id: 4,
        label: "Instagram/roney.gajjar",
        img: "/instagram.svg",
        value: "https://www.instagram.com/roney.gajjar?igsh=endyNmUxbG5iMGJl"
    },


];

const About = () => {
    return (
        <Section>
            <div className="flex-col md:flex flex-row max-w-5xl mx-auto p-4">
                <div className="w-full md:w-2/3">
                    <h2 className="text-xl font-semibold mt-10">About Me</h2>
                    <div className="flex flex-col text-md gap-y-4 mt-4">
                        <p>
                            I am a Full-Stack Developer dedicated to building responsive, high-performance web applications that scale businesses from "zero to hero".
                        </p>
                        <p>
                            Currently, at Honey Hexa, I bridge the gap between complex engineering requirements and seamless user experiences for MSME clients like Punit Valves and Harshid Engravers.
                        </p>
                        <p>
                            I specialize in React, Next.js, and Tailwind CSS, with a core focus on technical SEO and performance
                            optimization to ensure every project meets 90+ web vital scores.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col w-1/3 gap-4 text-md p-0 md:p-10 mt-10 ">
                    {/* <span>Instagram</span> */}
                    {/* <span>Facebook</span> */}
                    {ItemData.map((item) => (
                        <LineItem
                            key={item.id}
                            label={item.label}
                            img={item.img}
                            value={item.value}
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default About


const LineItem = ({ value = "" ,label = "Label", img = "icon" }) => {
    return (
        <Link href={value} className="flex items-center gap-2 text-blue-500 hover:text-blue-900 cursor-pointer">
            <img src={img} alt="" className="w-6 h-6" />
            {label}
        </Link>

    )
}