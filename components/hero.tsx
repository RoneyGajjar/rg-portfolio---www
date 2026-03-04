import { Section } from "./util";
import Button from "./ui/atoms/button";
import CalButton from "./calcom";

const Hero = () => {
    return (
        <Section >
            <div className="flex flex-col items-center justify-center text-center gap-10 mt-15">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold flex justify-center text-left md:text-center items-center ">
                        {/* Building scalable architecture and high-performance web applications. */}
                        Engineering seamless digital experiences for growth and scale.
                    </h1>
                </div>
                <CalButton />
            </div>
        </Section>

    )
}

export default Hero;