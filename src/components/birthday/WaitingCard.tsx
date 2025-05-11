import React, { useEffect, useState } from 'react';
import { Cake, Gift, PartyPopper, CalendarDays, Clock } from 'lucide-react';

interface WaitingCardProps {
  timeRemaining: string;
  timerDate: number;
  initialTimeDiff: number;
}

const WaitingCard: React.FC<WaitingCardProps> = ({ timeRemaining, timerDate, initialTimeDiff }) => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(initialTimeDiff);
  const [animationTriggered, setAnimationTriggered] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeRemaining = calculateProgress(false, timerDate, initialTimeDiff);
      setSecondsRemaining(newTimeRemaining);
      if (newTimeRemaining % 1 === 0 && !animationTriggered) { // Trigger animation at every new second
        setAnimationTriggered(true);
        setTimeout(() => setAnimationTriggered(false), 1000); // Reset after 1 second
      }
    }, 1000); // Update every second
    return () => clearInterval(interval);
  }, [timerDate, initialTimeDiff, animationTriggered]);

  const floatingItems = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 90 + 5}%`,
    top: `${Math.random() * 90 + 5}%`,
    delay: `${i * 0.4}s`,
    size: 24 + Math.floor(Math.random() * 12),
    icon: i % 3 === 0 ? <Cake size={28} className="text-blue-400 dark:text-blue-300" />
      : i % 3 === 1 ? <Gift size={28} className="text-cyan-400 dark:text-cyan-300" />
      : <PartyPopper size={28} className="text-blue-400 dark:text-blue-300" />
  }));

  return (
    <div className="relative p-6 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-200/40 via-cyan-200/40 to-blue-100/40 dark:from-slate-900/50 dark:via-blue-900/40 dark:to-slate-900/50 shadow-2xl border border-blue-300/30 dark:border-blue-800/40 backdrop-blur-lg text-blue-800 dark:text-blue-200">

      {floatingItems.map(({ id, left, top, delay, icon, size }) => (
        <div
          key={id}
          className="absolute animate-float-premium"
          style={{
            left, top,
            animationDelay: delay,
            filter: 'blur(0.6px)',
            transform: `translateZ(${Math.random() * 20}px)`
          }}
        >
          {icon}
        </div>
      ))}

      <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-blue-300 dark:to-cyan-300 flex items-center justify-center gap-3 z-10 relative">
        <Cake className="h-9 w-9" /> Birthday Countdown <Cake className="h-9 w-9" />
      </h1>

      <div className="bg-white/40 dark:bg-slate-800/30 border border-dashed border-blue-300 dark:border-blue-700 rounded-xl p-6 text-center z-10 relative">
        <Gift className="w-14 h-14 mx-auto text-blue-500 dark:text-blue-300 animate-bounce mb-3" />
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-300 dark:to-cyan-300">
          Special Birthday Surprise
        </p>
        <p className="mt-3 text-lg font-semibold">Time until your special day:</p>
        <p className="text-5xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-blue-300 dark:via-cyan-300 dark:to-blue-300">
          {timeRemaining}
        </p>
      </div>

      <div className="mt-8 z-10 relative">
        <div className="flex justify-between text-sm mb-2">
          <span className="flex items-center gap-1"><Clock size={16} /> Waiting</span>
          <span className="flex items-center gap-1">Celebration Time! <PartyPopper size={16} /></span>
        </div>

        {/* New Animation for Every Second */}
        {animationTriggered && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center animate-pulse">
            <span className="text-6xl font-bold text-cyan-500 dark:text-cyan-300">⏳</span>
          </div>
        )}

        <div className="flex justify-between text-sm mt-2">
          <span className="flex items-center gap-1"><CalendarDays size={16} /> Counting Down</span>
          <span className="flex items-center gap-1">May 12th, 2025 <Cake size={16} /></span>
        </div>
      </div>

      <p className="mt-8 text-center text-sm italic z-10 relative">
        Your special day is almost here! 🎉
      </p>
    </div>
  );
};

export default WaitingCard;
