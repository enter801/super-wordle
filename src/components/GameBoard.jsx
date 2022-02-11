import { Stack, CardContent, Paper, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import { styled } from '@mui/material/styles';
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

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: 28,
    color: theme.palette.text.secondary,
  }));

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
      <Stack direction="column" spacing={2}>{
        guesses.map((row, idx) => {
          return (
            <Stack key={idx} direction="row" spacing={2}>             
              {row.map((val) => {
                return (                    
                  <Item key={val.index}>
                    {val.letter}
                  </Item>)
                })
              }              
            </Stack>);
          }
        )
      }
      </Stack>
      <Stack direction="row" spacing={2}>             
        {guess.map((val) => {
          return (                    
            <Item key={val.index}>
              {val.letter}
            </Item>)
          })
        }              
      </Stack>
    </>
  );
}

export default GameBoard;