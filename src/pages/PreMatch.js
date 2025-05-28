import { useState } from 'react';
import './PreMatch.css';

function PreMatch() {
  const [modalData, setModalData] = useState(null);

  const argentinaHistory = [
    { year: '1930', text: 'World Cup Finalist (Lost)', desc: 'Argentina reached the final but lost to Uruguay in the first ever World Cup.' },
    { year: '1978', text: 'World Cup Winner 🏆 (First time ever!)', desc: 'Argentina won their first World Cup on home soil, led by Mario Kempes.' },
    { year: '1986', text: 'World Cup Winner 🏆', desc: 'Diego Maradona led Argentina to their second title with unforgettable performances.' },
    { year: '1990', text: 'World Cup Finalist (Lost)', desc: 'Argentina reached the final again but lost 1-0 to Germany.' },
    { year: '2014', text: 'World Cup Finalist (Lost)', desc: 'Argentina made it to the final but lost to Germany 1-0 in extra time.' },
    { year: '2021', text: 'Copa America Champion 🏆', desc: 'Argentina defeated Brazil 1-0 in the final, winning their first major title since 1993.' },
    { year: '2022', text: 'Finalissima Winner 🏆', desc: 'Argentina beat Italy 3-0 to win the Finalissima at Wembley Stadium.' },
  ];

  const franceHistory = [
    { year: '1998', text: 'World Cup Winner 🏆 (First time ever!)', desc: 'France won their first World Cup on home soil with a 3-0 win over Brazil.' },
    { year: '2018', text: 'World Cup Winner 🏆', desc: 'Led by Kylian Mbappé, France claimed their second title with a 4-2 win over Croatia.' },
  ];

  return (
    <div className="pre-match-container">
      <div className="team-column">
        <div className="team-header">
          <img src="/assets/argentina-logo.png" alt="Argentina Logo" className="team-logo" />
          <h2 className="team-name">
            Argentina
            <img src="/assets/argentina-flag.png" alt="Argentina Flag" className="flag-icon" />
          </h2>
        </div>
        <ul className="history-list">
          {argentinaHistory.map((item, index) => (
            <li key={index} onClick={() => setModalData(item)}>
              <strong>{item.year}</strong> –{' '}
              <span className={item.text.includes('Winner') ? 'highlight' : ''}>{item.text}</span>
            </li>
          ))}
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
          {franceHistory.map((item, index) => (
            <li key={index} onClick={() => setModalData(item)}>
              <strong>{item.year}</strong> –{' '}
              <span className={item.text.includes('Winner') ? 'highlight' : ''}>{item.text}</span>
            </li>
          ))}
        </ul>
        <p className="coach-note">
          Coached by <strong>Didier Deschamps</strong> (winner in 1998 as a player), France aimed to defend their title and make history.
        </p>
      </div>

      {modalData && (
        <div className="modal" onClick={() => setModalData(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modalData.year} – {modalData.text}</h3>
            <p>{modalData.desc}</p>
            <button onClick={() => setModalData(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PreMatch;