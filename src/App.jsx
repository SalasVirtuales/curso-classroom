import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Alert from './components/Alert/Alert';
import ClaseModal from './components/ClaseModal/ClaseModal'; // Import ClaseModal

function App() {
  // State for the simple text Alert
  const [alertMessage, setAlertMessage] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  // State for the ClaseModal
  const [showClaseModal, setShowClaseModal] = useState(false);
  const [currentClaseTitle, setCurrentClaseTitle] = useState('');

  // Handler for general cards (non-Clase cards)
  const handleCardClick = (title) => {
    setAlertMessage(`Has hecho clic en: ${title}`);
    setIsAlertVisible(true);
  };

  const handleCloseAlert = () => {
    setIsAlertVisible(false);
  };

  // Handler for "Clase" card clicks to open the ClaseModal
  const handleClaseCardClick = (title) => {
    setCurrentClaseTitle(title);
    setShowClaseModal(true);
  };

  // Handler to close the ClaseModal
  const handleCloseClaseModal = () => {
    setShowClaseModal(false);
  };

  const generalCardsData = [
    { title: "Bienvenida", iconClass: "fas fa-handshake" },
    { title: "Introducción", iconClass: "fas fa-lightbulb" },
    { title: "Links importantes", iconClass: "fas fa-external-link-alt" },
    { title: "Material de clase", iconClass: "fas fa-folder-open" },
    { title: "Presentación de clase", iconClass: "fas fa-chalkboard" },
    { title: "Ejercicios prácticos", iconClass: "fas fa-code" },
    { title: "Cuestionario", iconClass: "fas fa-clipboard-check" },
    { title: "Ver Video de Clase", iconClass: "fas fa-video" }
  ];

  return (
    <Layout>
      <Header />
      <main className="contenedor-principal mt-5">
        <section className="mb-5">
          <h2 className="text-center mb-4" style={{color: 'var(--color-principal)', fontWeight: '600'}}>Información General</h2>
          <div className="row g-4">
            {generalCardsData.map(card => (
              <div className="col-12 col-md-6 col-lg-3" key={card.title}>
                <Card title={card.title} iconClass={card.iconClass} onClick={() => handleCardClick(card.title)} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5">
          <h2 className="text-center mb-4" style={{color: 'var(--color-principal)', fontWeight: '600'}}>Contenido del Curso</h2>
          <div className="row g-4">
            {Array.from({ length: 16 }, (_, i) => i + 1).map(num => (
              <div className="col-12 col-md-6 col-lg-3" key={`clase-${num}`}>
                <Card title={`Clase ${num}`} isClase={true} onClick={() => handleClaseCardClick(`Clase ${num}`)} />
              </div>
            ))}
            <div className="col-12 col-md-6 col-lg-3">
              <Card title="Pre-Entrega Proyecto" isClase={true} onClick={() => handleClaseCardClick("Pre-Entrega Proyecto")} />
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="text-center mb-4" style={{color: 'var(--color-principal)', fontWeight: '600'}}>Evaluación Final</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <Card title="Proyecto Final" isClase={true} onClick={() => handleClaseCardClick("Proyecto Final")} />
            </div>
          </div>
        </section>
      </main>
      <Alert message={alertMessage} isVisible={isAlertVisible} onClose={handleCloseAlert} />
      <ClaseModal show={showClaseModal} onHide={handleCloseClaseModal} claseTitle={currentClaseTitle} />
    </Layout>
  );
}

export default App;
