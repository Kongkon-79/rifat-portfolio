import { motion } from 'motion/react';
import svgPaths from '../../../imports/svg-jtrwnalw6c';
import imgImage18 from 'figma:asset/a170d84071fb2f2628fd240349dbf27681ca9a59.png';

interface FinalCTAProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>, sectionName: string) => void;
  contactRef: React.RefObject<HTMLDivElement>;
}

export function FinalCTA({ scrollToSection, contactRef }: FinalCTAProps) {
  const socialIcons = [
    {
      Component: () => (
        <svg className="size-[36px] md:size-[42px]" fill="none" viewBox="0 0 42 42">
          <path d={svgPaths.p2286e100} fill="#1877F2" />
          <path d={svgPaths.p13de6b80} fill="white" />
        </svg>
      ),
    },
    {
      Component: () => (
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-[32px] sm:size-[38px] lg:size-[42px]"
        >
          <circle cx="21" cy="21" r="21" fill="#25D366" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.824 11.222c-2.604-2.608-6.073-4.044-9.765-4.049-7.606 0-13.801 6.19-13.801 13.801 0 2.432.634 4.809 1.844 6.9l-1.957 7.153 7.316-1.92a13.75 13.75 0 006.594 1.68h.004c7.606 0 13.797-6.19 13.801-13.801a13.73 13.73 0 00-4.036-9.765zm-9.76 21.235h-.005a11.4 11.4 0 01-5.838-1.6l-.42-.248-4.343 1.138 1.16-4.234-.274-.433a11.39 11.39 0 01-1.755-6.107c.004-6.325 5.15-11.47 11.479-11.47 3.066 0 5.943 1.197 8.11 3.364s3.36 5.053 3.356 8.115c0 6.329-5.149 11.474-11.47 11.474zm6.291-8.593c-.344-.172-2.041-1.008-2.356-1.122-.315-.113-.546-.172-.777.172-.231.345-.89 1.122-1.092 1.353-.201.23-.403.26-.747.087-.344-.172-1.457-.538-2.772-1.714-1.025-.916-1.718-2.045-1.92-2.39-.2-.344-.02-.533.153-.705.155-.155.344-.403.516-.605.172-.201.23-.344.344-.575.113-.23.059-.432-.029-.604-.088-.172-.777-1.87-1.062-2.563-.282-.672-.563-.58-.777-.592-.202-.008-.433-.013-.66-.013-.231 0-.605.088-.92.433-.315.344-1.205 1.18-1.205 2.876 0 1.697 1.235 3.34 1.407 3.566.172.231 2.432 3.713 5.893 5.208.823.357 1.465.567 1.965.727.827.264 1.579.226 2.171.138.664-.1 2.041-.835 2.327-1.637.286-.806.286-1.495.202-1.637-.084-.143-.315-.227-.66-.403z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      Component: () => ( 
        <svg className="size-[36px] md:size-[42px]" fill="none" viewBox="0 0 42 42">
          <path d={svgPaths.p99cfc00} fill="#007AB9" />
          <path d={svgPaths.p352cc800} fill="#F1F2F2" />
        </svg>
      ),
    },
    {
      Component: () => (
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-[32px] sm:size-[38px] lg:size-[42px]"
        >
          <circle cx="21" cy="21" r="21" fill="#4176FA" />
          <path
            d="M28.528 17.348c-6.065 0-6.073 6.042-6.073 6.073 0 0-.416 6.05 6.073 6.05 0 0 5.412.308 5.412-4.21h-2.779s.092 1.7-2.54 1.7c0 0-2.779.185-2.779-2.748h8.19s.901-6.866-2.504-6.866zm-2.717 4.75s.338-2.433 2.779-2.433c2.448 0 2.41 2.433 2.41 2.433h-5.189zm-6.943-1.556s2.41-.177 2.41-3.01c0-2.825-1.97-4.21-4.472-4.21H8.576v15.818h8.228s5.027.154 5.027-4.672c0 0 .216-3.926-2.963-3.926zm-6.666-4.41h4.603s1.116 0 1.116 1.647c0 1.647-.654 1.886-1.401 1.886h-4.318v-3.533zm4.372 10.2h-4.372V22.097h4.603s1.67-.015 1.663 2.178c0 1.848-1.239 2.04-1.894 2.056zm8.552-12.078V16.2h6.528v-1.947h-6.528z"
            fill="#F1F2F2"
          />
        </svg>
      ),
    },
    // { src: imgImage18 },
    {
      icon: 'dribbble',
      Component: () => (
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-[32px] sm:size-[38px] lg:size-[42px]"
        >
          <circle
            cx="21"
            cy="21"
            r="21"
            fill="url(#paint0_linear_dribbble)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.193 20.275c-.28-.646-.571-1.29-.881-1.927 2.65-1.148 4.78-2.706 6.366-4.682 1.548 1.828 2.52 4.15 2.663 6.693-2.954-.484-5.671-.511-8.148-.084zm3.12 10.178c-.503-2.699-1.24-5.337-2.203-7.911 2.152-.304 4.52-.226 7.11.224-.5 3.197-2.324 5.957-4.907 7.687zm-13.292-.492c2.259-3.544 5.143-5.85 8.716-6.915 1.062 2.768 1.847 5.635 2.344 8.558-3.722 1.438-7.904.82-11.06-.643zm-4.377-9.253c4.414-.007 8.223-.514 11.413-1.518.267.545.523 1.092.769 1.644-3.876 1.21-7.071 3.694-9.563 7.433-1.794-2.153-2.687-4.764-2.619-7.559zm6.226-9.843c1.527 2 2.88 4.06 4.057 6.174-2.789.821-6.115 1.243-9.963 1.269.795-3.252 2.985-5.957 5.906-7.443zm12.063 1.141c-1.381 1.783-3.29 3.192-5.72 4.221-1.165-2.134-2.497-4.216-4.001-6.238 3.406-.868 6.927-.14 9.721 2.017zM21 7.234c-7.603 0-13.767 6.163-13.767 13.766 0 7.603 6.164 13.767 13.767 13.767 7.603 0 13.766-6.164 13.766-13.767C34.766 13.397 28.603 7.234 21 7.234z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_dribbble"
              x1="5.564"
              y1="6.761"
              x2="38.898"
              y2="31.99"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D31F61" />
              <stop offset="1" stopColor="#E9568C" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <div className="relative h-[450px] sm:h-[550px] lg:h-[600px] overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'linear-gradient(157.38deg, rgb(0, 0, 0) 0%, rgb(16, 24, 40) 50%, rgb(0, 0, 0) 100%)' }}
      />

      {/* Radial Gradients */}
      <div
        className="absolute h-[350px] sm:h-[500px] lg:h-[602.25px] right-[-250px] sm:right-[-180px] lg:right-[-130px] opacity-15 sm:opacity-20 rounded-full top-[-2px] w-[350px] sm:w-[500px] lg:w-[602.25px]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,107,53,1) 0%, rgba(191,80,40,0.75) 17.5%, rgba(128,54,27,0.5) 35%, rgba(64,27,13,0.25) 52.5%, rgba(0,0,0,0) 70%)',
        }}
      />
      <div
        className="absolute h-[400px] sm:h-[600px] lg:h-[772px] left-[-250px] sm:left-[-280px] lg:left-[-255px] opacity-15 sm:opacity-20 rounded-full top-[64px] w-[400px] sm:w-[600px] lg:w-[800px]"
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,1) 0%, rgba(104,69,185,0.75) 17.5%, rgba(70,46,123,0.5) 35%, rgba(35,23,62,0.25) 52.5%, rgba(0,0,0,0) 70%)',
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex items-center justify-center px-[20px] sm:px-[32px]"
      >
        <div className="flex flex-col gap-[18px] sm:gap-[20px] lg:gap-[23px] items-center w-full max-w-[832px]">
          <div className="flex flex-col gap-[18px] sm:gap-[22px] lg:gap-[25px] text-center">
            <div className="flex flex-col gap-[8px] sm:gap-[10px] lg:gap-[12px] font-['Kumbh_Sans:Bold',sans-serif] font-bold text-[24px] sm:text-[32px] lg:text-[36px]">
              <p className="text-white">Let's Create Something</p>
              <p className="bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#8b5cf6] text-[transparent]">
                Extraordinary
              </p>
            </div>
            <p className="font-['Kumbh_Sans:Regular',sans-serif] text-[14px] sm:text-[18px] lg:text-[24px] text-[#d1d5dc] max-w-[700px] mx-auto">
              Have a project in mind? Let's discuss how thoughtful design can transform your vision into a product
              users love.
            </p>
          </div>

          <div className="flex flex-col gap-[20px] sm:gap-[28px] lg:gap-[32px] items-center w-full">
            <div className="flex flex-col gap-[18px] sm:gap-[22px] lg:gap-[24px] items-center">
              <p className="font-['Kumbh_Sans:Medium',sans-serif] font-medium text-[18px] sm:text-[22px] lg:text-[24px]">
                <span className="text-white">Connect With</span>
                <span className="text-[#ff6b35]"> Me</span>
              </p>
              <div className="flex gap-[10px] sm:gap-[12px] flex-wrap justify-center">
                {socialIcons.map((social, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-[rgba(255,107,53,0.25)] rounded-[34px] size-[44px] sm:size-[50px] lg:size-[54px] p-[6px] lg:p-[9px] flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-[#ff6b35] hover:shadow-lg hover:shadow-[rgba(255,107,53,0.3)]"
                  >
                    {social.Component ? (
                      <social.Component />
                    ) : (
                      <div className="size-[32px] sm:size-[38px] lg:size-[42px] rounded-full overflow-hidden">
                        <img alt="" className="size-full object-cover" src={social.src} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-[14px] sm:gap-[20px] lg:gap-[36px] w-full sm:w-auto lg:w-[500px]">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(contactRef, 'contact')}
                className="flex-1 h-[44px] sm:h-[48px] bg-gradient-to-b from-[#fe793a] to-[#b26cb6] rounded-[12px] border border-[#f86a40] font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold text-[14px] sm:text-[16px] text-white transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(255,107,53,0.4)]"
              >
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 h-[44px] sm:h-[48px] border border-[#f86a40] rounded-[12px] font-['Kumbh_Sans:SemiBold',sans-serif] font-semibold text-[14px] sm:text-[16px] text-white transition-all duration-300 hover:bg-[rgba(255,107,53,0.1)] hover:shadow-lg hover:shadow-[rgba(255,107,53,0.3)]"
              >
                Download Resume
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}