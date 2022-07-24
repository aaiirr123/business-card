import headShot from '../assets/headShot.jpg'
import './styles/Photo.css' 

function Photo() {
    return (
      <div className='head-shot-frame'>
        <img src={headShot} className='head-shot'/>
      </div>
    )
}

export default Photo