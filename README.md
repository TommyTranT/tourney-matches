# Import Tree

App.js
├── PlayersList.jsx
│   ├── matchData.js
│   ├── playerData.js
│   └── Players.jsx
│
└── MatchList.jsx
    ├── matchData.js
    └── Match.jsx

# Refactoring using MAP
In players list, we will refactor the code from displaying and rendering one player to rendering all of the player data using MAP

```jsx
export default function PlayerList(props) {

// Currently, onePlayer is looping through the array of data
  const onePlayer = props.playerData[0];
//      onePlayer = {
//        "Disguised Lizard": {
//            gamerTag: "Disguised Lizard",
//            firstName: "Daria ",
//            lastName: "Stark",
//            wins: 0 ===> Added from function
//        },

// Rendering takes place in "Player.jsx" We just want to past the right props to render
// Props = array.key
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player 
        gamerTag={onePlayer.gamerTag} 
        firstName={onePlayer.firstName} 
        lastName={onePlayer.lastName} 
        wins={onePlayer.wins}/>
    </section>
  );
}

```

Below is the final refactor
```jsx
export default function PlayerList(props) {

// Now we get the props for Player.jsx to render for all of the data. 
  const players = props.playerData.map(player => {
    return (
      <Player 
        key={player.gamerTag} // Required for every array. A key prop with a number
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

```