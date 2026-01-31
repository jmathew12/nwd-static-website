import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Main from './pages/Main'
import Contact from './pages/Contact'
import ContactThankYou from './pages/ContactThankYou';
import About from './pages/About'
import PortfolioPage from './pages/PortfolioPage'
import DevelopersPage from './pages/DevelopersPage'
import GraduatesPage from './pages/GraduatesPage'
import CompaniesPage from './pages/CompaniesPage'
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("G-G27MNF49YJ");
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/Home" />} />
        <Route path='/Home' element={<Main />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Contact-Thank-You' element={<ContactThankYou />} />
        <Route path='/About' element={<About />} />
        <Route path='/Portfolio' element={<PortfolioPage />} />
        <Route path='/Developers' element={<DevelopersPage />} />
        <Route path='/graduates' element={<GraduatesPage />} />
        <Route path='/companies' element={<CompaniesPage />} />
      </Routes>
    </Router>
  );
}

export default App;