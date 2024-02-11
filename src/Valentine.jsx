import React, { useEffect, useState } from "react";
import firstImage from "./assets/first.gif";
import secondImage from "./assets/second.gif";
import { motion } from "framer-motion";
const Valentine = () => {
  const [yes, setYes] = useState(false);
  const [position, setPosition] = useState({ x:0, y: 0 });

  useEffect(()=>{
    console.log(window.innerHeight);
    // console.log(window.innerWidth);
   console.log( Math.random()* window.innerHeight)
  },[])


  const no = () => {
    const buttonWidth = 150; // Adjust according to your button's width
    const buttonHeight = 50; // Adjust according to your button's height
    const maxPosX = window.innerWidth - buttonWidth;
    const maxPosY = window.innerHeight - buttonHeight;

    const randomX = Math.random() * maxPosX;
    const randomY = Math.random() * maxPosY;

    setPosition({ x: randomX, y: randomY});
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
            <motion.button
             style={{top: position.y<= 0 ? "" :position.y , right: position.x<= 0 ? "" :position.x}}
              className="No"
              onClick={no}
            >
              No
            </motion.button>
          </div>
        )}
      </div>
    </>
  );
};

export default Valentine;
