import Navbar from './components/navbar/navbar.component.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer/footer.component.jsx';
import AnimatedRoutes from './components/AnimatedRoutes.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'

const App = () => {
  
  return (

  <Router basename='/react-portfolio'>
    <ScrollToTop />
    <Navbar />
    <AnimatedRoutes />
    <Footer />
  </Router>
  );
};

export default App;
