import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import DogsPage from "./Components/API/DogsPage"
import Footer from "./Components/Footer/Footer"


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DogsPage />
      <Footer />
    </div>
  );
}

export default App;
