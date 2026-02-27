import { Button, Section } from "./util";

const Hero = () => {
    return (
        <Section >
            <div className="flex flex-col items-center justify-center text-center gap-10 mt-15">
                <div className="mx-auto max-w-6xl">
                    <h1 className="text-7xl font-medium flex justify-center items-center">Roney Gajjar | Full-Stack Developer & Innovation Specialist</h1>
                </div>
                <Button />
            </div>
        </Section>

    )
}

export default Hero;