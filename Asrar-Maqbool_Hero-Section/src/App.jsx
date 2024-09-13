import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-container">
        <Navbar />
        <Hero />
      </div>
      <div style={{ minHeight: "200vh" }}></div>
    </>
  );
}

export default App;
