
import React, { useEffect, useState } from 'react';
import { formatTimeRemaining } from '@/utils/timeCapsule';
import { toast } from '@/components/ui/sonner';
import WaitingCard from './birthday/WaitingCard';
import RevealedContent from './birthday/RevealedContent';

const CapsuleDetail: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const [showCelebration, setShowCelebration] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [loadingText, setLoadingText] = useState<string>('');
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [loadingComplete, setLoadingComplete] = useState<boolean>(false);
  const [typingText, setTypingText] = useState<string>('');
  const [typingComplete, setTypingComplete] = useState<boolean>(false);
  const [confetti, setConfetti] = useState<boolean>(false);
  const [glowEffect, setGlowEffect] = useState<boolean>(false);
  const [showBlastEffects, setShowBlastEffects] = useState<boolean>(false);
  const [blastIntensity, setBlastIntensity] = useState<number>(1);
  
  // For testing: Setting the timer to just 10 seconds from now
  const testTimer = Date.now() + 20000; // 10 seconds
  
  // Production timer (May 12th, 2025)
  const birthdayDate = new Date('May 12, 2025 00:00:00').getTime();
  
  // Choose which timer to use (test or production)
  const timerDate = testTimer; // Change to birthdayDate for production
  
  // Store the initial time difference to calculate progress
  const [initialTimeDiff] = useState<number>(timerDate - Date.now());
  
  const destinationUrl = "https://wishes-to-you.vercel.app/";
  const birthdayMessage = "Happy Birthday! 🎂✨ May your special day be filled with joy, laughter, and all the wonderful things you deserve!";

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = formatTimeRemaining(timerDate);
      setTimeRemaining(remaining);

      if (now >= timerDate && !isRevealed) {
        setIsRevealed(true);
        clearInterval(interval);
        handleReveal();
        toast("It's time to celebrate! 🎉🎂", {
          position: "top-center",
          className: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-dancing text-lg glass-morphism"
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRevealed]);

  const typeMessage = (message: string) => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= message.length) {
        setTypingText(message.substring(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
        // Increase blast intensity after typing completes
        setBlastIntensity(3);
        // Add blast effects before redirecting
        setShowBlastEffects(true);
        // Slightly longer delay before redirecting to show blast effects
        setTimeout(() => {
          window.location.href = destinationUrl;
        }, 5000); // Increased from 3000ms to 5000ms for more time to see effects
      }
    }, 80);
  };

  const handleReveal = () => {
    setShowCelebration(true);
    setConfetti(true);
    
    setTimeout(() => {
      setGlowEffect(true);
      setShowLoading(true);
      
      // Animated loading progress with precise timing
      let progress = 0;
      const loadingInterval = setInterval(() => {
        progress += 2;
        if (progress >= 100) {
          clearInterval(loadingInterval);
          setLoadingProgress(100);
          setLoadingText(`Preparing your special surprise 100%`);
          setTimeout(() => setLoadingComplete(true), 500);
        } else {
          setLoadingProgress(progress);
          setLoadingText(`Preparing your special surprise ${progress}%`);
        }
      }, 50);
      
      setTimeout(() => {
        typeMessage(birthdayMessage);
      }, 4000);
    }, 3000);
  };

  return (
    <div className="max-w-2xl mx-auto font-birthday">
      {!isRevealed ? (
        <WaitingCard
          timeRemaining={timeRemaining}
          timerDate={timerDate}
          initialTimeDiff={initialTimeDiff}
        />
      ) : (
        <RevealedContent
          confetti={confetti}
          glowEffect={glowEffect}
          showCelebration={showCelebration}
          showLoading={showLoading}
          loadingComplete={loadingComplete}
          loadingProgress={loadingProgress}
          loadingText={loadingText}
          typingText={typingText}
          typingComplete={typingComplete}
          showBlastEffects={showBlastEffects}
          blastIntensity={blastIntensity}
        />
      )}
    </div>
  );
};

export default CapsuleDetail;
