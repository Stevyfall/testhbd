import { useEffect, useState } from 'react';
import '../styles/Anniv.css'; 

export default function Anniv() {
    const [showLayer, setShowLayer] = useState([false, false, false]);
  const [showIcing, setShowIcing] = useState(false);
  const [showCandles, setShowCandles] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowLayer([true, false, false]), 300),
      setTimeout(() => setShowLayer([true, true, false]), 900),
      setTimeout(() => setShowLayer([true, true, true]), 1500),
      setTimeout(() => setShowIcing(true), 2100),
      setTimeout(() => setShowCandles(true), 2700),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="birthday-container">
      <h1 className="birthday-text">🎂 Happy Birthday! 🎉</h1>

      <div className="cake">
        {showLayer[0] && <div className="layer show"></div>}
        {showLayer[1] && <div className="layer show"></div>}
        {showLayer[2] && <div className="layer show"></div>}

        {showIcing && <div className="icing show"></div>}

        {showCandles && (
          <div className="candles">
            <div className="flame"></div>
            <div className="flame"></div>
            <div className="flame"></div>
          </div>
        )}
      </div>
    </div>
  );
}
