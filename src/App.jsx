import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movingrounds from './components/Movingrounds'
import Hoverbutton from './components/Hoverbutton'
import Texthint from './components/Texthint'
import Imageslider from './components/Imageslider'
import Anniv from './components/Anniv'
import Cakesec from './components/Cakesec'
import Popsicles from './components/Popsicles'
import Cakeanim from './components/Cakeanim'
import Testanimcake from './components/Testanimcake'



function App() {
  return (
    <div >
      {/*<h1>Ma galerie d'effets CSS</h1>
      <h2>Bordure</h2>
      <Movingrounds />
      <h2>Hover Effekt auf Button</h2>
      <Hoverbutton />
      <h3>Hintergrund eines Textes festlegen</h3>
      <Texthint />
      <h4>Verschiedene Bilder slidern</h4>
      <Imageslider />
      <h5>Geburtstagkuchen</h5>
      <Cakesec/>
      <Anniv />
      <Popsicles/>*/}
      <Testanimcake/>
    </div>
  );
}

export default App
