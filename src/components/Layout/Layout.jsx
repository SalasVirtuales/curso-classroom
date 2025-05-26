import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css'; // Import the CSS

const Layout = ({ children }) => {
  return (
    <div className="layout-container"> {/* Added for flex styling */}
      <Navbar />
      <main className="main-content"> {/* Wrapper for children with flex-grow */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
