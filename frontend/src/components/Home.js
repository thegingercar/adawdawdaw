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

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
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
    </motion.div>
  );
};

export default Home;