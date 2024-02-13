import React, { useEffect, useRef, useState } from "react";
import firstImage from "./assets/first.gif";
import secondImage from "./assets/second.gif";
import { motion } from "framer-motion";
const Valentine = () => {
  const [yes, setYes] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const [rectt, setyRectt] = useState()

  useEffect(() => {
    const rect = ref.current.getBoundingClientRect();         
    console.log(rect.x);
    setyRectt(rect.x)
    setPosition({ x: rect.x, y: rect.y });
    console.log(rect);
    console.log(window.innerHeight);
    // console.log(window.innerWidth);
    console.log(Math.random() * window.innerHeight);
  }, []);
  
  const getPos = () =>{
    
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: rect.x, y: rect.y });
  }

  const no = () => {
    const buttonWidth = 150; // Adjust according to your button's width
    const buttonHeight = 50; // Adjust according to your button's height
    const maxPosX = window.innerWidth - buttonWidth;
    const maxPosY = window.innerHeight - buttonHeight;

    const randomX = Math.random() * maxPosX;
    const randomY = Math.random() * maxPosY;

    setPosition({ x: randomX, y: randomY });
  };

  return (
    <>
      <div className="card">
        <img
          src={yes ? secondImage : firstImage}
          alt="will you be my valentine"
        />
        <h2>{yes ? "Ok yay!!!" : "Will you be my Valentine?"}</h2>

        {yes ? (
          ""
        ) : (
          <div className="buttons">
            <button className="yes" onClick={() => setYes(true)}>
              Yes
            </button>
            <button
              ref={ref}
              // style={{
              //   top: position.y <= 0 ? "" : position.y,
              //   right: position.x <= 0 ? "" : position.x,
              // }}
              className="No"
              onLoad={getPos}
            >
              No
            </button>
          </div>
        )}

        {yes ? (
          " "
        ) : (
          <button
            style={{ top: `${position.y }px`, left: `${position.x}px`, transition: `${rectt != position.x ? 'all 0.5s linear':"all 0s linear " }` }}
            onMouseEnter={no}
            // style={{ top: `${position.y}px`, right: `${position.x}px` }}
            className="Noo"
          >
            No
          </button>
        )}
      </div>
    </>
  );
};

export default Valentine;
