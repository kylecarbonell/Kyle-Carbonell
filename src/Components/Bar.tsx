import { Link } from "react-router-dom";
import "./Bar.css"

interface Functions {
    about: () => void
    projects: () => void
    contact: () => void
}

function Bar(props: Functions) {


    return (

        <>
            <div className="Bar">
                <div className="Name-Container"><h1 >Kyle Carbonell</h1></div>

                {/* Link Nav Bar */}
                <nav className="Link-Container">
                    <Link className="Link" id="link-id" onClick={props.about} to="">
                        About
                    </Link>

                    <Link className="Link" onClick={props.projects} to={""}>
                        <h1 id="link-id" >Projects</h1>
                    </Link>

                    <Link className="Link" onClick={props.contact} to={""}>
                        <h1 id="link-id" >Contact</h1>
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Bar;