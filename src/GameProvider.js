import { createContext, useState, useContext } from "react";
import { indexOf, reduce, map, split } from 'ramda';

const letterEntry = ({letter = '', index = '', matchPosition = -1}) => {
  let model = {letter, index, matchPosition};

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
 
    const guessModel = map(letter=>{
      //LEFT OFF - fix index, do position check from index vs. current index.  
      //maybe need to change this to a reduce to work better.
      return letterEntry({
        letter,
        index: newGuess.length,
        matchPosition: indexOf(letter, answer)
      });
    }, newGuess);

    setGuess(guessModel);
  };

  return (
    <GameContext.Provider value={{ guess, guesses, addGuess, onGuessLetter }}>
      {children}
    </GameContext.Provider>
  );
}

