import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Alert from './components/Alert/Alert';

function App() {
  const [alertMessage, setAlertMessage] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleCardClick = (title) => {
    setAlertMessage(`Has hecho clic en: ${title}`);
    setIsAlertVisible(true);
  };

  const handleCloseAlert = () => {
    setIsAlertVisible(false);
  };

  const generalCardsData = [
    { title: "Bienvenida", iconClass: "fas fa-handshake" },
    { title: "Introducción", iconClass: "fas fa-lightbulb" },
    { title: "Links importantes", iconClass: "fas fa-external-link-alt" },
    { title: "Material de clase", iconClass: "fas fa-folder-open" },
    // The following were not in the list but were in the original HTML structure.
    // Adding them to match the visual structure of the example.
    { title: "Presentación de clase", iconClass: "fas fa-chalkboard" },
    { title: "Ejercicios prácticos", iconClass: "fas fa-code" },
    { title: "Cuestionario", iconClass: "fas fa-clipboard-check" },
    // The following card "Ver Video de Clase" was in the original HTML, but no icon was specified.
    // It seems appropriate to make it similar to other general cards.
    { title: "Ver Video de Clase", iconClass: "fas fa-video" }
  ];

  return (
    <Layout>
      <Header />
      {/* main-content class is applied by Layout component to its children wrapper */}
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
                <Card title={`Clase ${num}`} isClase={true} onClick={() => handleCardClick(`Clase ${num}`)} />
              </div>
            ))}
            <div className="col-12 col-md-6 col-lg-3">
              <Card title="Pre-Entrega Proyecto" isClase={true} onClick={() => handleCardClick("Pre-Entrega Proyecto")} />
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="text-center mb-4" style={{color: 'var(--color-principal)', fontWeight: '600'}}>Evaluación Final</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <Card title="Proyecto Final" isClase={true} onClick={() => handleCardClick("Proyecto Final")} />
            </div>
          </div>
        </section>
      </main>
      <Alert message={alertMessage} isVisible={isAlertVisible} onClose={handleCloseAlert} />
    </Layout>
  );
}

export default App;
