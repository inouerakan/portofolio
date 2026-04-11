export default function Navbar() {
    return (
        <nav className="navbar-container fixed z-50 bottom-8 right-8 flex flex-col items-end text-light text-4xl">
            <button className="is-text opacity-60 hover:opacity-100">is</button>
            <button className="here-text opacity-60 hover:opacity-100">been/being here</button>
            <button className="can-text opacity-60 hover:opacity-100">can do this</button>
            {/* <button className="opacity-60 hover:opacity-100">made/making this</button> */}
        </nav>
    )
}