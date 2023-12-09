import Navbar from './components/navbar/navbar.component.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.page';
import About from './routes/about/about.page';
import Portfolio from './routes/portfolio/portfolio.page';
import Contact from './routes/contact/contact.page';
import Footer from './components/footer/footer.component.jsx';

const App = () => {
  return (

  <Router>
      <Navbar />
    <Routes className='content-container'>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
  );
};

export default App;
