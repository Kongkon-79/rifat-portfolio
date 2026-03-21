import { motion } from 'motion/react';
import { Search, Layout, Lightbulb, Target, FolderTree, FlaskConical } from 'lucide-react';

interface SkillsProps {
  skillsRef: React.RefObject<HTMLDivElement>;
}

export function Skills({ skillsRef }: SkillsProps) {
  const skills = [
    {
      title: 'Ui / Ux Research',
      desc: 'We test your product with real users to identify pain points. This feedback helps us optimize designs for better user experience.',
      Icon: Search,
    },
    {
      title: 'MVP Ui Design',
      desc: 'We design functional MVPs focused on core features. We ensure quick validation of your idea with minimal investment.',
      Icon: Layout,
    },
    {
      title: 'Wireframing & Prototyping',
      desc: 'We create low-fidelity wireframes and high-fidelity prototypes to visualize your ideas and helps refine user interactions and layouts early on.',
      Icon: Lightbulb,
    },
    {
      title: 'Problem Solving',
      desc: 'I identify real user challenges and turn them into practical, user friendly digital solutions through research, strategy, and thoughtful design decisions.',
      Icon: Target,
    },
    {
      title: 'Information Architecture',
      desc: 'I organize content and structure information in a clear and logical way so users can navigate products easily and find what they need without confusion.',
      Icon: FolderTree,
    },
    {
      title: 'Usability Testing',
      desc: 'I test designs with real users to identify pain points, improve functionality, and ensure the final product delivers a smooth and effective experience.',
      Icon: FlaskConical,
    },
  ];

  const tools = [
    'Figma',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Jitter',
    'Notion',
    'Jira',
    'Discord Enthusiast',
    'Google Workspace',
  ];

  return (
    <motion.div
      ref={skillsRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-[48px] sm:py-[56px] lg:py-[64px] px-[20px] md:px-[64px]"
    >
      <div className="max-w-[1312px] mx-auto flex flex-col gap-[24px] sm:gap-[30px] lg:gap-[36px]">
        <p className="font-['Kumbh_Sans:Bold',sans-serif] font-bold text-[24px] sm:text-[32px] lg:text-[36px] text-center leading-[normal]">
          <span className="text-white">My </span>
          <span className="bg-clip-text bg-gradient-to-r from-[#c26e9b] text-[transparent] to-[#fa6b3e]">Skills</span>
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px] sm:gap-[16px] lg:gap-[20px]">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, borderColor: '#ff6b35' }}
              className="bg-[rgba(255,255,255,0.1)] border-2 border-[rgba(226,108,101,0.3)] rounded-[12px] p-[14px] sm:p-[16px] flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px] min-h-[200px] sm:min-h-[220px] lg:min-h-[234px] cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(255,107,53,0.2)]"
            >
              <div className="flex flex-col gap-[6px] sm:gap-[8px]">
                <div className="border-2 border-[rgba(255,107,53,0.25)] rounded-full size-[56px] sm:size-[64px] lg:size-[73.721px] relative">
                  <div className="absolute left-[4px] sm:left-[5px] top-[4px] sm:top-[5px] bg-gradient-to-b from-[#fe6b37] to-[#8e5cf0] rounded-[32px] size-[48px] sm:size-[56px] lg:size-[64px] flex items-center justify-center">
                    <skill.Icon className="size-[24px] sm:size-[28px] lg:size-[32px] text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <p className="font-['Kumbh_Sans:Bold',sans-serif] font-bold text-[20px] sm:text-[24px] lg:text-[28px] text-white">
                  {skill.title}
                </p>
              </div>
              <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] lg:text-[16px] text-white leading-[normal]">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Other Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[rgba(255,255,255,0.1)] rounded-[12px] py-[20px] sm:py-[28px] lg:py-[32px] flex flex-col gap-[20px] sm:gap-[28px] lg:gap-[32px] items-center"
        >
          <p className="font-['Kumbh_Sans:Bold',sans-serif] font-bold text-[18px] sm:text-[20px] lg:text-[24px] text-white text-center px-[16px]">
            <span>Other </span>
            <span className="text-[#e16c66]">Tools</span>
            <span> & Technologies</span>
          </p>
          <div className="flex gap-[6px] sm:gap-[8px] lg:gap-[11px] items-center justify-center flex-wrap px-[16px] sm:px-[24px] lg:px-[32px]">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,107,53,0.2)' }}
                className="bg-[rgba(255,255,255,0.1)] px-[8px] sm:px-[10px] lg:px-[12px] py-[5px] sm:py-[6px] lg:py-[8px] rounded-[99px] font-['Kumbh_Sans:Regular',sans-serif] text-[12px] sm:text-[14px] lg:text-[16px] text-[rgba(255,255,255,0.8)] cursor-pointer transition-all duration-300 hover:shadow-md hover:shadow-[rgba(255,107,53,0.3)]"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}