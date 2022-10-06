import playerData from '../data/playerData';
import matchData from '../data/matchData';
import Player from "./Player";

export default function PlayerList() {
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  );
}
