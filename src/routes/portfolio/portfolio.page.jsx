import Project1 from '../../assets/images/projects/project-1.png'
import Project2 from '../../assets/images/projects/project-2.png'
import Project3 from '../../assets/images/projects/project-3.png'
import './portfolio.styles.scss'

const Portfolio = () => {
  return (
    <div>
        <div class="content-container-large">
            <h2 class="subtitle">Projects</h2>
            <hr />
            <p class="content">Welcome to my projects showcase, where I bring my passion for web development to life. Here, you'll find a curated collection of my work, each project reflecting a unique journey of creativity and problem-solving. From crafting stunning e-commerce websites to building interactive web applications, I've poured my heart and skills into these creations. Explore my projects below, and witness the diversity of my work, each piece representing a step in my ongoing journey as a frontend web developer.</p>
        </div>

        <div class="project-card-container">
        {/* <!-- Project Card 1 --> */}
            <div class="project-card">
                <img src={Project1} alt="Project 2" />
                <h3>KYD Animal Shelter</h3>
                <div class="description-wrapper">
                    <p class="project-description">
                        Skills Used: <span class="accent">HTML, CSS, JavaScript</span>
                    </p>
                    
                    <p class="hidden-text">
                        "I designed and developed a simple and user-friendly website for KYD Animal Shelter. The website allows for easy online donations to support stray animals. It was a fulfilling project, knowing that the website helps make a positive impact on the lives of these animals."
                    </p>
                </div>
                <div class="buttons-container">
                    <a href="https://abelladius.github.io/KYDAnimalShelter/"><button class="button-secondary">Live Preview</button></a>
                    <button class="button-primary show-more-button button">Show More</button>
                </div>
            </div>

            {/* <!-- Project Card 2 --> */}
            
            <div class="project-card">
                <img src={Project2} alt="Project 1" />
                <h3>AlpinMag Ecommerce</h3>
                <div class="description-wrapper">
                    <p class="project-description">
                        Skills Used: <span class="accent"> Opencart, HTML/CSS, PHP, SEO</span>
                    </p>
                    
                    <p class="hidden-text">
                        "Alpinmag is an e-commerce website that I've helped reach their goals by assisting with their OpenCart e-commerce website. I installed essential plugins, created eye-catching banners for the website, provided support with bug fixes, and optimized their SEO. It was a great experience working with Alpinmag."
                    </p>
                </div>

                <div class="buttons-container">
                    <a href="https://alpinmag.ro"><button class="button-secondary">Live Preview</button></a>
                    <button class="show-more-button button">Show More</button>
                </div>

            </div>

            {/* <!-- Project Card 3 --> */}
            <div class="project-card">
                <img src={Project3} alt="Project 3" />
                <h3>Scarpa Ecommerce</h3>
                <div class="description-wrapper">
                    <p class="project-description">
                        Skills Used: <span class="accent">HTML/CSS, PHP, CMS(WordPress/WooComerce)</span>
                    </p>
                    
                    <p class="hidden-text">
                        "Scarpa is an e-commerce website that I've helped achieve its objectives by providing assistance with their WordPress-based online store. I worked on the customization of their website, installed essential plugins, designed appealing banners, offered solutions for bug fixes, and optimized their SEO. Collaborating with Scarpa was a rewarding experience."
                    </p>
                </div>
                    <div class="buttons-container">
                    <a href="https://scarpa.ro"><button class="button-secondary">Live Preview</button></a>
                    <button class="show-more-button button">Show More</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Portfolio;
