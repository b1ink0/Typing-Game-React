import React, { useEffect } from 'react'
import { useStateContext } from '../context/StateContext'
import song_1 from './media/2.mp3'

export default function AudioComponent() {
    // const {text, con_4, setCon_4, con_5, setCon_5} = useStateContext()
    // let song = new Audio(song_1)
    // let temp = 0
    // let myinterval;
    // useEffect(()=>{
    //     if (text.length > 0){
    //         if (!con_4){
    //             setCon_4(true)
    //             setIntervalAutoPause()
    //             song.play()
    //         }
    //         console.log(song)
    //     }
    // },[text])
    // const handleAutoPause = () => {
    //     if ( temp === text.length ){
    //         song.pause()
    //     } else {
    //         song.play()
    //     }
    //     setTimeout(()=>{
    //         temp = text.length
    //     },1500)
    // }
    // const setIntervalAutoPause = () =>{
    //     if (!con_5){
    //         myinterval = setInterval(handleAutoPause, 1000)
    //         setCon_5(true)
    //     }
    // }
    return (
        <></>
    )
}
