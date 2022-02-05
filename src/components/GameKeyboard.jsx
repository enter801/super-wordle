import { useState } from "react";

const GameKeyboard = ({ guesses, guess, submitGuess, onKeypress }) => {
  const handleSubmit = (e) => {
    submitGuess(guess);
  };

  const handleChange = (e) => {
    onKeypress(e.currentTarget.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Update your item"
          value={guess}
          onChange={handleC}
          name="text"
          ref={inputRef}
          className="todo-input edit"
        />
        <button onClick={handleSubmit} />
      </form>
    </>
  );
};

export default GameKeyboard;
