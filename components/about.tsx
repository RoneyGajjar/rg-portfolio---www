import { Section } from "./util"

const About = () => {
  return (
    <Section>
        <div className="flex flex-row max-w-5xl mx-auto p-4">
            <div className="w-1/2">
                <h2 className="text-xl font-semibold">About Me</h2>
                <p className="mt-4 text-lg ">
                    I am a Full-Stack Developer dedicated to building responsive, high-performance web applications that scale businesses from "zero to hero". Currently, at Honey Hexa, I bridge the gap between complex engineering requirements and seamless user experiences for MSME clients like Punit Valves and Harshid Engravers. I specialize in React, Next.js, and Tailwind CSS, with a core focus on technical SEO and performance optimization to ensure every project meets 90+ web vital scores.
                </p>
            </div>
            <div className="flex flex-col w-1/2 gap-4 justify-center text-lg p-10">
                {/* <span>Instagram</span> */}
                {/* <span>Facebook</span> */}
                <span className="text-blue-500 hover:text-blue-900 cursor-pointer">Github</span>
                <span className="text-blue-500 hover:text-blue-900 cursor-pointer">Linkedin</span>
                <span className="text-blue-500 hover:text-blue-900 cursor-pointer">M: +91 76218 71183</span>
                <span className="text-blue-500 hover:text-blue-900 cursor-pointer">Email: roneygajjar121@gmail.com</span>
            </div>
        </div>
    </Section>
  )
}

export default About