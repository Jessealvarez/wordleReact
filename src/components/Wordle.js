import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWorlde";

import Keypad from "./Keypad";
import Grid from "./Grid";
import Modal from "./Modal";

export default function Wordle({ solution }) {
  const { currentGuess, guesses, isCorrect, turn, usedKeys, handleKeyup } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div>
      <Modal isCorrect={isCorrect} solution={solution} />
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad  usedKeys={usedKeys} handleKeyup={handleKeyup} />
    </div>
  );
}
