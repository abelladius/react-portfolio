import React from 'react';
import './about.styles.scss'; 
import AboutImg from '../../assets/images/pp-2.png'

const About = () => {
  return (
    <div className="about-container content-container">
      <div className="about-content">
        <div className='about-image'>
          <img src={AboutImg} alt="Szolosi Damian" />
        </div>
        <div className="about-text">
          <h2 className="subtitle">About Me</h2>
          {/* <hr /> */}
          <p>Hello there! I'm a self-taught <span className="accent">web developer</span> who's on a journey to turn ideas into interactive digital experiences. My love for coding began at a young age, and I've been fascinated by the ever-evolving world of web technologies ever since.</p>
          <p className="content">I thrive on the challenges of creating elegant and efficient solutions to complex problems. Whether it's <span className="accent">crafting beautiful user interfaces, optimizing code performance, or diving into the latest web development trends</span>, I'm always eager to learn and push the boundaries of what's possible.</p>
          <p className="content">When I'm not glued to my computer screen, you can find me exploring the great outdoors, capturing moments through photography, or sipping on a cup of artisan coffee at a cozy cafe. I believe that a well-balanced life fuels creativity and innovation, and I'm constantly seeking inspiration from the world around me.</p>

          <a href="assets/CV-Szolosi-Damian.pdf" download="DamianS_CV.pdf">
                <button>Download my CV!</button>
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

      <div class="tools-line">
          <a href="#"><i class="fab fa-html5"></i></a>
          <a href="#"><i class="fab fa-css3"></i></a>
          <a href="#"><i class="fab fa-js"></i></a>
          <a href="#"><i class="fab fa-react"></i></a>
          <a href="#"><i class="fab fa-wordpress"></i></a>
          <a href="#"><i class="fab fa-sass"></i></a>
          <a href="#"><i class="fab fa-bootstrap"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-opencart"></i></a>
        </div>

        <div class="skills-container">
            <div class="skills-upper">
                <p class="content">As a web developer, I'm not your typical tech nerd - I bring a unique blend of creativity and technical expertise to the table. My understanding of <span class="accent">semantic HTML, responsive CSS</span>, and <span class="accent">JavaScript</span> enables me to build websites that are both beautiful and functional. I'm a big believer in the power of <span class="accent">UI/UX design</span> and stay up to date with the latest trends and developments in the field to create websites that are intuitive and engaging for users.</p>
                <p class="content"> I'm a lifelong learner and am currently diving into <span class="accent">React</span>, which has been an exciting and challenging experience. With my passion for web development and my ability to bring creative solutions to technical challenges, I'm confident I can tackle any project and exceed your expectations.</p>
            </div>
            <div class="skills-lower">
                <div class="hard-skills skills-list">
                    <h3 class="subtitle">Hard</h3>
                    <hr />
                    <ul>
                        <li class="content"><i class="fas fa-check-circle  accent"></i> HTML5</li>
                        <li class="content"><i class="fas fa-check-circle  accent"></i> CSS3 / SCSS</li>
                        <li class="content"><i class="fas fa-check-circle  accent"></i> JavaScript</li>
                        <li class="content"><i class="fas fa-check-circle  accent"></i> React</li>
                        <li class="content"><i class="fas fa-check-circle"></i> WordPress</li>
                        <li class="content"><i class="fas fa-check-circle"></i> WordPress Customization</li>
                        <li class="content"><i class="fas fa-check-circle"></i> E-commerce Enhancement</li>
                    </ul>
                </div>
        
                <h2 class="subtitle">Skills</h2>
    
                <div class="soft-skills skills-list">
                    <h3 class="subtitle">Soft</h3>
                    <hr />
                    <ul>
                        <li class="content"><i class="fas fa-check-circle"></i> Problem Solving</li>
                        <li class="content"><i class="fas fa-check-circle"></i> Creativity</li>
                        <li class="content"><i class="fas fa-check-circle"></i> Attention to Detail</li>
                        <li class="content"><i class="fas fa-check-circle"></i> Teamwork</li>
                        <li class="content"><i class="fas fa-check-circle"></i> Communication</li>
                        <li class="content"><i class="fas fa-check-circle"></i> Time Management</li>
                    </ul>
                </div>
    
            </div>
        </div>
      
    </div>
  );
};

export default About;
