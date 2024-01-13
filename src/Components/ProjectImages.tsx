import { useEffect, useRef, useState } from "react";
import "./ProjectImages.css";

interface Images {
  projectIndex: number;
  // show: boolean;
  projectName: string;
}

function ProjectImages(props: Images) {
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
    ["NA"],
  ];

  const index = useRef<number>(0);
  const [imgName, setImageName] = useState(props.projectName);

  return <></>;
}

export default ProjectImages;
