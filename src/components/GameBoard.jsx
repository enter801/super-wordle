import { Stack } from "@mui/material";


import { useEffect, useState } from "react";
import { useGameContext } from "../GameProvider";
import GameRow from "./GameRow";
import GameTile from "./GameTile";

const GameBoard = ({wordLength, numTries}) => {
  const {guess, guesses} = useGameContext();
  const [emptyRows, setEmptyRows] = useState([]);
  
  useEffect(()=>{
    setEmptyRows(renderEmptyTiles(numTries, wordLength));
  }, [guesses]);

  const getEmptyRow = (length) => {
    let emptyTiles;
    for( let i = 0; i < length; i++ ) {
      emptyTiles += (<div>e</div>);
    }
    return emptyTiles;
  }

  const renderEmptyTiles = (numTries, wordLength) => {
    let emptyRow;
    for(let i = 0; i < numTries; i++) {
      emptyRow += getEmptyRow(wordLength);
    }

    return (<>emptyRow</>);
  }

  return (
    <>
      <div>
        GameBoard - {wordLength} - tries - {numTries}
      </div>      
      <Stack direction="column" spacing={2}>{
        guesses.map((row, idx) => {
          return (
            <GameRow key={idx} submittedGuess={row}></GameRow>
          );
          }
        )
      }
      </Stack>
      <Stack direction="row" spacing={2}>             
        {guess.map((val) => {
          return (                    
            <GameTile key={val.index} guessData={val}></GameTile>
          )
          })
        }
      </Stack>
      <Stack id="emptyTiles" direction="column" spacing={2}>
        empties
        {emptyRows}
      </Stack>
    </>
  );
}

export default GameBoard;