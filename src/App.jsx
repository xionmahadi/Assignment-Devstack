import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  // Load technology JSON data on mount
  useEffect(() => {
    fetch('/technologies.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load technologies');
        }
        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading JSON data:', error);
        // Fallback fetch path if served differently
        fetch('/src/data/technologies.json')
          .then((res) => res.json())
          .then((fallbackData) => {
            setTechnologies(fallbackData);
            setLoading(false);
          })
          .catch(() => setLoading(false));
      });
  }, []);

  // Add technology to stack with duplicate check
  const handleAddToStack = (tech) => {
    const isAlreadyInStack = stack.some((item) => item.id === tech.id);

    if (isAlreadyInStack) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  // Remove individual technology from stack
  const handleRemove = (id, name) => {
    const updatedStack = stack.filter((item) => item.id !== id);
    setStack(updatedStack);
    toast.info(`${name} removed from your stack.`);
  };

  // Remove all technologies from stack
  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('All technologies removed from your stack.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
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
        theme="light"
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero / Banner */}
        <Hero />

        {/* Technologies Grid & Your Stack Sidebar */}
        <Technologies
          technologies={technologies}
          loading={loading}
          stack={stack}
          onAddToStack={handleAddToStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
