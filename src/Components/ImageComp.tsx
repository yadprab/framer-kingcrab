import React from "react";
import Img1 from "../images/topimage.png";
import Img2 from "../images/bottomimage.png";
function ImageComp() {
  return (
    <>
      <img src={Img1} alt="Grill in a plate" id="top" />
      <img src={Img2} alt="Grill in a plate" id="bottom" />
    </>
  );
}

export { ImageComp };
