import {  useState } from "react";

export default function GameConfig(props) {

    const { wordLengthData: [wordLength, setWordLength] } = {
        wordLengthData: useState(3), ...(props.state || {}),
    };

    const { numTriesData: [numTries, setNumTries] } = {
        numTriesData: useState(3), ...(props.state || {}),
    };
    
    const wordLen = (e) => {
        console.log('triggered')
      setWordLength(e.currentTarget.value);
    }

    const numTry = (e) => {
        console.log('triggered two')
        setNumTries(e.currentTarget.value);
    }

    return (
    <>

                    <input type="" id="wordLengthSelect" onChange={wordLen}>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </Form.Select>
                    <Form.Label>Word Length = {wordLength}</Form.Label>
                    <Form.Select id="numTrySelect" onChange={numTry}>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </Form.Select>
                    <Form.Label>Guesses = {numTries}</Form.Label>
   
    </>)
}