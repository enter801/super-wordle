import { CardContent, Typography } from "@mui/material";
import WordCard from "./WordCard";

export default function GameBoard(props) {
  const { wordLength, numTries } = props;
  let guesses = [];

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

  const renderBoard = (width, height, guesses) => {
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

  const initialBoardSetup = renderBoard(wordLength, numTries, guesses);

  return (
    <>
      <div>
        GameBoard - {props.wordLength} - tries - {props.numTries}
      </div>
      <div id="gameBoard">{initialBoardSetup()}</div>
    </>
  );
}
