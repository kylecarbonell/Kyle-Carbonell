import { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import ProjectImages from "./ProjectImages";

import "./ProjectImages.css";

function Projects() {
  const projects = ["Jerky Republic", "Library", "2D - Game"];
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
    [
      "LibraryLogin",
      "LibraryCreateAccount",
      "LibraryBooks",
      "LibraryYourBooks",
      "LibraryWishList",
      "LibraryPublishBook",
    ],
    ["GameMain", "GameBattleMenu", "GameBattleStart"],
  ];

  //Defines what project we are looking at
  const projectIndex = useRef<number>(0);
  const imageIndex = useRef<number>(0);
  const [name, setName] = useState(projects[projectIndex.current]);
  const [imageList, setImageList] = useState<string[]>([]);

  const [imageName, setImageName] = useState<string>("");

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
    setImageList(images[projectIndex.current]);
    setImageName(images[projectIndex.current][0]);

    console.log(imageList);
  }

  useEffect(() => {
    imageIndex.current = 0;
  }, [projectIndex]);

  useEffect(() => {
    imageIndex.current = 0;
    const slideShow = setInterval(() => {
      if (imageIndex.current == images[projectIndex.current].length - 1) {
        imageIndex.current = 0;
      } else {
        imageIndex.current += 1;
      }

      // console.log("PROJ" + projectIndex.current);
      // console.log("IMG" + imageIndex.current);
      // console.log(imageName);
      setImageName(images[projectIndex.current][imageIndex.current]);
    }, 3000);

    return () => {
      clearInterval(slideShow);
    };
  }, []);

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
              console.log(name);
            }}
          >
            <FaLongArrowAltRight id="Arrow" />
          </button>
        </div>
        <div className="Projects-Images">
          <div className="Project-Image-Container">
            <span
              className="Project-Image"
              style={{
                backgroundImage: `url('src/assets/Projects/${imageName}.png')`,
              }}
            ></span>
          </div>

          <div></div>
        </div>

        <div className="ProjectLink-Container"></div>
      </div>
    </>
  );
}

export default Projects;
