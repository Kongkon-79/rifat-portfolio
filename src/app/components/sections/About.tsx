import { motion } from 'motion/react';
import { Briefcase, Users, Coffee, Award } from 'lucide-react';

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

export function About({ aboutRef }: AboutProps) {
  const stats = [
    { icon: Briefcase, number: '50+', label: 'Projects Completed' },
    { icon: Users, number: '20+', label: 'Happy Clients' },
    { icon: Coffee, number: '100+', label: 'Cups of Coffee' },
    { icon: Award, number: '1.5+', label: 'Years Experience' },
  ];

  return (
    <motion.div
      ref={aboutRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-[48px] sm:py-[56px] lg:py-[64px] px-[20px] md:px-[64px]"
    >
      <div className="max-w-[1312px] mx-auto flex flex-col gap-[24px] sm:gap-[28px] lg:gap-[32px]">
        <div className="flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px] text-center">
          <p className="font-['Kumbh_Sans:Bold',sans-serif] font-bold text-[24px] sm:text-[32px] lg:text-[36px] leading-[normal]">
            <span className="text-white">About </span>
            <span className="bg-clip-text bg-gradient-to-r from-[#c26e9b] text-[transparent] to-[#fa6b3e]">Me</span>
          </p>
          <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[14px] sm:text-[18px] lg:text-[24px] text-[rgba(255,255,255,0.7)] max-w-[900px] mx-auto">
            I am a passionate UI and UX Designer who solves real world problems through thoughtful and user centered
            digital solutions. I believe great design is not just about visuals, but about creating simple, intuitive,
            and meaningful experiences.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] sm:gap-[16px] lg:gap-[24px]">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[12px] sm:rounded-[16px] p-[16px] sm:p-[20px] lg:p-[25px] flex flex-col gap-[10px] sm:gap-[12px] items-center cursor-pointer transition-all duration-300 hover:border-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] group"
            >
              <motion.div
                className="bg-gradient-to-b from-[#ff6b35] to-[#8b5cf6] rounded-full size-[40px] sm:size-[44px] lg:size-[48px] flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="size-[20px] sm:size-[22px] lg:size-[24px] text-white" strokeWidth={2} />
              </motion.div>
              <motion.p
                className="font-['Kumbh_Sans:Bold',sans-serif] font-bold text-[20px] sm:text-[26px] lg:text-[30px] text-white"
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.1, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
              >
                {stat.number}
              </motion.p>
              <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[12px] sm:text-[14px] lg:text-[16px] text-[rgba(255,255,255,0.7)] text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}