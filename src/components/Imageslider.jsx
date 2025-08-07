import '../styles/Imageslider.css'; 

export default function Imageslider() {
  return (
    <div className='slider'>
      <div className='slide'>
        <img src='src/images/lava.jpg'  />
      </div>
      <div className='slide'>
        <img src='src/images/foret.jpg'  />
      </div>
      <div className='slide'>
        <img src='src/images/voie.jpg'  />
      </div>
      <div className='slide'>
        <img src='src/images/lava2.jpg'  />
      </div>
    </div>
  );
}
