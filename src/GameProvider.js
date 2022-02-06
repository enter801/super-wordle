import { createContext, useState, useContext } from "react";
import { indexOf, reduce, split } from 'ramda';

const letterEntry = ({letter = '', index = '', matchPosition = -1}) => {
  let model = {index, index, matchPosition};

  return model;
}

const GameContext = createContext();
export const useGameContext = () => useContext(GameContext);

export default function GameProvider({ children }) {
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState([]);
  const [answer, setAnswer] = useState('hello');

  const addGuess = (guess) => {
    setGuesses([...guesses, guess]);
  };

  const onGuessLetter = (letters) => {
    console.log(letters);

    //iterate over the current guess and compare to the guess word
    const currentGuess = split('', letters).reduce((prev, curr, currIdx) => {
      let letterModel = letterEntry(curr, currIdx, indexOf(curr, answer));
      console.log(`letter ${curr} index ${currIdx}`);
      console.log(letterModel);

      return letterModel;
    }, []);

    setGuess(currentGuess);
  };

  return (
    <GameContext.Provider value={{ guess, guesses, addGuess, onGuessLetter }}>
      {children}
    </GameContext.Provider>
  );
}

