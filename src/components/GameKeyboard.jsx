import { useGameContext } from "../GameProvider";



const GameKeyboard = ({wordLength}) => {
  const {guess, addGuess, onGuessLetter} = useGameContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    addGuess(guess);
  };

  const handleChange = (e) => {
    onGuessLetter(e.currentTarget.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Update your item"
          pattern="[A-Za-z]+"
          maxLength={wordLength}
          minLength={wordLength}
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
