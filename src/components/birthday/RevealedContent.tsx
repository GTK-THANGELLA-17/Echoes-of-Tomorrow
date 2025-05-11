
import React from 'react';
import LoadingAnimation from './LoadingAnimation';
import BirthdayMessage from './BirthdayMessage';
import { createConfettiElements, createFloatingElements } from '@/utils/celebrationEffects';

interface RevealedContentProps {
  confetti: boolean;
  glowEffect: boolean;
  showCelebration: boolean;
  showLoading: boolean;
  loadingComplete: boolean;
  loadingProgress: number;
  loadingText: string;
  typingText: string;
  typingComplete: boolean;
  showBlastEffects: boolean;
  blastIntensity: number;
}

const RevealedContent: React.FC<RevealedContentProps> = ({
  confetti,
  glowEffect,
  showCelebration,
  showLoading,
  loadingComplete,
  loadingProgress,
  loadingText,
  typingText,
  typingComplete,
  showBlastEffects,
  blastIntensity
}) => {
  return (
    <div className="capsule-card glass-morphism bg-gradient-to-r from-blue-300/50 via-cyan-200/50 to-blue-200/50 dark:bg-gradient-to-r dark:from-slate-800/40 dark:via-blue-800/40 dark:to-slate-700/40 min-h-[60vh] flex flex-col justify-center items-center relative overflow-hidden">
      {confetti && (
        <>
          {createConfettiElements().map((confetti) => (
            <div 
              key={confetti.key}
              className="absolute animate-confetti" 
              style={confetti.style}
            />
          ))}
        </>
      )}
      
      <div className={`absolute inset-0 ${glowEffect ? 'animate-pulse-glow' : ''}`} 
        style={{
          background: 'radial-gradient(circle at center, rgba(51,195,240,0.4) 0%, rgba(0,180,216,0.3) 70%, rgba(0,0,0,0) 100%)',
          pointerEvents: 'none',
          filter: 'blur(5px)'
        }}
      />
      
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none perspective-1000">
          {createFloatingElements().map((element) => (
            <div 
              key={element.key}
              className="absolute text-3xl animate-float-premium" 
              style={element.style}
            >
              {element.icon}
            </div>
          ))}
        </div>
      )}
      
      {showLoading && !loadingComplete && (
        <LoadingAnimation 
          loadingProgress={loadingProgress}
          loadingText={loadingText}
        />
      )}
      
      {loadingComplete && (
        <BirthdayMessage
          typingText={typingText}
          typingComplete={typingComplete}
          showBlastEffects={showBlastEffects}
          blastIntensity={blastIntensity}
        />
      )}
    </div>
  );
};

export default RevealedContent;
