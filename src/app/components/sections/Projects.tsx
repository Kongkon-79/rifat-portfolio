import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  projectsRef: React.RefObject<HTMLDivElement>;
  activeProjectTab: string;
  setActiveProjectTab: (tab: string) => void;
}

export function Projects({ projectsRef, activeProjectTab, setActiveProjectTab }: ProjectsProps) {
  const tabs = [
    { id: 'app', label: 'App' },
    { id: 'website', label: 'Website' },
    { id: 'dashboard', label: 'Dashboard' },
  ];

  return (
    <motion.div
      ref={projectsRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-[48px] sm:py-[56px] lg:py-[64px] px-[20px] md:px-[64px]"
    >
      <div className="max-w-[1312px] mx-auto flex flex-col gap-[24px] sm:gap-[30px] lg:gap-[36px] items-center">
        <div className="flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px] text-center">
          <p className="font-['Kumbh_Sans:Bold',sans-serif] font-bold text-[24px] sm:text-[32px] lg:text-[36px]">
            <span className="text-white">Featured </span>
            <span className="text-[#e36d66]">Project's</span>
          </p>
          <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[14px] sm:text-[18px] lg:text-[24px] text-white max-w-[800px]">
            Real projects, real impact. See how strategic design drives measurable business results.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-[10px] sm:gap-[16px] lg:gap-[24px] w-full md:w-[600px] lg:w-[500px] flex-wrap justify-center">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveProjectTab(tab.id)}
              className={`flex-1 min-w-[90px] sm:min-w-[100px] h-[44px] sm:h-[48px] rounded-[12px] border border-[#f86a40] font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold text-[14px] sm:text-[18px] lg:text-[20px] text-white transition-all duration-300 ${
                activeProjectTab === tab.id
                  ? 'bg-gradient-to-b from-[#fe793a] to-[#b26cb6] shadow-lg shadow-[rgba(255,107,53,0.3)]'
                  : 'hover:bg-[rgba(255,107,53,0.1)]'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] sm:gap-[28px] lg:gap-[32px] w-full">
          {[1, 2, 3].map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-[#292929] rounded-tl-[12px] rounded-tr-[12px] flex flex-col gap-[14px] sm:gap-[20px] lg:gap-[24px] pb-[12px] cursor-pointer transition-all duration-300 group overflow-hidden hover:shadow-xl hover:shadow-[rgba(255,107,53,0.2)]"
            >
              <motion.div
                className="bg-[#d9d9d9] h-[180px] sm:h-[250px] lg:h-[330px] rounded-tl-[12px] rounded-tr-[12px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex flex-col gap-[10px] sm:gap-[12px] px-[12px]">
                <p className="font-['Kumbh_Sans:Bold',sans-serif] font-bold text-[18px] sm:text-[22px] lg:text-[24px] text-white">
                  Title
                </p>
                <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[14px] sm:text-[16px] lg:text-[18px] text-[rgba(255,255,255,0.7)]">
                  Sub text ...........
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-b from-[#fe793a] to-[#b26cb6] border border-[#f86a40] rounded-[12px] h-[44px] sm:h-[48px] px-[16px] flex items-center justify-center gap-[10px] font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold text-[14px] sm:text-[18px] lg:text-[20px] text-white w-full md:w-auto transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(255,107,53,0.4)]"
                >
                  View Case Study
                  <ArrowUpRight className="size-[18px] sm:size-[20px]" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}