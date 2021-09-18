import React from "react";
import { ImageComp } from "./ImageComp";
import Nav from "./Nav";

function HomePage() {
  return (
    <>
      <div className="Home--pageWrapper">
        <Nav />
        <main className="main--section">
          <div className="hero--text">
            <h1>The Grill Expert</h1>
            <p>Mood to have Grill chicken or Tandoori? </p>
          </div>
        </main>
        <ImageComp />
      </div>
    </>
  );
}

export default HomePage;
