const Header = () => {
    return (
        <header className="flex  justify-between max-w-7xl mx-auto p-4">
            <div className="flex flex-row text-base">
                <img src="profile-photo.jpg" alt="" className="h-10 w-10 rounded-full" />
                <div className="flex flex-col ml-3">
                    <span className="font-semibold">RG</span>
                    <span className="text-sm">Presently at Honey Hexa</span>
                </div>
            </div>
            <div className="text-base mt-3 font-semibold">
                <span>Resume</span>
            </div>
        </header>
    )
}

export default Header;