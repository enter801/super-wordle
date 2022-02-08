import { createContext, useState, useContext } from "react";
import { indexOf, reduce, map, split } from 'ramda';

const letterEntry = ({letter = '', index = '', matchPosition = -1}) => {
  //LEFT OFF HERE - Adding match position offset.
  if(matchPosition >= 0) {

  }

  let model = {letter, index, matchPosition, matchOffset: };

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

