import './navbar.styles.scss';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaFolder, FaEnvelope, FaGithub, FaLinkedin, FaTelegram} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className='logo'>Damian S.</Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/portfolio">My work</Link></li>
        <li><Link to="/contact">Get in touch!</Link></li>
      </ul>
      <ul className='social-icons'>
        <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
        <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
        <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaTelegram /></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
