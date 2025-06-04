import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Users, Award, BookOpen, ArrowRight, ChevronDown } from 'lucide-react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import CompanyProfile from './CompanyProfile';
import TeamProfiles from './TeamProfiles';
import JobSpecifications from './JobSpecifications';
import LearningResources from './LearningResources';
import Footer from './Footer';
import SecretJokesArea from './SecretJokesArea';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showJokes, setShowJokes] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Secret keyboard combination: Ctrl + Shift + J
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'J') {
        event.preventDefault();
        setShowJokes(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <Navigation />
      <HeroSection />
      <CompanyProfile />
      <TeamProfiles />
      <JobSpecifications />
      <LearningResources />
      <Footer />
      
      <SecretJokesArea 
        isOpen={showJokes} 
        onClose={() => setShowJokes(false)} 
      />
    </motion.div>
  );
};

export default Home;