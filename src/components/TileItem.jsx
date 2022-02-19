import { Paper, Box } from "@mui/material";
import { styled } from '@mui/material/styles';

const TileItem = ({letter}) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    fontSize: 28,
    color: theme.palette.text.secondary,
  }));

  return (<Box sx={{
    border: '2px solid gray',
    height: '60px',
    minWidth: '60px',
  }}>{letter}</Box>);
}

export default TileItem;