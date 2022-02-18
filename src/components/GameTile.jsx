import { styled } from '@mui/material/styles';
import { Paper, CardContent, Typography } from '@mui/material';

const GameTile = ({guessData}) => {
  const {letter, index, matchPosition, matchOffset } = guessData;

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

  return (
    <>
      <Item>
        {letter}{index}{matchPosition}
        <div>{matchOffset === 0 ? 'xmatch' : matchOffset > 0 ? 'match' : 'nomatch'}</div>
      </Item>
    </>
  )
}

export default GameTile;