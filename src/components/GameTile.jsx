import { styled } from '@mui/material/styles';
import { Paper, CardContent, Typography, getRadioUtilityClass } from '@mui/material';
import TileItem from "./TileItem";

const GameTile = ({guessData}) => {
  const {letter, index, matchPosition, matchOffset } = guessData;
  const match = matchOffset >= 0;

  return (
    <>
      <TileItem letter={letter}></TileItem>
    </>
  )
}

export default GameTile;