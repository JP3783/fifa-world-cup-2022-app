function Scoreboard({ teamA, teamB, scoreA, scoreB }) {
  return (
    <div className="scoreboard">
      <span>{teamA} {scoreA} - {scoreB} {teamB}</span>
    </div>
  );
}
export default Scoreboard;