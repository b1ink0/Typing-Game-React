import React, { useState, useContext } from 'react'

const StateContext = React.createContext()

export const useStateContext = () => {
    return useContext(StateContext)
}

export const StateProvider = ( { children } ) => {
    const [ con_1, setCon_1 ] = useState(false)
    const [ con_2, setCon_2 ] = useState(false)
    const [ con_3, setCon_3 ] = useState(false)
    const [ text, setText ] = useState('')
    const [ time, setTime ] = useState(0)
    const [ cpm, setCpm] = useState('0')
    const [ wpm, setWpm] = useState('0')
    const value = {
        con_1, setCon_1,
        con_2, setCon_2,
        con_3, setCon_3,
        text, setText,
        time, setTime,
        cpm, setCpm,
        wpm, setWpm,
    }

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}