import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <ul>
        <li><Link to="/portfolio/project-1">Project 1</Link></li>
        <li><Link to="/portfolio/project-2">Project 2</Link></li>
      </ul>
    </div>
  );
};

export default Portfolio;
