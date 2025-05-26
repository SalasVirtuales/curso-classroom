import React, { useState } from 'react';
import './ClassTabs.css'; // For component-specific styles

// Pass setActiveTab as a prop from App.jsx or a controller component
const ClassTabs = ({ setActiveTab }) => {
  const [currentActiveTabId, setCurrentActiveTabId] = useState('clase2-tab'); // Default active tab

  const handleTabClick = (tabName, tabId) => {
    setActiveTab(tabName); // Prop function to update state in parent
    setCurrentActiveTabId(tabId);
    // The original HTML used data-toggle="tab" and href="#...",
    // which relies on Bootstrap's JS. In React, we manage this with state.
  };

  return (
    <div className="class-tabs-container">
      <ul className="nav nav-pills class-tabs" id="classTab" role="tablist">
        <li className="nav-item">
          <a
            className={`nav-link ${currentActiveTabId === 'bienvenida-tab' ? 'active' : ''}`}
            id="bienvenida-tab"
            href="#bienvenida" // href is kept for potential Bootstrap styling/accessibility
            role="tab"
            aria-controls="bienvenida"
            aria-selected={currentActiveTabId === 'bienvenida-tab'}
            onClick={(e) => { e.preventDefault(); handleTabClick('Bienvenida', 'bienvenida-tab'); }}
          >
            Bienvenida
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${currentActiveTabId === 'introduccion-tab' ? 'active' : ''}`}
            id="introduccion-tab"
            href="#introduccion"
            role="tab"
            aria-controls="introduccion"
            aria-selected={currentActiveTabId === 'introduccion-tab'}
            onClick={(e) => { e.preventDefault(); handleTabClick('Introducción', 'introduccion-tab'); }}
          >
            Introducción
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${currentActiveTabId === 'links-tab' ? 'active' : ''}`}
            id="links-tab"
            href="#links"
            role="tab"
            aria-controls="links"
            aria-selected={currentActiveTabId === 'links-tab'}
            onClick={(e) => { e.preventDefault(); handleTabClick('Links Importantes', 'links-tab'); }}
          >
            Links Importantes
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${currentActiveTabId === 'clase1-tab' ? 'active' : ''}`}
            id="clase1-tab"
            href="#clase1"
            role="tab"
            aria-controls="clase1"
            aria-selected={currentActiveTabId === 'clase1-tab'}
            onClick={(e) => { e.preventDefault(); handleTabClick('Clase 1', 'clase1-tab'); }}
          >
            Clase 1
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${currentActiveTabId === 'clase2-tab' ? 'active' : ''}`}
            id="clase2-tab"
            href="#clase2"
            role="tab"
            aria-controls="clase2"
            aria-selected={currentActiveTabId === 'clase2-tab'}
            onClick={(e) => { e.preventDefault(); handleTabClick('Clase 2', 'clase2-tab'); }}
          >
            Clase 2
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ClassTabs;
