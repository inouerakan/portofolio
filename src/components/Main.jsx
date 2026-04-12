import { forwardRef } from "react";
import { IoSchoolSharp } from "react-icons/io5";

function HereCard({place, year}) {
    return (
        <div className="here-card-container flex items-center md:gap-8 gap-4">
            <IoSchoolSharp className="lg:text-8xl md:text-4xl text-2xl"/>
            <div>
                <h2 className="here-card-text font-sans font-bold lg:text-4xl md:text-2xl">{place}</h2>
                <p className="here-card-text text-light-100 lg:text-2xl md:text-md">{year}</p>
            </div>
        </div>
    )
}

function SkillCard({name, skill}) {
    return (
        <div className="skill-card-container">
            <h2 className="skill-card-text font-sans font-bold lg:text-4xl md:text-2xl">{name}</h2>
            <p className="skill-card-text text-light-100 lg:text-2xl md:text-md">{skill}</p>
        </div>
    )
}

function Main() {
    return (
        <div className="main-container h-dvh w-full md:p-8 p-4 flex overflow-hidden">
            <div className="md:flex-1 w-full flex md:flex-row md:justify-start md:gap-0 flex-col justify-center gap-8 flex-wrap">
                <div className="is-container md:h-1/2 md:w-1/2 h-fit w-full bg-light md:p-8 p-4 text-dark font-sans lg:text-4xl/11.5 md:text-2xl/tight text-justify">Software Engineering student. Tech enthusiast. Creative soul. Focused on building meaningful software with a touch of visual storytelling. Crafting experiences where code meets design.</div>
                <div className="md:h-1/2 md:w-1/2 h-fit w-full md:p-8 p-4 flex flex-col md:gap-8 md:pt-0 pt-9 gap-4">
                    <HereCard place="MTS Sirnamiskin" year="2021-2024"/>
                    <HereCard place="SMK Negeri 4 Bandung" year="2024-2027"/>
                </div>
                <div className="md:h-1/2 md:w-1/2 h-fit w-full md:p-8 p-4 flex flex-col md:gap-8 gap-4">
                    <SkillCard name="Development & Tools" skill="React, Tailwind CSS, Unity Programming"/>
                    <SkillCard name="Creative & Tools" skill="After Effects, Capcut"/>
                </div>
            </div>
        </div>
    )
}

export default Main;