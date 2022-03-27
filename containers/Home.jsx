import React from "react";
import { Carousel } from "../components";
import Contact from "../components/Contact";
import About from "./About";
import Posts from "./Posts";
import Protfolio from "./Protfolio";
import sss from "./sky.jpg";

const Home = ({ color, bgColor }) => {
  return (
    <>
      <div
        style={{
          color: color,
          backgroundImage: `url(${sss})`,
          width: "100%",
          height: "90vh",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          textAlign: "left",
          fontSize: "1.5rem",
          fontWeight: "bold",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1
          style={{
            width: "fit - content",
            margin: "50px",
            fontSize: "3.5rem",
            fontWeight: 900,
            fontFamily: "Roboto, Georgia, 'Times New Roman', Times, serif",
            letterSpacing: "2px",
            wordSpacing: "5px",
            color: "#ff953e",
          }}
        >
          Center of <br />
          Scientific and <br />
          Computational <br />
          technology
        </h1>
        {/* <Carousel color={color} bgColor={bgColor} /> */}
      </div>
      <About color={color} bgColor={bgColor} />
      <Protfolio color={color} bgColor={bgColor} />
      <Posts color={color} bgColor={bgColor} />
      <Contact color={color} bgColor={bgColor} />
    </>
  );
};

export default Home;
