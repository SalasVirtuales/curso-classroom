import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Alert from './components/Alert/Alert';
import ClaseModal from './components/ClaseModal/ClaseModal'; // Importación de ClaseModal

function App() {
  // Estado para la Alerta de texto simple
  const [alertMessage, setAlertMessage] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  // Estado para el ClaseModal
  const [showClaseModal, setShowClaseModal] = useState(false);
  const [currentClaseTitle, setCurrentClaseTitle] = useState('');

  // Handler para tarjetas generales (no de Clase)
  const handleCardClick = (title) => {
    setAlertMessage(`Has hecho clic en: ${title}`);
    setIsAlertVisible(true);
  };

  // Handler para cerrar la alerta simple
  const handleCloseAlert = () => {
    setIsAlertVisible(false);
  };

  // Handler para clics en tarjetas "Clase" para abrir el ClaseModal
  const handleClaseCardClick = (title) => {
    setCurrentClaseTitle(title);
    setShowClaseModal(true);
  };

  // Handler para cerrar el ClaseModal
  const handleCloseClaseModal = () => {
    setShowClaseModal(false);
  };

  // Datos para las tarjetas generales
  const generalCardsData = [
    { title: "Bienvenida", iconClass: "fas fa-handshake" },
    { title: "Introducción", iconClass: "fas fa-lightbulb" },
    { title: "Links importantes", iconClass: "fas fa-external-link-alt" },
    { title: "Material de clase", iconClass: "fas fa-folder-open" },
    { title: "Presentación de clase", iconClass: "fas fa-chalkboard" },
    { title: "Ejercicios prácticos", iconClass: "fas fa-code" },
    { title: "Cuestionario", iconClass: "fas fa-clipboard-check" },
    // La tarjeta "Ver Video de Clase" no estaba en la imagen original como una tarjeta separada,
    // sino más bien como la sección principal de video. Si se desea como tarjeta, se puede añadir aquí.
    // { title: "Ver Video de Clase", iconClass: "fas fa-video" }
  ];

  return (
    <Layout>
      <Header />
      {/* La clase main-content es aplicada por el componente Layout a su contenedor hijo */}
      <main className="contenedor-principal mt-5">
        <section className="mb-5">
          <h2 className="text-center mb-4" style={{color: 'var(--color-principal)', fontWeight: '600'}}>Información General</h2>
          <div className="row g-4">
            {generalCardsData.map(card => (
              <div className="col-12 col-md-6 col-lg-3" key={card.title}>
                {/* Las tarjetas generales usan handleCardClick para la alerta simple */}
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
                {/* Las tarjetas de clase usan handleClaseCardClick para el modal de clase */}
                <Card title={`Clase ${num}`} isClase={true} onClick={() => handleClaseCardClick(`Clase ${num}`)} />
              </div>
            ))}
            <div className="col-12 col-md-6 col-lg-3">
              {/* La tarjeta de Pre-Entrega Proyecto también usa handleClaseCardClick */}
              <Card title="Pre-Entrega Proyecto" isClase={true} onClick={() => handleClaseCardClick("Pre-Entrega Proyecto")} />
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="text-center mb-4" style={{color: 'var(--color-principal)', fontWeight: '600'}}>Evaluación Final</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              {/* La tarjeta de Proyecto Final también usa handleClaseCardClick */}
              <Card title="Proyecto Final" isClase={true} onClick={() => handleClaseCardClick("Proyecto Final")} />
            </div>
          </div>
        </section>
      </main>
      {/* Componente de alerta simple */}
      <Alert message={alertMessage} isVisible={isAlertVisible} onClose={handleCloseAlert} />
      {/* Componente de modal de clase */}
      <ClaseModal show={showClaseModal} onHide={handleCloseClaseModal} claseTitle={currentClaseTitle} />
    </Layout>
  );
}

export default App;
