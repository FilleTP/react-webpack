import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../home/Home';
import BusinessCard from '../contact/BusinessCard';
import './app.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<BusinessCard />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function NotFound() {
  return (
    <h1 style={{color: "white", marginLeft: "50px"}}>404 - Page Not Found</h1>
  )
}

export default App;
