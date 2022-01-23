import {  useState } from "react";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

export default function GameConfig(props) {

    const { wordLengthData: [wordLength, setWordLength] } = {
        wordLengthData: useState(5), ...(props.state || {}),
    };

    const { numTriesData: [numTries, setNumTries] } = {
        numTriesData: useState(6), ...(props.state || {}),
    };
    
    const wordLen = (e) => {
        console.log('triggered')
      setWordLength(e.target.value);
    }

    const numTry = (e) => {
        console.log('triggered two')
        setNumTries(e.target.value);
    }

    return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="wordLengthInputLabel">Word Length</InputLabel>
        <Select
        labelId="wordLengthInputLabel"
        id="wordLengthInput"
        label="Word Length"
        value={wordLength}
        onChange={wordLen}
        >
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="numTryInputLabel">Guesses</InputLabel>
        <Select
        labelId="numTryInputLabel"
        id="numTryInput"
        label="Guesses"
        value={numTries}
        onChange={numTry}
        >
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
        </Select>
      </FormControl>
    </>
    )
}