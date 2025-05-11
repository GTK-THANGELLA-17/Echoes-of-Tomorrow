
import React from 'react';
import { PartyPopper, Sparkles } from 'lucide-react';
import { createBlastEffects, createCelebrationEffects } from '@/utils/celebrationEffects';

interface BirthdayMessageProps {
  typingText: string;
  typingComplete: boolean;
  showBlastEffects: boolean;
  blastIntensity: number;
}

const BirthdayMessage: React.FC<BirthdayMessageProps> = ({ 
  typingText, 
  typingComplete, 
  showBlastEffects,
  blastIntensity
}) => {
  return (
    <div className="reveal-content text-center p-8 acrylic-bg rounded-xl shadow-2xl max-w-lg z-20 border border-blue-300/50 dark:border-blue-700/50">
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 dark:from-blue-500 dark:to-cyan-600 opacity-30 animate-pulse blur-md"></div>
        <PartyPopper className="w-20 h-20 mx-auto text-blue-500 dark:text-blue-400 relative z-10 drop-shadow-[0_0_8px_rgba(51,195,240,0.6)]" />
      </div>
      
      <div className="typewriter mb-6 min-h-[6rem] relative perspective-1000">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 dark:from-blue-700/30 dark:to-cyan-700/30 rounded-lg blur-md"></div>
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-blue-300 dark:via-cyan-300 dark:to-blue-300 p-4 typing-cursor">{typingText}</p>
      </div>
      
      {typingComplete && (
        <>
          <p className="text-lg text-blue-600 dark:text-blue-300 mb-4">Taking you to your special site...</p>
          <div className="flex justify-center space-x-4">
            <Sparkles className="text-cyan-500 animate-sparkle-premium" />
            <Sparkles className="text-blue-500 animate-sparkle-premium delay-100" />
            <Sparkles className="text-cyan-500 animate-sparkle-premium delay-200" />
            <Sparkles className="text-blue-500 animate-sparkle-premium delay-300" />
          </div>
        </>
      )}
      
      {showBlastEffects && (
        <div className="absolute inset-0 overflow-hidden">
          {createBlastEffects(blastIntensity).map((blast) => (
            <div
              key={blast.key}
              className="blast-effect"
              style={blast.style}
            />
          ))}
          {createCelebrationEffects(blastIntensity).map((item) => (
            <div
              key={item.key}
              className="celebrate-item"
              style={item.style}
            >
              {item.emoji}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BirthdayMessage;
