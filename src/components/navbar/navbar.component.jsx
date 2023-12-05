import './navbar.styles.scss';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaFolder, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/"><FaHome /></Link></li>
        <li><Link to="/about"><FaUser /></Link></li>
        <li><Link to="/portfolio"><FaFolder /></Link></li>
        <li><Link to="/contact"><FaEnvelope /></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
