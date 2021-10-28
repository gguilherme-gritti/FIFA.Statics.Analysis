import React, { createContext, useState } from "react";

const FifaContext = createContext();

const FifaContextProvider = ({children}) => {
    const [fifa,setFifa] = useState("");

    return (
        <FifaContext.Provider
            value={{
                fifa,
                setFifa
            }}
        >
            {children}
        </FifaContext.Provider>
    );
};

export {FifaContextProvider, FifaContext};