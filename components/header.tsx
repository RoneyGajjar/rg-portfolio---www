import { Download } from "./icons";
// import { Button } from "./util";
import Button from "./ui/atoms/button";

const Header = () => {
    return (
        <header className="border-b-1 border-slate-200" >
            <div className="flex flex-row justify-between max-w-7xl mx-auto p-4">
                <div className="flex flex-row text-base">
                    <img src="profile-photo.png" alt="" className="h-10 w-10 rounded-full" />
                    <div className="flex flex-col ml-3">
                        <span className="font-semibold">Roney Gajjar</span>
                        <span className="text-sm">Presently at Honey Hexa</span>
                    </div>
                </div>
                <div className="text-sm md:text-base font-semibold flex flex-row p-2">
                    <Button variant="outline" className="flex flex-row gap-2">Resume <Download /></Button>
                </div>
            </div>

        </header>
    )
}

export default Header;