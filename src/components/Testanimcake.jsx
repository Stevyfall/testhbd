import React, { useRef, useState } from 'react';
import '../styles/Testanimcake.css';
import Cakeanim from './Cakeanim';

export default function Testanimcake() {
  const audioRef = useRef(null);
  const [clicked, setClicked] = useState(false); // ✅ suivi du clic

  const startanim = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((e) => {
        console.error('Erreur de lecture audio :', e);
      });
    }

    setClicked(true); // ✅ le bouton a été cliqué
  };

  return (
    <div>
      <div className="button-div">
        {!clicked && ( // ✅ n'afficher le bouton que si non cliqué
          <button className="click-butt" onClick={startanim}>
            Click Me
          </button>
        )}
        <audio ref={audioRef} src="/sounds/hbdsong.wav" />
      </div>
      {clicked && <Cakeanim/>}
    </div>
  );
}
