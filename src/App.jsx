import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';  // Import Navigate
import FAQs from './Components/FaqComponentsection1';  // Import the FAQs component
import SectionTwo from './Components/faqComponentsection2';  // Import SectionTwo component
import FAQSection3 from './Components/FaqComponentsection3';  // Import FAQSection3 component
import Documents from './Components/Documents';  // Import Documents component
import './App.css';

const App = () => {
  const location = useLocation();
  const activeTab = location.pathname;

  return (
    <div className="app-container">
      <nav className="tab-container">
        <ul className="tab-list">
        
          <li
            className={`tab-item ${activeTab === '/section1' ? 'active' : ''}`}
          >
            <Link to="/section1">Section 1</Link>
          </li>

          <li
            className={`tab-item ${activeTab === '/section2' ? 'active' : ''}`}
          >
            <Link to="/section2">Section 2</Link>
          </li>

          <li
            className={`tab-item ${activeTab === '/section3' ? 'active' : ''}`}
          >
            <Link to="/section3">Section 3</Link>
          </li>

          <li className={`tab-item ${activeTab === '/documents' ? 'active' : ''}`}>
            <Link to="/documents">Documents</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <Routes>
          {/* Redirect root to Section 1 */}
          <Route path="/" element={<Navigate to="/section1" />} />
          
          <Route path="/section1" element={<FAQs />} />
          <Route path="/section2" element={<SectionTwo />} />
          <Route path="/section3" element={<FAQSection3 />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </div>

      <footer className="footer">
        <p>Mappls Assignment by Reshab Kumar Pandey</p>
      </footer>
    </div>
  );
};

export default App;
