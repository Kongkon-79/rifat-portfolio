import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navigation } from './components/layout/Navigation';
import { MobileMenu } from './components/layout/MobileMenu';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { DesignProcess } from './components/sections/DesignProcess';
import { Contact } from './components/sections/Contact';
import { FinalCTA } from './components/sections/Let_s__Connect___Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { MouseFollower } from './components/ui/MouseFollower';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeProjectTab, setActiveProjectTab] = useState('app');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ['start start', 'end end'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, sectionName: string) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionName);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: heroRef, name: 'home' },
        { ref: aboutRef, name: 'about' },
        { ref: skillsRef, name: 'skills' },
        { ref: projectsRef, name: 'projects' },
        { ref: processRef, name: 'process' },
        { ref: contactRef, name: 'contact' },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={mainRef} className="bg-[#0a0118] relative w-full min-h-screen overflow-x-hidden">
      {/* Mouse Follower */}
      <MouseFollower />

      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118] via-[#1a0a2e] to-[#0a0118] opacity-40" />
        
        {/* Floating orbs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Content - relative positioning for z-index */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation
          activeSection={activeSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
          heroRef={heroRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />

        {/* Mobile Menu */}
        <MobileMenu
          isMenuOpen={isMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          heroRef={heroRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />

        {/* Hero Section */}
        <Hero heroRef={heroRef} scrollToSection={scrollToSection} contactRef={contactRef} />

        {/* About Section */}
        <About aboutRef={aboutRef} />

        {/* Skills Section */}
        <Skills skillsRef={skillsRef} />

        {/* Projects Section */}
        <Projects
          projectsRef={projectsRef}
          activeProjectTab={activeProjectTab}
          setActiveProjectTab={setActiveProjectTab}
        />

        {/* Design Process Section */}
        <DesignProcess processRef={processRef} />

        {/* Contact Section */}
        <Contact contactRef={contactRef} />

        {/* Final CTA Section */}
        <FinalCTA scrollToSection={scrollToSection} contactRef={contactRef} />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </div>
  );
}