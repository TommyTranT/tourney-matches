import Match from "./Match";

export default function MatchList(props) {

  // { EXAMPLE OF THE DATA FROM ARRAY 
  //   matchNumber: 1,
  //    players: ["Disguised Lizard", "DrSpiteful"],
  //    winner: "DrSpiteful",
  //    scoreDifference: 1
  // }

// Map loops through all the data to get the keys
// Keys are turned into props to be properly renderd from Match.jsx
// Match list takes the data and rendering format and displays as one component

  // 1.map the array of data
  // 2.prop = each datas key.
  // Players=(match.players)
  // 3."Match" will render each match from the props name. 
  // players name will appear because in "Match.jsx" -> {props.players}
  const matches = props.matchData.map((match) => {
    return (
      <Match 
        key={match.matchNumber} // Added on to prevent error message about key prop
        players={match.players} // This is the players values for each match in matches
        winner={match.winner}
        scoreDifference={match.scoreDifference}
      />
    )
  })

  return(
    <section className="PlayerList MatchList">
      <h1>Match List</h1>
      {matches}
    </section>
  );
};