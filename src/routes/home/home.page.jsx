import './home.styles.scss'
import HeroImg from '../../assets/images/pp.webp'
import LogoScarpa from '../../assets/images/logos/logo-scarpa.webp'
import LogoAlpinMag from '../../assets/images/logos/logo-alpinmag.webp'
import LogoANIS from '../../assets/images/logos/logo-298x104.webp'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import CV from '../../assets/CV-Damian-Szolosi.pdf'
import Testimonials from '../../components/testimonials/testimonials.component'
import Typed from 'react-typed'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';




const Home = () => {
    return (
      <motion.section
      initial={{width:0}}
      animate={{width:'100%'}}
      exit={{x: window.innerWidth, transition: {duration: 0.3}}}>

        <div className="home-container  content-container">
        <div className="hero-information">
          <p className='accent-small'>Nice to meet you!</p>
          <h1 className="title"> Hi! I'm Damian</h1>
          <p>I'm a <span className="accent"> <Typed
                strings={[
                    'Frontend Web Developer',
                    'ReactJS Developer',
                    'Aspiring Full Stack Developer',
                    'UI/UX Designer',
                    'Wordpress developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed></span> armed with a toolbox of HTML, CSS, JavaScript and React situated in 
                <span class="flag">
                  <div class="stripe blue"></div>
                  <div class="stripe yellow"></div>
                  <div class="stripe red"></div>
                </span>
                Timisoara, Romania. I thrive on building elegant and intuitive interfaces that captivate users and bring ideas to life in the digital realm.</p>

          <div className="cta-buttons">
            <Link to='../portfolio'>
            <button className="cta-button button">See my work!</button></Link>
            <a href={CV} download="DamianS_CV.pdf">
                <button className='button-secondary'>Download my CV!</button>
          </a>
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

        
          <img src={HeroImg} alt='Damian' className='hero-image'/>
        
        </div>

        <div className='content-container'>
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
      </motion.section>
      
    );
  };
  
  export default Home;