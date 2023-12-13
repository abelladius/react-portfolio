import './home.styles.scss'
import HeroImg from '../../assets/images/pp.png'
import LogoScarpa from '../../assets/images/logos/logo-scarpa.png'
import LogoAlpinMag from '../../assets/images/logos/logo-alpinmag.png'
import LogoANIS from '../../assets/images/logos/logo-298x104.png'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

import Testimonials from '../../components/testimonials/testimonials.component'




const Home = () => {
    return (
      <section>
        <div className="home-container  content-container">
        <div className="hero-information">
          <p className='accent-small'>Nice to meet you!</p>
          <h1 className="title"> Hi! I'm Damian</h1>
          <p>I'm a <span className="accent">Frontend Web Developer</span> armed with a toolbox of HTML, CSS, JavaScript and React. I thrive on building elegant and intuitive interfaces that captivate users and bring ideas to life in the digital realm.</p>

          <div className="cta-buttons">
            <button className="cta-button primary">See my work!</button>
            <button className="cta-button secondary">Download my CV!</button>
          </div>


          <div className='hero-information-bottom'>
            <p className="accent-small">You can also find me on:</p>
            <ul className='social-icons'>
              <li><a href="https://github.com/abelladius" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
              <li><a href="https://www.linkedin.com/in/damian-szolosi-5a600722a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
              <li><a href="https://web.telegram.org/a/#5733666870" target="_blank" rel="noopener noreferrer"><FaTelegram /></a></li>
            </ul>
          </div>
          
        </div>

        
          <img src={HeroImg} alt='profile picture' className='hero-image'/>
        
        </div>

        <div className='content-container'>
          {/* <h2>Trusted by:</h2> */}
          <hr />
          <div className='logos-container'>
            <h2>Confederatia Intreprinzatorilor Privati din judetul Timis</h2>
            <img src={LogoScarpa} alt=""/>
            <img src={LogoAlpinMag} alt="" />
            <img src={LogoANIS} alt="" />
          </div>
        </div>

        <div className="testimonials-container">
          <Testimonials />
        </div>
      </section>
      
    );
  };
  
  export default Home;