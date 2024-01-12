import { useRef, useState } from "react";
import "./Projects.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import ProjectImages from "./ProjectImages";

function Projects() {
  const projects = ["Jerky Republic", "P1", "Fire"];
  //TESTSTSTSTS
  const images = [
    [
      "JerkyRepublicHome",
      "JerkyRepublicAbout",
      "JerkyRepublicShop",
      "JerkyRepublicCart",
      "JerkyRepublicLogin",
      "JerkyRepublicAdmin1",
      "JerkyRepublicAdmin2",
    ],
    [""],
  ];

  const [name, setName] = useState("");
  const projectIndex = useRef<number>(0);
  function scroll(dir: String) {
    if (dir == "left") {
      if (projectIndex.current > 0) {
        projectIndex.current -= 1;
      } else {
        projectIndex.current = projects.length - 1;
      }
    } else if (dir == "right") {
      if (projectIndex.current < projects.length - 1) {
        projectIndex.current += 1;
      } else {
        projectIndex.current = 0;
      }
    }

    // console.log(projectIndex.current);
    setName(projects[projectIndex.current]);
  }

  return (
    <>
      <div className="Projects-Container">
        <div className="Projects-Scroll">
          <button
            className="Arrow-Button"
            onClick={() => {
              scroll("left");
            }}
          >
            <FaLongArrowAltLeft id="Arrow" />
          </button>
          <div className="Title-Container">
            <h1 id="Title-Text">{name}</h1>
          </div>

          <button
            className="Arrow-Button"
            onClick={() => {
              scroll("right");
            }}
          >
            <FaLongArrowAltRight id="Arrow" />
          </button>
        </div>
        <div className="Projects-Images">
          {/* Image slide show component */}
          <ProjectImages img={images[projectIndex.current]}></ProjectImages>
        </div>

        <div className="ProjectLink-Container"></div>
      </div>
    </>
  );
}

export default Projects;
