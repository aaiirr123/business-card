import './styles/Navbar.css'
import icon from '../assets/linkedinIcon.png'
function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <div>
                    <h1 className='card-name'>Aaron Crawford</h1>
                    <h3 className='navbar-email'> aaronecrawford@gmail.com</h3>
                </div>
                <a href='https://www.linkedin.com/in/aaronecrawford/'>
                    <img src={icon} className="logo"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar