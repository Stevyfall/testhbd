import { useEffect, useState } from 'react';
import '../styles/Popsicles.css'; 

export default function Popsicles() {
  
  return(
    <div className='body'>
        <div className='container'>
           <div className="popsicles popsicles-1"></div>
           <div className="popsicles popsicles-2"></div>
           <div className="popsicles popsicles-3"></div>
        </div>
    </div>
  );
}
