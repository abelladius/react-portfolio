import Project1 from '../../assets/images/projects/project-1.webp'
import Project2 from '../../assets/images/projects/project-2.webp'
import Project3 from '../../assets/images/projects/project-3.webp'
import Project4 from '../../assets/images/projects/project-4.webp'
import './portfolio.styles.scss'

import ProjectCard from '../../components/project-card/project-card.component'

const projectsData = [
    {
        title: 'KYD Animal Shelter',
        description:
          'I designed and developed a simple and user-friendly website for KYD Animal Shelter. The website allows for easy online donations to support stray animals. It was a fulfilling project, knowing that the website helps make a positive impact on the lives of these animals.',
        skills: 'HTML, CSS, JavaScript',
        img: Project2,
        link: 'https://abelladius.github.io/KYDAnimalShelter/',
      },
      {
        title: 'AlpinMag Ecommerce',
        description:
          "Alpinmag is an e-commerce website that I've helped reach their goals by assisting with their OpenCart e-commerce website. I installed essential plugins, created eye-catching banners for the website, provided support with bug fixes, and optimized their SEO. It was a great experience working with Alpinmag.",
        skills: 'Opencart, HTML/CSS, PHP, SEO',
        img: Project1,
        link: 'https://alpinmag.ro/',
      },
      {
        title: 'Scarpa Ecommerce',
        description:
            "Scarpa is an e-commerce website that I've helped achieve its objectives by providing assistance with their WordPress-based online store. I worked on the customization of their website, installed essential plugins, designed appealing banners, offered solutions for bug fixes, and optimized their SEO. Collaborating with Scarpa was a rewarding experience.",
        skills: 'WordPress, HTML/CSS, PHP, SEO',
        img: Project3,
        link: 'https://scarpa.ro/',
      },
      {
        title: 'My vanilla portfolio',
        description:
          'I designed and developed a simple and user-friendly website for KYD Animal Shelter. The website allows for easy online donations to support stray animals. It was a fulfilling project, knowing that the website helps make a positive impact on the lives of these animals.',
        skills: 'HTML, CSS, JavaScript',
        img: Project4,
        link: 'https://abelladius.github.io/static-portfolio/',
      },
  ];

const Portfolio = () => {

  return (
    <div className="content-container projects-container">
        <div>
            <h2 className="title">Projects</h2>
            <hr />
            <p className="content">Welcome to my projects showcase, where I bring my passion for web development to life. Here, you'll find a curated collection of my work, each project reflecting a unique journey of creativity and problem-solving. From crafting stunning e-commerce websites to building interactive web applications, I've poured my heart and skills into these creations. Explore my projects below, and witness the diversity of my work, each piece representing a step in my ongoing journey as a frontend web developer.</p>
        </div>

        <div className="project-card-container">
        {projectsData.map((project, index) => (
            <ProjectCard
                key={index}
                projectTitle={project.title}
                projectDesc={project.description}
                projectImg={project.img}
                projectLink={project.link}
                projectSkills={project.skills}
            />
      ))}
        </div>
        {/* <div className="project-card-container">

            <div className="project-card">
                <img src={Project2} alt="Project 2" />
                <h3>KYD Animal Shelter</h3>
                <div className="description-wrapper">
                    <p className="project-description">
                        Skills Used: <span className="accent">HTML, CSS, JavaScript</span>
                    </p>
                    
                    <p className="hidden-text">
                        "I designed and developed a simple and user-friendly website for KYD Animal Shelter. The website allows for easy online donations to support stray animals. It was a fulfilling project, knowing that the website helps make a positive impact on the lives of these animals."
                    </p>
                </div>
                <div className="buttons-container">
                    <a href="https://abelladius.github.io/KYDAnimalShelter/"><button className="button-secondary">Live Preview</button></a>
                    <button className="button-primary show-more-button button">Show More</button>
                </div>
            </div>

            
            <div className="project-card">
                <img src={Project1} alt="Project 1" />
                <h3>AlpinMag Ecommerce</h3>
                <div className="description-wrapper">
                    <p className="project-description">
                        Skills Used: <span className="accent"> Opencart, HTML/CSS, PHP, SEO</span>
                    </p>
                    
                    <p className="hidden-text">
                        "Alpinmag is an e-commerce website that I've helped reach their goals by assisting with their OpenCart e-commerce website. I installed essential plugins, created eye-catching banners for the website, provided support with bug fixes, and optimized their SEO. It was a great experience working with Alpinmag."
                    </p>
                </div>

                <div className="buttons-container">
                    <a href="https://alpinmag.ro"><button className="button-secondary">Live Preview</button></a>
                    <button className="show-more-button button">Show More</button>
                </div>

            </div>

            <div className="project-card">
                <img src={Project3} alt="Project 3" />
                <h3>Scarpa Ecommerce</h3>
                <div className="description-wrapper">
                    <p className="project-description">
                        Skills Used: <span className="accent">HTML/CSS, PHP, CMS(WordPress/WooComerce)</span>
                    </p>
                    
                    <p className="hidden-text">
                        "Scarpa is an e-commerce website that I've helped achieve its objectives by providing assistance with their WordPress-based online store. I worked on the customization of their website, installed essential plugins, designed appealing banners, offered solutions for bug fixes, and optimized their SEO. Collaborating with Scarpa was a rewarding experience."
                    </p>
                </div>
                    <div className="buttons-container">
                    <a href="https://scarpa.ro"><button className="button-secondary">Live Preview</button></a>
                    <button className="show-more-button button">Show More</button>
                </div>
            </div>

            <div className="project-card">
                <img src={Project4} alt="Project 4" />
                <h3>My vanilla portfolio</h3>
                <div className="description-wrapper">
                    <p className="project-description">
                        Skills Used: <span className="accent">HTML/CSS, JS</span>
                    </p>
                    
                    <p className="hidden-text">
                        "My portfolio is an e-commerce website that I've helped achieve its objectives by providing assistance with their WordPress-based online store. I worked on the customization of their website, installed essential plugins, designed appealing banners, offered solutions for bug fixes, and optimized their SEO. Collaborating with Scarpa was a rewarding experience."
                    </p>
                </div>
                    <div className="buttons-container">
                    <a href="https://scarpa.ro"><button className="button-secondary">Live Preview</button></a>
                    <button className="show-more-button button">Show More</button>
                </div>
            </div>
        </div> */}
    </div>
  );
};

export default Portfolio;
