/* React */
import React, { useEffect, useState, useContext, useCallback } from "react";

/* Context */
import { FifaContext } from "../contexts/FifaContext";

export default function useHomeController() {

    const {
        fifa,
        setFifa
    } = useContext(FifaContext);

    const handleFunction = () => {
        console.log("Home!");
    }

    return {
        handleFunction
    };

}