import { useGameContext } from "../GameProvider";

const letterEntry = ({letter = '', index = '', matchPosition = -1}) => {
  let model = {index, index, matchPosition};

  return model;
}

const GameKeyboard = ({wordLength}) => {
  const {guess, addGuess, onGuessLetter} = useGameContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    addGuess(guess);
  };

  const handleChange = (e) => {
    console.log(e.currentTarget.value);
    const toParse = e.currentTarget.value

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
          value={guess}
          onInput={handleChange}
          name="text"
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default GameKeyboard;
