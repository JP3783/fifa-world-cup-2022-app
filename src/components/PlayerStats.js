function PlayerStats({ players }) {
  return (
    <div className="player-stats">
      {players.map((player, index) => (
        <div key={index}>
          <strong>{player.name}</strong> – Goals: {player.goals}, Assists: {player.assists}
        </div>
      ))}
    </div>
  );
}
export default PlayerStats;