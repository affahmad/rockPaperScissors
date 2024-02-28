import React, { useState } from "react";
import "./RockPaperScissorsGame.css";
const RockPaperScissorsGame = () => {
  const [message, setMessage] = useState("Play Game!");
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const handldeClick = (userChoice) => {
    const compChoice = getcompChoice();
    game(userChoice, compChoice);
    console.log(userChoice, compChoice);
  };
  const game = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
      gameDraw();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true;
      } else {
        userWin = compChoice === "rock" ? false : true;
      }
      //   if (compChoice === "paper" && userChoice === "rock") {
      //     userWin = false;
      //   } else if (compChoice === "paper" && compChoice === "scissors") {
      //     userWin = false;
      //   } else if (compChoice === "scissors") {
      //     userWin = true;
      //   }

      showMessage(userWin, userChoice, compChoice);
    }
  };
  const showMessage = (userWin, userChoice, compChoice) => {
    if (userWin) {
      setMessage(`User's ${userChoice} Beat Computer's ${compChoice}`);
      setUserScore((userScore) => userScore + 1);
    } else {
      setMessage(`Computer's ${compChoice} Beat User's ${userChoice}`);
      setCompScore((compScore) => compScore + 1);
    }
  };
  const gameDraw = () => {
    setMessage("Game Was Draw!");
  };
  const getcompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let ranInd = Math.floor(Math.random() * 3);
    console.log(ranInd);
    return options[ranInd];
  };
  return (
    <div className="container">
      <h1>ROCK PAPER SCISSORS</h1>
      <div className="boxs">
        <div
          id="rock"
          className="box"
          onClick={() => {
            handldeClick("rock");
          }}
        >
          Rock
        </div>
        <div
          id="paper"
          className="box"
          onClick={() => {
            handldeClick("paper");
          }}
        >
          Paper
        </div>
        <div
          id="scissors"
          className="box"
          onClick={() => {
            handldeClick("scissors");
          }}
        >
          Scissors
        </div>
      </div>
      <div className="scores">
        <div className="userScore score">Player {userScore}</div>
        <div className="computerScore score">Computer {compScore}</div>
      </div>
      <div className="message">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default RockPaperScissorsGame;
