import { createContext, useState, useContext } from "react";

const letterEntry = ({letter = '', index = '', matchPosition = -1}) => {
  let model = {index, index, matchPosition};

  return model;
}

const GameContext = createContext();
export const useGameContext = () => useContext(GameContext);

export default function GameProvider({ children }) {
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState('');

  const addGuess = (guess) => {
    setGuesses([...guesses, guess]);
  };

  const onGuessLetter = (letters) => {
    console.log(letters);

    const currentGuess = letters.reduce((prev, curr, curRIdx, arr) => {
      let letterModel = letterEntry(curr, currIdx, )
    }, []);
    setGuess(letters);
  };

  return (
    <GameContext.Provider value={{ guess, guesses, addGuess, onGuessLetter }}>
      {children}
    </GameContext.Provider>
  );
}

