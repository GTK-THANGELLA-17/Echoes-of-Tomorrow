
import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Cake, Gift, PartyPopper, CalendarDays, Clock } from 'lucide-react';
import { calculateProgress } from '@/utils/progressCalculation';

interface WaitingCardProps {
  timeRemaining: string;
  timerDate: number;
  initialTimeDiff: number;
}

const WaitingCard: React.FC<WaitingCardProps> = ({ 
  timeRemaining,
  timerDate,
  initialTimeDiff
}) => {
  const [progress, setProgress] = useState<number>(0);
  
  // Update progress every 100ms for smoother animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(calculateProgress(false, timerDate, initialTimeDiff));
    }, 100);
    
    return () => clearInterval(progressInterval);
  }, [timerDate, initialTimeDiff]);

  return (
    <div className="capsule-card glass-morphism bg-gradient-to-r from-blue-300/50 via-cyan-200/50 to-blue-200/50 dark:bg-gradient-to-r dark:from-slate-800/50 dark:via-blue-900/50 dark:to-slate-800/50 dark:text-white relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute animate-float-premium" 
            style={{
              left: `${Math.random() * 90 + 5}%`, 
              top: `${Math.random() * 90 + 5}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `translateZ(${Math.random() * 30}px)`,
              filter: 'blur(0.5px)'
            }}
          >
            {i % 3 === 0 && <Cake className="text-blue-400 dark:text-blue-300" size={20 + Math.random() * 10} />}
            {i % 3 === 1 && <Gift className="text-cyan-400 dark:text-cyan-300" size={20 + Math.random() * 10} />}
            {i % 3 === 2 && <PartyPopper className="text-blue-400 dark:text-blue-300" size={20 + Math.random() * 10} />}
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 dark:from-blue-800/30 dark:to-cyan-800/30 backdrop-blur-sm z-0"></div>
      
      <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-blue-300 dark:via-cyan-300 dark:to-blue-300 flex items-center justify-center gap-3 relative z-10">
        <Cake className="h-9 w-9" /> Birthday Countdown <Cake className="h-9 w-9" />
      </h1>
      
      <div className="space-y-6 relative z-10">
        <div className="acrylic-bg p-8 rounded-xl text-center shadow-lg border border-blue-200/50 dark:border-blue-800/50">
          <div className="blur-content select-none p-6 bg-gradient-to-br from-blue-100/70 to-cyan-100/70 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-lg mb-4 border-2 border-dashed border-blue-300 dark:border-blue-700">
            <Gift className="w-16 h-16 mx-auto text-blue-500 dark:text-blue-400 animate-bounce" />
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-300 dark:to-cyan-300 mt-4">Special Birthday Surprise</p>
          </div>
          <p className="text-lg font-semibold text-blue-700 dark:text-blue-300">
            Time until your special day:
          </p>
          <p className="text-5xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 dark:from-blue-300 dark:via-cyan-300 dark:to-blue-300">
            {timeRemaining}
          </p>
        </div>
        
        <div className="relative">
          <div className="flex justify-between text-sm mb-2 text-blue-600 dark:text-blue-300">
            <span className="flex items-center gap-1"><Clock size={16} />Waiting</span>
            <span className="flex items-center gap-1">Celebration Time!<PartyPopper size={16} /></span>
          </div>
          <Progress 
            value={progress} 
            className="h-3 bg-blue-100 dark:bg-blue-950"
          />
          {/* Add floating particles around the progress bar */}
          {[...Array(5)].map((_, i) => (
            <div 
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full animate-float-slow"
              style={{
                left: `${(progress || 0) - 5 + Math.random() * 10}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.7,
                animationDelay: `${i * 0.2}s`
              }}
            ></div>
          ))}
          <div className="flex justify-between text-sm mt-2 text-blue-500 dark:text-blue-300">
            <span className="flex items-center gap-1"><CalendarDays size={16} />Counting Down</span>
            <span className="flex items-center gap-1">May 12th, 2025<Cake size={16} /></span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-blue-500 dark:text-blue-300 relative z-10">
        Your special birthday surprise is waiting for you!
      </div>
    </div>
  );
};

export default WaitingCard;
