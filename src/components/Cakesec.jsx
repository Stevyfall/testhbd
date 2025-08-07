import { useEffect, useState } from 'react';
import '../styles/Cakesec.css'; 

export default function Cakesec() {
  
  return(
    <div className='body'>
        <div className='container'>
            <div className="cake">
                <div className="candle"></div>
                <div className="top-layer"></div>
                <div className="middle-layer"></div>
                <div className="bottom-layer"></div>
            </div>
        </div>
    </div>
  );
}
