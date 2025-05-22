import './PreMatch.css';

function PreMatch() {
  return (
    <div className="pre-match-container">
      <div className="team-column">
        <div className="team-header">
          <img src="/assets/argentina-logo.png" alt="Argentina Logo" className="team-logo" />
          <h2 className="team-name"> Argentina
            <img src="/assets/argentina-flag.png" alt="Argentina Flag" className="flag-icon" />
          </h2>
        </div>
        <ul className="history-list">
          <li><strong>1930</strong> – World Cup Finalist (Lost)</li>
          <li><strong>1978</strong> – <span className="highlight">World Cup Winner 🏆 (First time ever!)</span></li>
          <li><strong>1986</strong> – <span className="highlight">World Cup Winner 🏆</span></li>
          <li><strong>1990</strong> – World Cup Finalist (Lost)</li>
          <li><strong>2014</strong> – World Cup Finalist (Lost)</li>
          <li><strong>2021</strong> – Copa America Champion 🏆</li>
          <li><strong>2022</strong> – Finalissima Winner 🏆</li>
        </ul>
        <p className="coach-note">
          Led by coach <strong>Lionel Scaloni</strong>, Argentina came in strong, aiming to win their third World Cup.
        </p>
      </div>

      <div className="divider" />

      <div className="team-column">
        <div className="team-header">
          <img src="/assets/france-logo.png" alt="France Logo" className="team-logo" />
          <h2 className="team-name">
            France
            <img src="/assets/france-flag.png" alt="France Flag" className="flag-icon" />
          </h2>
        </div>
        <ul className="history-list">
          <li><strong>1998</strong> – <span className="highlight">World Cup Winner 🏆(First time ever!)</span></li>
          <li><strong>2018</strong> – <span className="highlight">World Cup Winner 🏆</span></li>
        </ul>
        <p className="coach-note">
          Coached by <strong>Didier Deschamps</strong> (winner in 1998 as a player), France aimed to defend their title and make history.
        </p>
      </div>
    </div>
  );
}

export default PreMatch;