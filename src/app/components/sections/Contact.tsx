import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

export function Contact({ contactRef }: ContactProps) {
  const contactLinks = [
    { Icon: Mail, label: 'Email' },
    { Icon: Linkedin, label: 'LinkedIn' },
    { Icon: Github, label: 'GitHub' },
    { Icon: Twitter, label: 'Twitter' },
  ];

  return (
    <motion.div
      ref={contactRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-[48px] sm:py-[56px] lg:py-[64px] px-[20px] md:px-[64px]"
    >
      <div className="max-w-[1024px] mx-auto flex flex-col gap-[48px] sm:gap-[56px] lg:gap-[64px] items-center">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap gap-[8px] items-center justify-center font-['Kumbh_Sans:Bold',sans-serif] font-bold text-[28px] sm:text-[48px] lg:text-[60px]">
            <p className="text-white">Let's</p>
            <p className="text-[#ff6b35]">Connect</p>
          </div>
          <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[14px] sm:text-[18px] lg:text-[24px] text-[rgba(255,255,255,0.7)] max-w-[723px]">
            Have a project in mind? Let's create something amazing together
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px] sm:gap-[36px] lg:gap-[48px] w-full">
          {/* Left - Contact Links */}
          <div className="flex flex-col gap-[10px] sm:gap-[12px]">
            <p className="font-['Kumbh_Sans:Bold',sans-serif] font-bold text-[22px] sm:text-[28px] lg:text-[32px] text-white">
              Get in touch
            </p>
            <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] lg:text-[16px] text-[rgba(255,255,255,0.7)]">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex flex-col gap-[12px] sm:gap-[14px] lg:gap-[16px] mt-[12px] sm:mt-[16px]">
              {contactLinks.map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[12px] sm:rounded-[14px] h-[64px] sm:h-[72px] lg:h-[82px] px-[14px] sm:px-[17px] flex items-center gap-[12px] sm:gap-[16px] cursor-pointer transition-all duration-300 hover:border-[#ff6b35] hover:bg-[rgba(255,107,53,0.1)] hover:shadow-lg hover:shadow-[rgba(255,107,53,0.2)]"
                >
                  <motion.div
                    className="bg-gradient-to-b from-[#ff6b35] to-[#8b5cf6] rounded-full size-[40px] sm:size-[44px] lg:size-[48px] flex items-center justify-center shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <link.Icon className="size-[20px] sm:size-[22px] lg:size-[24px] text-white" />
                  </motion.div>
                  <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[14px] sm:text-[16px] lg:text-[18px] text-white">
                    {link.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[24px]">
            <div className="flex flex-col gap-[6px] sm:gap-[8px]">
              <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] text-[rgba(255,255,255,0.8)]">Name</p>
              <input
                type="text"
                placeholder="enter your name"
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[12px] sm:rounded-[14px] h-[46px] sm:h-[50px] px-[14px] sm:px-[16px] py-[12px] font-['Kumbh_Sans:Regular',sans-serif] text-[14px] sm:text-[16px] text-white placeholder:text-[rgba(255,255,255,0.5)] focus:outline-none focus:border-[#ff6b35] focus:ring-2 focus:ring-[rgba(255,107,53,0.2)] transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-[6px] sm:gap-[8px]">
              <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] text-[rgba(255,255,255,0.8)]">Email</p>
              <input
                type="email"
                placeholder="you@gmail.com"
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[12px] sm:rounded-[14px] h-[46px] sm:h-[50px] px-[14px] sm:px-[16px] py-[12px] font-['Kumbh_Sans:Regular',sans-serif] text-[14px] sm:text-[16px] text-white placeholder:text-[rgba(255,255,255,0.5)] focus:outline-none focus:border-[#ff6b35] focus:ring-2 focus:ring-[rgba(255,107,53,0.2)] transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-[6px] sm:gap-[8px]">
              <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] text-[rgba(255,255,255,0.8)]">
                Message
              </p>
              <textarea
                placeholder="Tell me about your project..."
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[12px] sm:rounded-[14px] h-[100px] sm:h-[120px] lg:h-[146px] px-[14px] sm:px-[16px] py-[12px] font-['Kumbh_Sans:Regular',sans-serif] text-[14px] sm:text-[16px] text-white placeholder:text-[rgba(255,255,255,0.5)] focus:outline-none focus:border-[#ff6b35] focus:ring-2 focus:ring-[rgba(255,107,53,0.2)] transition-all duration-300 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-b from-[#ff6b35] to-[#8b5cf6] rounded-[12px] sm:rounded-[14px] h-[50px] sm:h-[56px] font-['Kumbh_Sans:Bold',sans-serif] text-[14px] sm:text-[16px] text-white flex items-center justify-center gap-[10px] transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(255,107,53,0.4)]"
            >
              Send Message
              <Send className="size-[18px] sm:size-[20px]" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}