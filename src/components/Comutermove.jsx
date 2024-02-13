import React, { useEffect } from "react";

const Computermove = ({
  squares,
  setSquares,
  setXIsNext,
  setTurn,
  defineWinner,
  winner,
  setWinner,
  countX,
  setCountX,
  countO,
  setCountO,
  ties,
  setTies,
  against,
  setAgainst,
}) => {
  useEffect(() => {
    if (against === "cpu") {
      makeRandomMove();
    }
  }, [squares, against]);

  const makeRandomMove = () => {
    if (winner || squares.every((square) => square !== null)) {
      return;
    }

    const emptySquares = squares
      .map((square, index) => (square === null ? index : null))
      .filter((index) => index !== null);

    const randomIndex =
      emptySquares[Math.floor(Math.random() * emptySquares.length)];

    const nextSquares = squares.slice();
    nextSquares[randomIndex] = "O";

    setSquares(nextSquares);
    setXIsNext(true);
    setTurn(<img className="w-[16px] h-[16px]" src={smallX} alt="x" />);

    const winnerFound = defineWinner(nextSquares);
    if (winnerFound === "O") {
      setCountO(countO + 1);
    } else if (!winnerFound && nextSquares.every((square) => square !== null)) {
      setTies(ties + 1);
    }
  };

  return null; // This component doesn't render anything visible
};

export default Computermove;
