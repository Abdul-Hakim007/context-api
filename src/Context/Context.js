import React, { useState } from 'react';
import { createContext } from "react";

export const contextApi = createContext();

const Context = ({children}) => {

    const [counter,setCounter] = useState(0);

    const increment = ()=>{
        setCounter(counter + 1);
    };
    const decrement = ()=>{
        setCounter(Math.max(0,counter - 1));
    }
    return (
        <contextApi.Provider value={{counter, increment, decrement}}>
            {children}
        </contextApi.Provider>
    );
};

export default Context;