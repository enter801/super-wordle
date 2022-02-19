import { Stack } from "@mui/material";
import GameTile from "./GameTile";

const GameRow = ({submittedGuess}) => {
 
    return(
      <>
        <Stack direction="row" spacing={2}>             
          {
            submittedGuess.map((val) => {
              return ( 
                <GameTile key={val.index} guessData={val}></GameTile>                   
              );
              })
          }              
        </Stack>
      </>
    )
}

export default GameRow;