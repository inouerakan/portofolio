function WorkCard({imageOnBottom, name, description}) {
    const imageUrl = name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const base = import.meta.env.BASE_URL;
    const imageOrder = imageOnBottom ? "order-2" : "";
    const descriptionMargin = imageOnBottom ? "mb-6" : "mt-6";
    const descriptionItems = imageOnBottom ? "items-end" : "items-start";
    const imageTitle = imageOnBottom ? "items-start" : "items-end";

    return (
        <div className="md:w-130 w-80 flex flex-col">
            <div style={{ backgroundImage: `url(${base}/images/${imageUrl}.png)` }} className={`${imageOrder} flex-1 bg-center bg-cover`}>
                <h2 className={`h-full w-full transition-all ease-in-out md:bg-dark/0 bg-dark/50 hover:bg-dark/50 md:text-light/0 text-light hover:text-light font-bold md:text-4xl text-2xl font-sans flex md:justify-center md:items-center justify-start ${imageTitle} p-4`}>{name}</h2>
            </div>
            <div className={`${descriptionMargin} ${descriptionItems} h-1/2 md:text-2xl text-md flex`}>{description}</div>
        </div>
    )
}

export default function Work() {
    return (
        <div className="work-container h-dvh min-w-full flex bg-light text-dark pl-14 pr-14 gap-14">
            <WorkCard name="Bell's After Dark" description="A school group game project with a horror theme, using Unity as the engine. In that group, I served as the programmer, where I collaborated with the design team to translate complex narrative elements into functional game systems and interactive environments."/>
            <WorkCard imageOnBottom={true} name="This Portofolio" description="A personal branding platform built with React and Tailwind CSS to showcase my software engineering projects. I implemented GSAP for advanced animations and focused on creating a highly responsive, dark-themed interface that reflects my design aesthetic."/>
            {/* <WorkCard name="Bell's After Dark" description="Inspired by [inspiration], [Project Name] combines a [aesthetic style] interface with modern functionality. Built using [tech stack], I focused on high-quality typography and intuitive navigation to create a digital space that is both beautiful and functional."/> */}
        </div>
    )
}