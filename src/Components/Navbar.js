import navLogo from '../assets/images/nav-logo.png'
export default function Navbar(){
    return <nav className="nav-bar">
        <img src={navLogo} alt="logo" className="nav-image" />
        <p className="nav-text">My Travel Highlights</p>
    </nav>
}