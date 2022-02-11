import { createContext, useState, useContext } from "react";
import { indexOf, reduce, map, split } from 'ramda';

const letterEntry = ({letter = '', index = '', matchPosition = -1}) => {
  
  let matchOffset = -1;

  //if there is a match
  if(matchPosition >= 0) {
    if(index === matchPosition) {
      matchOffset = 0;
    } else {
      matchOffset = 1;
    }
  }

  let model = {letter, index, matchPosition, matchOffset };

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
    //clear the guess
    setGuess([]);
  };

  const onGuessLetter = (letters) => {

    //regex check characters

    //if valid, parse into array

    //iterate over and update guess model with letterEntry model

    const newGuess = split('', letters);

    const guessModel = newGuess.reduce((prev, curr, idx) => {
      prev.push(letterEntry({
        letter: curr,
        index: idx,
        matchPosition: indexOf(curr, answer)
      }));

      return prev;
    }, []);

    setGuess(guessModel);
  };

  return (
    <GameContext.Provider value={{ guess, guesses, addGuess, onGuessLetter }}>
      {children}
    </GameContext.Provider>
  );
}

