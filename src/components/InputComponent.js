import React, { useEffect } from "react";
import { useStateContext } from "../context/StateContext";

export default function InputComponent() {
  const {
    con_1,
    setCon_1,
    con_2,
    setCon_2,
    setCpm,
    setWpm,
    text,
    setText,
    cpm,
    wpm,
    time,
    setTime,
  } = useStateContext();

  let tempTime = 0;
  const handleInput = (e) => {
    setText(prevText => e.target.value);
    setCon_2((prevCon_1=> !prevCon_1));
  };

  useEffect(()=>{
    console.log(con_1)
    if (!con_1) {
      if (con_2) {
        handleInputSpeed()
      }
    }
  },[text])

  const handleInputSpeed = () => {
    if (tempTime < 60) {
      let inputInterval = setInterval(() => {
        tempTime = tempTime + 1;
        setTime((prevTime) => prevTime + 1);
        if (tempTime === 60) {
          clearInterval(inputInterval);
        }
      }, 1000);
      setCon_1(true)
    }
  };

  useEffect(() => {
    console.log(time);
    setCpm(prevCpm => Math.round((text.length/time)*60))
    setWpm(prevWpm => Math.round(((text.length/5)/time)*60))
  }, [time]);

  useEffect(() => {
    console.log('cpm:',cpm, 'wpm:',wpm)
    console.log(cpm)
  },[cpm])

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => handleInput(e)}
      />
      <h4>
        CPM: {cpm || 0} 
        <br/>
        WPM: {wpm || 0}
      </h4>
    </div>
  );
}
