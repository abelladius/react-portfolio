import React from 'react';
import './about.styles.scss'; 
import AboutImg from '../../assets/images/pp-2.webp'
import {motion} from 'framer-motion'
import CV from '../../assets/CV-Damian-Szolosi.pdf'



const About = () => {
  return (
    <motion.section
      initial={{width:0}}
      animate={{width:'100%'}}
      exit={{x: window.innerWidth, transition: {duration: 0.3}}}>
      <div className="about-container content-container">
        <div className="about-content">
          <div className='about-image'>
            <img src={AboutImg} alt="Szolosi Damian" />
          </div>
          <div className="about-text">
            <h2 className="title">About Me</h2>
            <hr />
            <p>Hello there! I'm a self-taught <span className="accent">web developer</span> who's on a journey to turn ideas into interactive digital experiences. My love for coding began at a young age, and I've been fascinated by the ever-evolving world of web technologies ever since.</p>
            <p className="content">I thrive on the challenges of creating elegant and efficient solutions to complex problems. Whether it's <span className="accent">crafting beautiful user interfaces, optimizing code performance, or diving into the latest web development trends</span>, I'm always eager to learn and push the boundaries of what's possible.</p>
            <p className="content">When I'm not glued to my computer screen, you can find me exploring the great outdoors, capturing moments through photography, or sipping on a cup of artisan coffee at a cozy cafe. I believe that a well-balanced life fuels creativity and innovation, and I'm constantly seeking inspiration from the world around me.</p>

            <a href={CV} download="DamianS_CV.pdf">
                  <button className='button'>Download my CV!</button>
            </a>
          </div>
        </div>

        <div className='statistics-container'>

          <div className='stat-item'>
            <h2 className='title'>3+</h2>
            <p>Years since I got in the business.</p>
          </div>

          <div className='stat-item'>
            <h2 className='title'>3+</h2>
            <p>Successfully delivered and polished projects.</p>
          </div>

          <div className='stat-item'>
            <h2 className='title'>1</h2>
            <p>Ongoing project</p>
          </div>
        </div>

        <div className="tools-line">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
            <i className="fab fa-wordpress"></i>
            <i className="fab fa-sass"></i>
            <i className="fab fa-bootstrap"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-opencart"></i>
          </div>

          <div className="skills-container">
              <div className="skills-upper">
                  <p className="content">As a web developer, I'm not your typical tech nerd - I bring a unique blend of creativity and technical expertise to the table. My understanding of <span className="accent">semantic HTML, responsive CSS</span>, and <span className="accent">JavaScript</span> enables me to build websites that are both beautiful and functional. I'm a big believer in the power of <span className="accent">UI/UX design</span> and stay up to date with the latest trends and developments in the field to create websites that are intuitive and engaging for users.</p>
                  <p className="content"> I'm a lifelong learner and am currently diving into <span className="accent">React</span>, which has been an exciting and challenging experience. With my passion for web development and my ability to bring creative solutions to technical challenges, I'm confident I can tackle any project and exceed your expectations.</p>
              </div>
              <div className="skills-lower">
                  <div className="hard-skills skills-list">
                      <h3 className="subtitle">Hard</h3>
                      <hr />
                      <ul>
                          <li className="content"><i className="fas fa-check-circle  accent"></i> HTML5</li>
                          <li className="content"><i className="fas fa-check-circle  accent"></i> CSS3 / SCSS</li>
                          <li className="content"><i className="fas fa-check-circle  accent"></i> JavaScript</li>
                          <li className="content"><i className="fas fa-check-circle  accent"></i> React</li>
                          <li className="content"><i className="fas fa-check-circle"></i> WordPress</li>
                          <li className="content"><i className="fas fa-check-circle"></i> WordPress Customization</li>
                          <li className="content"><i className="fas fa-check-circle"></i> E-commerce Enhancement</li>
                      </ul>
                  </div>
          
                  <h2 className="subtitle">Skills</h2>
      
                  <div className="soft-skills skills-list">
                      <h3 className="subtitle">Soft</h3>
                      <hr />
                      <ul>
                          <li className="content"><i className="fas fa-check-circle"></i> Problem Solving</li>
                          <li className="content"><i className="fas fa-check-circle"></i> Creativity</li>
                          <li className="content"><i className="fas fa-check-circle"></i> Attention to Detail</li>
                          <li className="content"><i className="fas fa-check-circle"></i> Teamwork</li>
                          <li className="content"><i className="fas fa-check-circle"></i> Communication</li>
                          <li className="content"><i className="fas fa-check-circle"></i> Time Management</li>
                      </ul>
                  </div>
      
              </div>
          </div>
        
      </div>
    </motion.section>
  );
};

export default About;
