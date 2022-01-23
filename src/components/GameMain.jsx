import { useState } from "react";
import GameConfig from "./GameControls";
import GameBoard from "./GameBoard";

export default function GameMain(props) {

const [
    wordLength,
    setWordLength
  ] = useState(23);

const [
    numTries,
    setNumTries
] = useState(32);

    return (
    <>
    <Row>
    <GameConfig state={
        {wordLengthData: [wordLength, setWordLength], numTriesData: [numTries, setNumTries]}
    }/>
  </Row>
  <Row>
    <Col >
      <GameBoard wordLength={wordLength} numTries={numTries}/>
    </Col>
  </Row>
  <Row>
    <Col>
    Footer
    </Col>
  </Row>
    </>
    )
}