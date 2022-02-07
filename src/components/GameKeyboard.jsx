import { useGameContext } from "../GameProvider";
import { useState } from "react";

const letterEntry = ({letter = '', index = '', matchPosition = -1}) => {
  let model = {index, index, matchPosition};

  return model;
}

const GameKeyboard = ({wordLength}) => {
  const {guess, addGuess, onGuessLetter} = useGameContext();
  const [guessInput, setGuessInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addGuess(guess);
  };

  const handleChange = (e) => {
    const toParse = e.currentTarget.value;
    console.log(toParse);
    setGuessInput(toParse);
    onGuessLetter(toParse);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Update your item"
          pattern="[A-Za-z]+"
          minLength={wordLength}
          maxLength={wordLength}
          value={guessInput}
          onChange={handleChange}
          name="text"
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default GameKeyboard;
