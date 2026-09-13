import React, { useState, useEffect } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';
import YourStack from './components/YourStack';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import AuthModals from './components/AuthModals';
import LearnMoreModal from './components/LearnMoreModal';
import { Sparkles, Layers } from 'lucide-react';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Persistent stack items in localStorage
  const [selectedStack, setSelectedStack] = useState(() => {
    try {
      const saved = localStorage.getItem('devstack_selected');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal states
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'signin' });
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('devstack_selected', JSON.stringify(selectedStack));
    } catch (e) {
      console.error('Failed to save stack to local storage', e);
    }
  }, [selectedStack]);

  // Load JSON Data with useEffect
  const loadTechnologies = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/technologies.json');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setTechnologies(data);
    } catch (err) {
      console.error('Error fetching technologies:', err);
      setError(err.message || 'Failed to load technologies');
    } finally {
      // Keep loading briefly for smooth transition
      setTimeout(() => {
        setLoading(false);
      }, 350);
    }
  };

  useEffect(() => {
    loadTechnologies();
  }, []);

  // Add to stack handler with duplicate prevention
  const handleAddToStack = (tech) => {
    const isAlreadyInStack = selectedStack.some((item) => item.id === tech.id);
    
    if (isAlreadyInStack) {
      toast.warning(`${tech.name} is already in your stack!`, {
        icon: '⚠️'
      });
      return;
    }

    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      icon: '🚀'
    });
  };

  // Remove single item handler
  const handleRemoveItem = (techId, techName) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== techId));
    toast.info(`Removed ${techName} from your stack`, {
      icon: '🗑️'
    });
  };

  // Remove all items handler
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    const count = selectedStack.length;
    setSelectedStack([]);
    toast.error(`Cleared ${count} ${count === 1 ? 'technology' : 'technologies'} from your stack`, {
      icon: '🧹'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-gray-100 relative">
      
      {/* Toast Notification Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      {/* Navbar */}
      <Navbar
        onOpenSignIn={() => setAuthModal({ isOpen: true, mode: 'signin' })}
        onOpenSignUp={() => setAuthModal({ isOpen: true, mode: 'signup' })}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('technologies');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onLearnMoreClick={() => setLearnMoreOpen(true)}
        />

        {/* Technologies & Your Stack Section */}
        <section id="technologies" className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/10 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gradient-subtle border border-brand-pink/30 text-xs font-semibold text-brand-pink mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interactive Stack Customizer</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white">
                  Explore & <span className="text-gradient">Assemble Technologies</span>
                </h2>
                <p className="text-sm text-gray-400 mt-1 max-w-xl">
                  Select key building blocks for your frontend, backend, database, and infrastructure layers.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                  Stack Size: <strong className="text-brand-pink">{selectedStack.length}</strong> items
                </span>
              </div>
            </div>

            {/* Layout: Tech Grid (8 cols) + Your Stack (4 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Technology Grid */}
              <div className="lg:col-span-8">
                <TechGrid
                  technologies={technologies}
                  loading={loading}
                  error={error}
                  selectedStack={selectedStack}
                  onAddToStack={handleAddToStack}
                  onRetry={loadTechnologies}
                />
              </div>

              {/* Right Column: Your Stack Sidebar Panel */}
              <div className="lg:col-span-4">
                <YourStack
                  selectedStack={selectedStack}
                  onRemoveItem={handleRemoveItem}
                  onRemoveAll={handleRemoveAll}
                />
              </div>

            </div>

          </div>
        </section>

        {/* Project Templates Section */}
        <ProjectsSection />

        {/* About Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Auth Modals */}
      <AuthModals
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        onSwitchMode={(mode) => setAuthModal({ isOpen: true, mode })}
      />

      {/* Learn More Modal */}
      <LearnMoreModal
        isOpen={learnMoreOpen}
        onClose={() => setLearnMoreOpen(false)}
      />

    </div>
  );
}
