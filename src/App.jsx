import './App.css';

import OracleLogoName from './assets/oracle-LogoName.svg';
import OracleLogo from './assets/oracle-Logo.svg';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Solutions from './Components/Solutions';
import Testimonials from './Components/Testimonials';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar logo={OracleLogo} logoName={OracleLogoName} />
      
      <main className="main-content">
        <Hero />
        <Features />
        <Solutions />
        <Testimonials />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;