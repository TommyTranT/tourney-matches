import React from "react"; //optional

export default function Match(props) {
  return (
    <article className="Match">
      <h1>
        {props.players[0]} <span>vs</span> {props.players[1]}
      </h1>
      {/* If props.winner exist, render -> */}
      {props.winner && <h2>{props.winner} is the winner by {props.scoreDifference}!</h2>}

      {/* If props.winner is faulty (non-exist), render -> */}
      {!props.winner && <h2>No winners yet!</h2>}
    </article>
  );
}

// const oneMatch = matchData[0];
// oneMatch = {
//   matchNumber: 1,
//   players: ["Disguised Lizard", "DrSpiteful"],
//   winner: "DrSpiteful",
//   scoreDifference: 1
// }

/* <Match players={oneMatch.players} winner={oneMatch.winner} scoreDifference={oneMatch.scoreDifference}/> */