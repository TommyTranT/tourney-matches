import Player from "./Player";

export default function PlayerList(props) {

  const players = props.playerData.map(player => {
    return (
      <Player 
        key={player.gamerTag}
        gamerTag={player.gamerTag}
        firstName={player.firstName} 
        lastName={player.lastName} 
        wins={player.wins}
      />
    )
  });

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {players}
    </section>
  );
}



//   // Originally an object. Converted to an Array.
//   // onePlayer = {
//   //   "Disguised Lizard": {
//   //     gamerTag: "Disguised Lizard",
//   //     firstName: "Daria ",
//   //     lastName: "Stark",
//   //     wins: 0 ===> Added from function
//   //   },