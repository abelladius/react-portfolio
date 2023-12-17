import './navbar.styles.scss';
import { Link } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className='logo'>Damian S.</Link>
      <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
        <RiMenu3Line />
      </label>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/portfolio">My work</Link></li>
        <li><Link to="/contact">Get in touch!</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
