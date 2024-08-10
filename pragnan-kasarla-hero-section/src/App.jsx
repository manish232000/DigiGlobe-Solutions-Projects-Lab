import React, { useState } from 'react';
import Herosection from './components/Herosection';
import Navbar from './components/Navbar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Herosection />
    </>
  );
}

export default App;
