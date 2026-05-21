
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LiveUsers from './components/LiveUsers';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div>
        <Hero />
        <Features />
        <LiveUsers />
        <Footer />
      </div>
      
      
    </div>
  );
}

export default App;
