function TeamInfo({ team }) {
  return (
    <div className="team-info">
      <h3>{team.name}</h3>
      <p>World Cup Wins: {team.titles}</p>
      <p>Key Players: {team.players.join(', ')}</p>
    </div>
  );
}
export default TeamInfo;