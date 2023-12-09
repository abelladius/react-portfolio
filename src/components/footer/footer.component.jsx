import React from 'react'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
        <div class="footer-info">
            <p>&copy; 2024 Szolosi Damian</p>
            <p>Contact: szolosi.albert15@gmail.com</p>
        </div>

        
      <ul className='social-icons'>
        <li><a href="https://github.com/abelladius" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/damian-szolosi-5a600722a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
        <li><a href="https://web.telegram.org/a/#5733666870" target="_blank" rel="noopener noreferrer"><FaTelegram /></a></li>
      </ul>
    </footer>
  )
}

export default Footer