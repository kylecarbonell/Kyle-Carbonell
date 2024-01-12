import { useEffect, useRef, useState } from "react";
import "./ProjectImages.css";

interface Images {
  img: string[];
}

function ProjectImages(props: Images) {
  const index = useRef<number>(0);
  const [imgName, setImageName] = useState("");

  useEffect(() => {
    const slideShow = setInterval(() => {
      if (index.current == props.img.length - 1) {
        index.current = 0;
      } else {
        index.current += 1;
      }

      console.log(props.img[index.current]);
      console.log(index.current);

      setImageName(props.img[index.current]);
    }, 3000);

    return () => {
      clearInterval(slideShow);
    };
  }, []);

  return (
    <>
      <div className="Project-Image-Container">
        <span
          className="Project-Image"
          style={{
            backgroundImage: `url('src/assets/Projects/${imgName}.png')`,
          }}
        ></span>
      </div>
    </>
  );
}

export default ProjectImages;
