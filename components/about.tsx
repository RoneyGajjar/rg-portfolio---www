import { Section } from "./util"

const About = () => {
  return (
    <Section>
        <div className="flex flex-row justify-between items-center max-w-5xl mx-auto p-4">
            <div>
                <h2>About Me</h2>
            </div>
            <div className="flex flex-col ">
                <span>Instagram</span>
                <span>Facebook</span>
                <span>Github</span>
                <span>Linkedin</span>
            </div>
        </div>
    </Section>
  )
}

export default About