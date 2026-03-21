import { motion } from 'motion/react';

interface AnimatedCircleProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function AnimatedCircle({ size = 400, strokeWidth = 2, className = '' }: AnimatedCircleProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  return (
    <svg
      width={size}
      height={size}
      className={className}
      style={{ overflow: 'visible' }}
    >
      {/* Outer rotating circle with gradient */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="url(#gradient1)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * 0.25}
        animate={{
          rotate: 360,
          strokeDashoffset: [circumference * 0.25, circumference * 0.75, circumference * 0.25],
        }}
        transition={{
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          },
          strokeDashoffset: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        style={{ originX: '50%', originY: '50%' }}
      />

      {/* Inner rotating circle */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius * 0.75}
        stroke="url(#gradient2)"
        strokeWidth={strokeWidth * 1.5}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference * 0.75}
        strokeDashoffset={circumference * 0.5}
        animate={{
          rotate: -360,
          strokeDashoffset: [circumference * 0.5, -circumference * 0.2, circumference * 0.5],
        }}
        transition={{
          rotate: {
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          },
          strokeDashoffset: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        style={{ originX: '50%', originY: '50%' }}
      />

      {/* Middle pulsing circle */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius * 0.5}
        stroke="url(#gradient3)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ originX: '50%', originY: '50%' }}
      />

      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff6b35" stopOpacity="1" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#ff6b35" stopOpacity="1" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
