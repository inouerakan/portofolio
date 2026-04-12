export default function Hero() {
    return (
        <div className="min-h-screen w-full bg-dark flex flex-col p-8 md:gap-0 gap-3">
            <div className="flex-1 md:block flex justify-center items-end">
                <h1 className="title lg:w-5/6 md:w-2/2 font-sans lg:text-biggest/35 md:text-8xl md:text-left text-4xl text-center font-bold">Rakan Shaka Raufa</h1>
            </div>
            <div className="flex flex-1 md:items-end md:justify-start items-start justify-center font-light">
                <p className="animation-showup md:w-45 md:text-2xl text-md text-center">a website to tell ya, who is this?</p>
            </div>
        </div>
    )
}