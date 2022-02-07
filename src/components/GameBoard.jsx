import { CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useGameContext } from "../GameProvider";
import WordCard from "./WordCard";

const GameBoard = (props) => {
  const { wordLength, numTries } = props;
  const {guess, guesses} = useGameContext();
  
  useEffect(()=>{
    console.log('use effect called');
  }, [guesses, guess]);

  const renderLetter = (letter) => {
    return (
      <>
        <CardContent>
          <Typography sx={{ fontSize: 28, color }} color="text.secondary">
            {letter}
          </Typography>
        </CardContent>
      </>
    );
  };

  const renderLine = (guess = "", length = wordLength) => {
    //iterate from word length
    for (let i = 0; i < length; i++) {
      //obtain guess letter from index
      const letter = guess[i];

      //
    }

    //compare positioning

    //render tile

    return;
  };

  const renderCompletedLine = (guess, word, length) => {};

  const renderBoard = (width, height, guesses, guess) => {
    //empty/new game
    if (guesses.length == 0) {
      //render blank lines
      let tiles = guesses.reduce((prev, curr) => {});

      for (let i = 0; i < numTries; i++) {
        renderLine();
      }

      let i = "hello";
    } else {
    }

    for (let i = 0; i < width; i++) {}
  };

  return (
    <>
      <div>
        GameBoard - {props.wordLength} - tries - {props.numTries}
      </div>
      <div id="gameBoard">{
        guesses.map((val, idx) => {
          return (<div>{val}</div>);
        })}
      </div>
      <div id="guessTest">{guess.map((val)=>{return <div key={val.index}>{val.letter}</div>})}</div>;
    </>
  );
}

export default GameBoard;