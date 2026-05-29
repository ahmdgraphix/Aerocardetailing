import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import FloatingPlane from './components/FloatingPlane';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import FleetPricing from './components/FleetPricing';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-metallic font-sans selection:bg-cyan/30 selection:text-white scroll-smooth">
      {/* Navigation */}
      <Navbar />

      {/* 100vh Premium Preloader */}
      <Preloader />

      {/* Decorative SVG background plane */}
      <FloatingPlane />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col gap-12 md:gap-24">
        <Hero />
        <About />
        <Process />
        <Services />
        <FleetPricing />
        <Booking />
      </main>

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
