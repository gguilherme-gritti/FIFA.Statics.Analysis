/* React */
import React, { useEffect, useState, useContext, useCallback } from "react";

/* Context */
import { FifaContext } from "../contexts/FifaContext";

/* Repository */
import { find } from "../../repositories/fifa/PlayerRep";

export default function useHomeController() {
  const {
    fifa,
    setFifa,
    page,
    setPage,
    loading,
    setLoading,
    players,
    setPlayers,
  } = useContext(FifaContext);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const dataFifa = await find();

      if (dataFifa?.items.length) {
        setPlayers(dataFifa.items);
        setPage(dataFifa.page);
      }
      console.log(dataFifa);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return {
    handleSearch,
    getBase64,
  };
}
