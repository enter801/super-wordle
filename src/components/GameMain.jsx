import { useState } from "react";
import GameControls from "./GameControls";
import GameBoard from "./GameBoard";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GameMain(props) {

const [
    wordLength,
    setWordLength
  ] = useState(4);

const [
    numTries,
    setNumTries
] = useState(6);

    return (
    <>
      <Stack spacing={2}>
        <Item>Game Options</Item>
        <Item>
          <GameControls state={{wordLengthData: [wordLength, setWordLength], numTriesData: [numTries, setNumTries]}}/>
        </Item>
        <Item>
          <GameBoard wordLength={wordLength} numTries={numTries}/>
        </Item>
      </Stack>
    </>
    )
}