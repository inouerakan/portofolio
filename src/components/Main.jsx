import { forwardRef } from "react";
import { IoSchoolSharp } from "react-icons/io5";

function HereCard({place, year}) {
    return (
        <div className="here-card-container flex items-center gap-8">
            <IoSchoolSharp className="text-8xl"/>
            <div>
                <h2 className="here-card-text font-sans font-bold text-4xl">{place}</h2>
                <p className="here-card-text text-light-100 text-2xl">{year}</p>
            </div>
        </div>
    )
}

function SkillCard({name, skill}) {
    return (
        <div className="skill-card-container">
            <h2 className="skill-card-text font-sans font-bold text-4xl">{name}</h2>
            <p className="skill-card-text text-light-100 text-2xl">{skill}</p>
        </div>
    )
}

function Main() {
    return (
        <div className="main-container min-h-screen w-full p-8 flex overflow-hidden">
            <div className="flex-1 w-full flex flex-wrap">
                <div className="is-container h-1/2 w-1/2 bg-light p-8 text-dark font-sans text-4xl/11.5 text-justify">Software Engineering student. Tech enthusiast. Creative soul. Focused on building meaningful software with a touch of visual storytelling. Crafting experiences where code meets design.</div>
                <div className="h-1/2 w-1/2 p-8 flex flex-col gap-8">
                    <HereCard place="MTS Sirnamiskin" year="2021-2024"/>
                    <HereCard place="SMK Negeri 4 Bandung" year="2024-2027"/>
                </div>
                <div className="h-1/2 w-1/2 p-8 flex flex-col gap-8">
                    <SkillCard name="Development & Tools" skill="React, Tailwind CSS, Unity Programming"/>
                    <SkillCard name="Creative & Tools" skill="After Effects, Capcut"/>
                </div>
            </div>
        </div>
    )
}

export default Main;