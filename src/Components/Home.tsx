import "../App.css"
import "./Home.css"
import { Ref } from "react";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";


function Home() {
    function open(url: string) {
        window.open(url)
    }

    return (
        <>
            <div className="Home-Container">
                <div className="Description-Container">
                    <h1 id="Description-Text">Kyle Carbonell</h1>
                    <h2 id="Description-Text" >Student <span style={{ fontSize: "2rem" }}>|</span> Developer </h2>
                    <div className="Links-Container" id="Description-Text">
                        <div id="Icon-Button" onClick={() => {
                            open("https://www.instagram.com/kyle.carbonell/");
                        }}>
                            <CiInstagram id="Icon" />
                        </div>
                        <div id="Icon-Button" onClick={() => {
                            open("https://www.linkedin.com/in/kyle-carbonell/");
                        }}>
                            <CiLinkedin id="Icon" />
                        </div>
                        <div id="Icon-Button" onClick={() => {
                            open("https://github.com/kylecarbonell");
                        }}>
                            <FaGithub id="Icon" />
                        </div>
                        {/* <div id="Icon-Button" onClick={() => {
                            open("mail.google.com");
                        }}>
                            <IoIosMail id="Icon" />
                        </div> */}

                    </div>
                </div>
                <div className="Image-Container">
                    <span className="Photo"></span>
                </div>
            </div >
        </>

    )
}

export default Home