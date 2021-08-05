import React, { useEffect } from "react";
import { useStateContext } from "../context/StateContext";
import song_1 from './media/2.mp3'

export default function InputComponent() {
  const {
    con_1,
    setCon_1,
    con_2,
    setCon_2,
    con_4,
    setCon_4,
    con_5,
    setCon_5,
    temp,
    setTemp,
    temp_1,
    setTemp_1,
    temp_2,
    setTemp_2,
    setCpm,
    setWpm,
    text,
    setText,
    cpm,
    wpm,
    time,
    setTime,
  } = useStateContext();
  let con_6 = false
  con_6 = true
  const song = new Audio(song_1)
  // if (con_6){
  //   song.pause()
  // }else if (!con_6){
  //   song.play()
  // }
  // const song = document.getElementById('music')
  let tempTime = 0;
  let tempTemp = 0;
  document.addEventListener('DOMContentLoaded',()=>{})
  const handleInput = (e) => {
    setText(prevText => e.target.value);
    setCon_2((prevCon_1=> !prevCon_1));
  };

  useEffect(()=>{
    // console.log(con_1)
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

  useEffect(()=>{
      if (text.length > 0){
          if (!con_4){
              setCon_4(true)
              setIntervalAutoPause()
              console.log(song)
          }
      }
  },[text])

  useEffect(()=>{
    console.log('temp:',temp)
    setTemp_1(text.length)
  },[temp])
 
  useEffect(async()=>{
        console.log('con:',temp_1,'===',text.length)
        console.log(document.getElementById('music').paused)
    if (temp_1 === text.length){
      if(!document.getElementById('music').paused){
        await document.getElementById('music').pause()
      }
      console.log('pause')
    } else {
      if(document.getElementById('music').paused){
       await document.getElementById('music').play()
      }
      console.log('play')
    }
  },[temp_2])

  const handleAutoPause = () => {
      setTimeout(()=>{
        setTemp_2(prevSetTemp_2 => prevSetTemp_2 + 1)
      },500)    
      setTimeout(()=>{
        setTemp(prevTemp => prevTemp + 1  )
        // console.log('temptemp',tempTemp)
      },1000)
  }

  const setIntervalAutoPause = () =>{
      if (!con_5){
          console.log('con5')
          setInterval(handleAutoPause, 1000)
          setCon_5(true)
      }
  }
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
      <div id='musicCon'>
      <audio id='music' controls src={song_1}/>
      </div>
      <button onClick={()=>song.pause()}>pause</button>
      <button onClick={()=>song.play()}>play</button>
    </div>
  );
}
