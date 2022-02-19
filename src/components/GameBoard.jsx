import { Stack } from "@mui/material";


import { useEffect, useState } from "react";
import { useGameContext } from "../GameProvider";
import GameRow from "./GameRow";
import GameTile from "./GameTile";
import TileItem from "./TileItem";

const GameBoard = ({wordLength, numTries}) => {
  const {guess, guesses} = useGameContext();
  const [guessRow, setGuessRow] = useState();
  const [emptyRows, setEmptyRows] = useState([]);

  useEffect(()=>{
    setGuessRow(renderGuessRow(guess));
  }, [guess]);
  
  

  useEffect(()=>{
    const includeGuess = guess.length > 0 ? 1: 0;
    setEmptyRows(renderEmptyTiles(numTries, wordLength, includeGuess, guesses.length));
  }, [guesses, guess, wordLength, numTries]);

  const getEmptyRow = (length) => {
    let emptyTiles = [];
    for( let i = 0; i < length; i++ ) {
      emptyTiles = [ <TileItem letter={" "}></TileItem>, ...emptyTiles];
    }

    return (<Stack direction="row" spacing={2}>{emptyTiles}</Stack>);
  }

  const renderEmptyTiles = (numTries, wordLength, includeGuess, guessesMade) => {
    let emptyRows = [];
    const emptyRowsSize = numTries - includeGuess - guessesMade;

    for(let i = 0; i < emptyRowsSize; i++) {
      emptyRows = [ getEmptyRow(wordLength), ...emptyRows ];
    }

    return emptyRows;
  }

  const renderGuessRow = (guess) => {
    if(guess.length > 0) {
      return (<Stack sx={{minHeight: "0"}} direction="row" spacing={2}>             
        {guess.map((val) => {
          return (                    
            <GameTile key={val.index} guessData={val}></GameTile>
          )
          })
        }
      </Stack>);
    }
  };

  return (
    <>
      <div>
        GameBoard - {wordLength} - tries - {numTries}
      </div>
      <Stack direction="column" spacing={2}>
        <Stack direction="column" spacing={2}>{
          guesses.map((row, idx) => {
            return (
              <GameRow key={idx} submittedGuess={row}></GameRow>
            );
            }
          )
        }
        </Stack>
        {guessRow}
        <Stack id="emptyTiles" direction="column" spacing={2}>
          {emptyRows}
        </Stack>
      </Stack>      
    </>
  );
}

export default GameBoard;