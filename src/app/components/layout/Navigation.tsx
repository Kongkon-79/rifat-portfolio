import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>, sectionName: string) => void;
  heroRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export function Navigation({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  heroRef,
  skillsRef,
  projectsRef,
  aboutRef,
  contactRef,
}: NavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-[32px] sm:pt-[42px] px-[20px] md:px-[64px]"
    >
      <div className="bg-[rgba(0,0,0,0.3)] backdrop-blur-sm w-full max-w-[1312px] h-[70px] sm:h-[84px] flex items-center justify-between overflow-clip p-[12px] sm:p-[16px] rounded-[24px] sm:rounded-[32px] border border-[rgba(255,255,255,0.1)]">
        <p className="bg-clip-text bg-gradient-to-b font-['Kumbh_Sans:Regular',sans-serif] from-[#ff7639] leading-[normal] not-italic text-[32px] sm:text-[40px] lg:text-[48px] text-[transparent] to-[#b76eb1] whitespace-nowrap">
          RH
        </p>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-[12px] items-center justify-center">
          <button onClick={() => scrollToSection(heroRef, 'home')} className="flex items-center px-[12px] py-[8px]">
            <p
              className={`font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[16px] whitespace-nowrap transition-all duration-300 ${
                activeSection === 'home' ? 'text-[#ff6b35]' : 'text-white hover:text-[#ff6b35]'
              }`}
              style={{ fontVariationSettings: "'YOPQ' 300" }}
            >
              Home
            </p>
          </button>
          <button onClick={() => scrollToSection(skillsRef, 'skills')} className="flex items-center px-[12px] py-[8px]">
            <p
              className={`font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[16px] whitespace-nowrap transition-all duration-300 ${
                activeSection === 'skills' ? 'text-[#ff6b35]' : 'text-white hover:text-[#ff6b35]'
              }`}
              style={{ fontVariationSettings: "'YOPQ' 300" }}
            >
              Skills
            </p>
          </button>
          <button onClick={() => scrollToSection(projectsRef, 'projects')} className="flex items-center px-[12px] py-[8px]">
            <p
              className={`font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[16px] whitespace-nowrap transition-all duration-300 ${
                activeSection === 'projects' ? 'text-[#ff6b35]' : 'text-white hover:text-[#ff6b35]'
              }`}
              style={{ fontVariationSettings: "'YOPQ' 300" }}
            >
              Case Study's
            </p>
          </button>
          <button onClick={() => scrollToSection(projectsRef, 'projects')} className="flex items-center px-[12px] py-[8px]">
            <p
              className={`font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[16px] whitespace-nowrap transition-all duration-300 ${
                activeSection === 'projects' ? 'text-[#ff6b35]' : 'text-white hover:text-[#ff6b35]'
              }`}
              style={{ fontVariationSettings: "'YOPQ' 300" }}
            >
              Live Project
            </p>
          </button>
          <button onClick={() => scrollToSection(aboutRef, 'about')} className="flex items-center px-[12px] py-[8px]">
            <p
              className={`font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[16px] whitespace-nowrap transition-all duration-300 ${
                activeSection === 'about' ? 'text-[#ff6b35]' : 'text-white hover:text-[#ff6b35]'
              }`}
              style={{ fontVariationSettings: "'YOPQ' 300" }}
            >
              About
            </p>
          </button>
        </div>

        <div className="flex gap-[12px] sm:gap-[16px] lg:gap-[24px] items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(contactRef, 'contact')}
            className="hidden lg:flex h-[48px] items-center justify-center px-[16px] py-[8px] rounded-[12px] border border-[#f86a40] relative hover:bg-[rgba(255,107,53,0.1)] transition-all duration-300"
          >
            <p
              className="font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[20px] text-white whitespace-nowrap"
              style={{ fontVariationSettings: "'YOPQ' 300" }}
            >
              Hire Me
            </p>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white rounded-[20px] sm:rounded-[24px] size-[40px] sm:size-[48px] flex items-center justify-center p-[10px] sm:p-[12px] shadow-lg"
          >
            {isMenuOpen ? <X className="size-[20px] sm:size-[24px] text-black" /> : <Menu className="size-[20px] sm:size-[24px] text-black" />}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}