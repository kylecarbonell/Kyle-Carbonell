import {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import "./App.css";
import Bar from "./Components/Bar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {
  const homeRef = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;
  const aboutRef = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;
  const projectsRef = useRef(
    null
  ) as unknown as MutableRefObject<HTMLDivElement>;
  const contactRef = useRef(
    null
  ) as unknown as MutableRefObject<HTMLDivElement>;

  function goTo(name: RefObject<HTMLElement>) {
    name.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  useEffect(() => {
    document.querySelector(".Bar-Structure")?.classList.add("showBeginner");
    let prevScroll = window.scrollY;

    window.addEventListener(
      "scroll",
      () => {
        const currentPos = window.scrollY;

        if (currentPos < prevScroll) {
          document.querySelector(".Bar-Structure")?.classList.remove("remove");
          document.querySelector(".Bar-Structure")?.classList.add("show");
        } else {
          document.querySelector(".Bar-Structure")?.classList.remove("show");
          document.querySelector(".Bar-Structure")?.classList.add("remove");
        }

        prevScroll = currentPos;
      },
      { passive: true }
    );
  }, []);

  return (
    <>
      <div className="App-Structure">
        <div className="Bar-Structure">
          <Bar
            about={() => {
              goTo(aboutRef);
            }}
            projects={() => {
              goTo(projectsRef);
            }}
            contact={() => {
              goTo(contactRef);
            }}
          ></Bar>
        </div>

        <div className="Content-Structure">
          <div className="Home-Structure" ref={homeRef}>
            <Home />
          </div>
          <div className="About-Structure" ref={aboutRef}>
            <About />
          </div>
          <div className="Projects-Structure" ref={projectsRef}>
            <Projects></Projects>
          </div>
          {/* <div className='Home-Structure' ref={contactRef}><Home></Home></div> */}
        </div>
      </div>
    </>
  );
}

export default App;
