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

  const onGuessLetter = (letter) => {
 
    if(Symbol(letter).valueOf() == true) {
      console.log('added letter');

      let currentGuess = [...guess, letterEntry({letter,
         index: guess.length, 
         matchPosition: indexOf(letter, answer)})];

    }

    setGuess(currentGuess);
  };

  return (
    <GameContext.Provider value={{ guess, guesses, addGuess, onGuessLetter }}>
      {children}
    </GameContext.Provider>
  );
}

