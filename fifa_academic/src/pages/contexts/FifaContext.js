import { SignalCellularNullOutlined } from "@material-ui/icons";
import React, { createContext, useState } from "react";

const FifaContext = createContext();

const FifaContextProvider = ({ children }) => {
  const [fifa, setFifa] = useState("");
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);
  const [images, setImages] = useState({});

  return (
    <FifaContext.Provider
      value={{
        fifa,
        setFifa,
        loading,
        setLoading,
        players,
        setPlayers,
        images,
        setImages,
      }}
    >
      {children}
    </FifaContext.Provider>
  );
};

export { FifaContextProvider, FifaContext };
