import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home'; 
import Nav from './layout/nav'; 
import Footer from './layout/footer'; 
import Join from './pages/Join';
import Contact from './pages/contact'; 
function App() {
return (
    <Router>
    <Nav />
    <div className="pt-16">
    <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/join' element={<Join/>} />
        <Route path='/contact' element={<Contact/>} />
        
    </Routes>
    </div>
    <Footer />
    </Router>
);
}
export default App;
