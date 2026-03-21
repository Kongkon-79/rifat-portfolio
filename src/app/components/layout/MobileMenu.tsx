import { motion, AnimatePresence } from 'motion/react';

interface MobileMenuProps {
  isMenuOpen: boolean;
  activeSection: string;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>, sectionName: string) => void;
  heroRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export function MobileMenu({
  isMenuOpen,
  activeSection,
  scrollToSection,
  heroRef,
  skillsRef,
  projectsRef,
  aboutRef,
  contactRef,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed top-[64px] right-0 bottom-0 w-[280px] bg-[rgba(10,1,24,0.98)] backdrop-blur-xl z-40 p-[24px] flex flex-col gap-[16px] lg:hidden"
        >
          <button
            onClick={() => scrollToSection(heroRef, 'home')}
            className={`px-[16px] py-[12px] rounded-[8px] font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold text-[18px] text-left transition-all duration-300 ${
              activeSection === 'home'
                ? 'bg-gradient-to-r from-[#ff6b35] to-[#8b5cf6] text-white'
                : 'text-white hover:bg-[rgba(255,107,53,0.1)]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(skillsRef, 'skills')}
            className={`px-[16px] py-[12px] rounded-[8px] font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold text-[18px] text-left transition-all duration-300 ${
              activeSection === 'skills'
                ? 'bg-gradient-to-r from-[#ff6b35] to-[#8b5cf6] text-white'
                : 'text-white hover:bg-[rgba(255,107,53,0.1)]'
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection(projectsRef, 'projects')}
            className={`px-[16px] py-[12px] rounded-[8px] font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold text-[18px] text-left transition-all duration-300 ${
              activeSection === 'projects'
                ? 'bg-gradient-to-r from-[#ff6b35] to-[#8b5cf6] text-white'
                : 'text-white hover:bg-[rgba(255,107,53,0.1)]'
            }`}
          >
            Case Study's
          </button>
          <button
            onClick={() => scrollToSection(projectsRef, 'projects')}
            className={`px-[16px] py-[12px] rounded-[8px] font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold text-[18px] text-left transition-all duration-300 ${
              activeSection === 'projects'
                ? 'bg-gradient-to-r from-[#ff6b35] to-[#8b5cf6] text-white'
                : 'text-white hover:bg-[rgba(255,107,53,0.1)]'
            }`}
          >
            Live Project
          </button>
          <button
            onClick={() => scrollToSection(aboutRef, 'about')}
            className={`px-[16px] py-[12px] rounded-[8px] font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold text-[18px] text-left transition-all duration-300 ${
              activeSection === 'about'
                ? 'bg-gradient-to-r from-[#ff6b35] to-[#8b5cf6] text-white'
                : 'text-white hover:bg-[rgba(255,107,53,0.1)]'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(contactRef, 'contact')}
            className="mt-[16px] bg-gradient-to-b from-[#fe793a] to-[#b26cb6] border border-[#f86a40] rounded-[12px] px-[16px] py-[12px] font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold text-[18px] text-white"
          >
            Hire Me
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
