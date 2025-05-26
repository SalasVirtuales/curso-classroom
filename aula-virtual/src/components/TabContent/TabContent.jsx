import React from 'react';
import './TabContent.css'; // For component-specific styles

// This component will display content for "Bienvenida", "Introducción", "Links Importantes".
// It receives the activeTab string (e.g., "Bienvenida") to determine what to render.
const TabContent = ({ activeTab }) => {
  let content = null;

  if (activeTab === 'Bienvenida') {
    content = (
      <div className="tab-pane fade show active" id="bienvenida" role="tabpanel" aria-labelledby="bienvenida-tab">
        <div className="p-3 bg-white rounded shadow-sm">Contenido de Bienvenida...</div>
      </div>
    );
  } else if (activeTab === 'Introducción') {
    content = (
      <div className="tab-pane fade show active" id="introduccion" role="tabpanel" aria-labelledby="introduccion-tab">
        <div className="p-3 bg-white rounded shadow-sm">Contenido de Introducción...</div>
      </div>
    );
  } else if (activeTab === 'Links Importantes') {
    content = (
      <div className="tab-pane fade show active" id="links" role="tabpanel" aria-labelledby="links-tab">
        <div className="p-3 bg-white rounded shadow-sm">Contenido de Links Importantes...</div>
      </div>
    );
  }
  // For "Clase X" tabs, their content is handled by ClassContentDetails,
  // so this component will render nothing for them, or an empty div if preferred.

  if (!content) {
     // Render an empty div with the main tab-content class if no specific content,
     // or if you want to ensure the container exists for layout purposes.
     // Alternatively, return null if other components handle these cases.
     return <div className="tab-content mt-3" id="classTabContent"></div>;
  }
  
  return (
    <div className="tab-content mt-3" id="classTabContent">
      {content}
    </div>
  );
};

export default TabContent;
