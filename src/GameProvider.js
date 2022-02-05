import { createContext, useState, useContext } from "react";

const GameContext = createContext();
export const useGameContext = () => useContext(GameContext);

export default function GameProvider({ children }) {
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState([]);

  const addGuess = (guess) => {
    setGuesses([...guesses, guess]);
  };

  const onGuessLetter = (letter) => {
    setGuess([...guess, letter]);
  };

  return (
    <GameContext.Provider value={{ guess, guesses, addGuess, onGuessLetter }}>
      {children}
    </GameContext.Provider>
  );
}
