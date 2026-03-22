import { motion } from 'motion/react';
import { Search, Users, Lightbulb, Layout, FlaskConical, Rocket } from 'lucide-react';

interface DesignProcessProps {
  processRef: React.RefObject<HTMLDivElement>;
}

export function DesignProcess({ processRef }: DesignProcessProps) {
  const steps = [
    {
      num: '01',
      title: 'Empathize',
      desc: 'Research users, analyze competitors, and define the problem space.',
      Icon: Search,
      side: 'left' as const,
      top: 0,
    },
    {
      num: '02',
      title: 'Discover',
      desc: 'Create personas, journey maps, and understand pain points deeply.',
      Icon: Users,
      side: 'right' as const,
      top: 198,
    },
    {
      num: '03',
      title: 'Ideate',
      desc: 'Brainstorm solutions, sketch concepts, and explore possibilities.',
      Icon: Lightbulb,
      side: 'left' as const,
      top: 396,
    },
    {
      num: '04',
      title: 'Design',
      desc: 'Create wireframes, high-fidelity mockups, and design systems.',
      Icon: Layout,
      side: 'right' as const,
      top: 594,
    },
    {
      num: '05',
      title: 'Test',
      desc: 'Validate with users, iterate based on feedback, and refine solutions.',
      Icon: FlaskConical,
      side: 'left' as const,
      top: 792,
    },
    {
      num: '06',
      title: 'Launch',
      desc: 'Ship the product, monitor metrics, and continuously improve.',
      Icon: Rocket,
      side: 'right' as const,
      top: 990,
    },
  ];

  return (
    <motion.div
      ref={processRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-[48px] sm:py-[56px] lg:py-[64px] px-[20px] md:px-[64px]"
    >
      <div className="max-w-[944px] mx-auto flex flex-col gap-[28px] sm:gap-[36px] lg:gap-[42px] items-center relative">
        <div className="flex flex-col gap-[14px] sm:gap-[20px] lg:gap-[24px] text-center w-full md:w-[744px]">
          <p className="font-['Kumbh_Sans:Bold',sans-serif] text-[24px] sm:text-[32px] lg:text-[36px] text-white leading-[1.3] sm:leading-[1.4] lg:leading-[60px]">
            <span>My </span>
            <span className="text-[#ff6b35]">Design</span>
            <span> Process</span>
          </p>
          <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[14px] sm:text-[18px] lg:text-[20px] text-[#9f9f9f]">
            A structured, iterative approach that ensures every design decision is intentional and user-validated
          </p>
        </div>

        {/* Process Steps - Mobile/Tablet Layout */}
        <div className="flex flex-col gap-[28px] sm:gap-[32px] w-full md:hidden">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex gap-[14px] sm:gap-[16px] items-start cursor-pointer"
            >
              <div className="border-2 border-[#ff6b35] rounded-full size-[56px] sm:size-[60px] relative shrink-0 animate-[design-process-border-blink_1.6s_ease-in-out_infinite]">
                <div className="absolute inset-1 bg-gradient-to-b from-[#ff6b35] to-[#8b5cf6] rounded-full shadow-lg flex items-center justify-center">
                  <step.Icon className="size-[22px] sm:size-[24px] text-white" />
                </div>
              </div>
              <div className="flex flex-col gap-[4px] flex-1">
                <p className="font-['Kumbh_Sans:Bold',sans-serif] text-[32px] sm:text-[40px] text-[#f1f1f1] leading-none">{step.num}</p>
                <p className="font-['Kumbh_Sans:Bold',sans-serif] text-[20px] sm:text-[24px] text-[#f1f1f1]">{step.title}</p>
                <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[14px] sm:text-[16px] text-[#9f9f9f]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps - Desktop Layout */}
        <div className="hidden md:block relative w-full md:w-[944px] h-[1100px] lg:h-[1152px]">
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#43223B]" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: step.side === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`absolute flex gap-[20px] lg:gap-[24px] items-center h-[150px] lg:h-[162px] w-[470px] lg:w-[508px] cursor-pointer ${
                step.side === 'left' ? 'left-0' : 'left-[400px] lg:left-[436px]'
              }`}
              style={{ top: `${step.top * 0.9}px` }}
            >
              {step.side === 'right' ? (
                <>
                  <div className="border-2 border-[#ff6b35] rounded-full size-[68px] lg:size-[73.721px] relative shrink-0 animate-[design-process-border-blink_1.6s_ease-in-out_infinite]">
                    <div className="absolute inset-[4.5px] lg:inset-[4.86px] bg-gradient-to-b from-[#ff6b35] to-[#8b5cf6] rounded-full shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] flex items-center justify-center">
                      <step.Icon className="size-[28px] lg:size-[32px] text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px] lg:gap-[8px] text-left">
                    <p className="font-['Kumbh_Sans:Bold',sans-serif] text-[50px] lg:text-[60px] text-[#f1f1f1] leading-none">
                      {step.num}
                    </p>
                    <p className="font-['Kumbh_Sans:Bold',sans-serif] text-[26px] lg:text-[30px] text-[#f1f1f1]">{step.title}</p>
                    <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[16px] lg:text-[18px] text-[#9f9f9f]">{step.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-[6px] lg:gap-[8px] text-right">
                    <p className="font-['Kumbh_Sans:Bold',sans-serif] text-[50px] lg:text-[60px] text-[#f1f1f1] leading-none">
                      {step.num} 
                    </p>
                    <p className="font-['Kumbh_Sans:Bold',sans-serif] text-[26px] lg:text-[30px] text-[#f1f1f1]">{step.title}</p>
                    <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[16px] lg:text-[18px] text-[#9f9f9f]">{step.desc}</p>
                  </div>
                  <div className="border-2 border-[#ff6b35] rounded-full size-[68px] lg:size-[73.721px] relative shrink-0 animate-[design-process-border-blink_1.6s_ease-in-out_infinite]">
                    <div className="absolute inset-[4.5px] lg:inset-[4.86px] bg-gradient-to-b from-[#ff6b35] to-[#8b5cf6] rounded-full shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] flex items-center justify-center">
                      <step.Icon className="size-[28px] lg:size-[32px] text-white" />
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black px-[14px] sm:px-[20px] lg:px-[24px] py-[10px] sm:py-[11px] lg:py-[12px] rounded-[99px] flex gap-[10px] sm:gap-[14px] lg:gap-[16px] items-center"
        >
          <div className="flex gap-0 relative h-[28px] sm:h-[32px] w-[68px] sm:w-[80px] shrink-0">
            <div className="absolute left-0 bg-[#ff6b35] rounded-full size-[28px] sm:size-[32px]" />
            <div className="absolute left-[20px] sm:left-[24px] bg-[#8b5cf6] rounded-full size-[28px] sm:size-[32px]" />
            <div className="absolute left-[40px] sm:left-[48px] bg-[#ff6b35] rounded-full size-[28px] sm:size-[32px]" />
          </div>
          <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] lg:text-[16px] text-white">
            A user-centered, iterative approach I follow in real projects
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
