
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line } from 'react-icons/ri';
import './navbar.styles.scss';

const Navbar = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const handleLinkClick = () => {
    setChecked(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <Link to="/" className='logo'>Damian S.</Link>
      <input type="checkbox" id="check" checked={isChecked} onChange={handleCheckboxChange} />
      <label htmlFor="check" className="checkbtn">
        <RiMenu3Line />
      </label>
      <ul>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About me</Link></li>
        <li><Link to="/portfolio" onClick={handleLinkClick}>My work</Link></li>
        <li><Link to="/contact" onClick={handleLinkClick}>Get in touch!</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
