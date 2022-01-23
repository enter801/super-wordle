import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import GameMain from './components/GameMain';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
      <h1 className="text-3xl font-bold underline">Super Wordle</h1>
        <GameMain />        
      </Box>
    </Container>
  );
}
