
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import SignupForm from './SignupForm';
import Footer from './footer';
import ImageGallery from './ImageGallery';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Router>
        <Navbar />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<ImageGallery />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
